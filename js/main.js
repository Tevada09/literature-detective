// Main application navigation and page rendering.
const App = {
  currentStory: null,
  activeView: "home",
  toastTimer: null,

  init() {
    this.renderStoryCards();
    this.bindNavigation();
    this.bindLibraryFilters();
    document.getElementById("mobileMenu").addEventListener("click", () => {
      document.getElementById("mainNav").classList.toggle("open");
    });
    document.getElementById("backToStory").addEventListener("click", () => this.showView("reader"));
    this.showView("home");
  },

  bindNavigation() {
    document.querySelectorAll("[data-nav]").forEach(button => {
      button.addEventListener("click", () => this.showView(button.dataset.nav));
    });
  },

  showView(name) {
    const ids = { home:"homeView", library:"libraryView", about:"aboutView", reader:"readerView", missions:"missionsView", report:"reportView" };
    if (!ids[name]) return;
    this.activeView = name;
    document.querySelectorAll(".view").forEach(view => view.classList.remove("active"));
    document.getElementById(ids[name]).classList.add("active");
    document.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("active", link.dataset.nav === name || (["reader","missions","report"].includes(name) && link.dataset.nav === "library")));
    document.getElementById("mainNav").classList.remove("open");
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  renderStoryCards() {
    const cardHTML = story => {
      const saved = Progress.getStory(story.id);
      return `<article class="story-card">
        <div class="story-art" style="background:${story.art}">
          <span class="art-label">${story.level.toUpperCase()}</span>
          <span class="story-emoji">${story.emoji}</span>
        </div>
        <div class="story-card-body">
          <div class="story-meta"><span>${story.author}</span><span>${story.minutes} MIN READ</span></div>
          <h3>${story.title}</h3>
          <p>${story.description}</p>
          <button class="card-link" data-story="${story.id}">${saved ? "Read again · Case completed" : "Open this story"} <span>→</span></button>
        </div>
      </article>`;
    };
    document.getElementById("featuredStories").innerHTML = STORIES.slice(0, 3).map(cardHTML).join("");
    document.getElementById("allStories").innerHTML = STORIES.map(cardHTML).join("");
    document.querySelectorAll("[data-story]").forEach(button => button.addEventListener("click", () => this.openStory(button.dataset.story)));
    this.updateStats();
  },

  updateStats() {
    const count = Progress.getCompletedCount();
    const stats = document.querySelector(".stats-strip");
    if (stats) stats.querySelector("div:first-child span").textContent = `${count} completed case${count === 1 ? "" : "s"}`;
  },

  bindLibraryFilters() {
    let level = "all";
    const search = document.getElementById("storySearch");
    const apply = () => {
      const term = search.value.trim().toLowerCase();
      const results = STORIES.filter(story =>
        (level === "all" || story.level === level) &&
        `${story.title} ${story.description} ${story.author}`.toLowerCase().includes(term)
      );
      document.getElementById("allStories").innerHTML = results.length
        ? results.map(story => this.cardHTML(story)).join("")
        : `<div class="empty-state">No stories found. Try another search.</div>`;
      document.querySelectorAll("#allStories [data-story]").forEach(button => button.addEventListener("click", () => this.openStory(button.dataset.story)));
    };
    document.querySelectorAll("[data-level]").forEach(button => button.addEventListener("click", () => {
      level = button.dataset.level;
      document.querySelectorAll("[data-level]").forEach(chip => chip.classList.toggle("active", chip === button));
      apply();
    }));
    search.addEventListener("input", apply);
  },

  cardHTML(story) {
    const saved = Progress.getStory(story.id);
    return `<article class="story-card">
      <div class="story-art" style="background:${story.art}"><span class="art-label">${story.level.toUpperCase()}</span><span class="story-emoji">${story.emoji}</span></div>
      <div class="story-card-body"><div class="story-meta"><span>${story.author}</span><span>${story.minutes} MIN READ</span></div>
      <h3>${story.title}</h3><p>${story.description}</p>
      <button class="card-link" data-story="${story.id}">${saved ? "Read again · Case completed" : "Open this story"} <span>→</span></button></div>
    </article>`;
  },

  openStory(id) {
    const story = STORIES.find(item => item.id === id);
    if (!story) return;
    this.currentStory = story;
    const saved = Progress.getStory(id);
    const host = document.getElementById("readerContent");
    const paragraphs = story.paragraphs.map(paragraph => `<p>${this.highlightVocabulary(paragraph, story.vocabulary)}</p>`).join("");
    host.innerHTML = `
      <div class="reader-layout">
        <article class="reading-paper">
          <div class="eyebrow">CASE FILE / ${story.level.toUpperCase()} READING</div>
          <h1>${story.title}</h1>
          <div class="story-intro">${story.author} · ${story.minutes} minute read</div>
          <div class="reading-text" id="readingText">${paragraphs}</div>
          <div class="progress-track"><div class="progress-fill" id="readingProgress"></div></div>
          <small style="color:#92979b;font-size:10px">Scroll through the story to follow your reading progress.</small>
        </article>
        <aside class="reading-aside">
          <div style="font-size:34px">${story.emoji}</div>
          <h3>Your case is open.</h3>
          <p>${story.description}</p>
          <div class="tip"><b>🔎 Detective tip</b><br>Some words are highlighted. Click them to discover their meanings and example sentences.</div>
          <p><b>Before you begin:</b> Read each paragraph carefully. Think about who is in the story, what happens, and why.</p>
          ${saved ? `<div class="tip">✓ You have completed this case before. Try again to improve your score!</div>` : ""}
          <button class="button button-primary" id="startMissions" style="width:100%;margin-top:12px">Start detective missions →</button>
        </aside>
      </div>
      <div class="vocab-popup" id="vocabPopup"></div>`;
    host.querySelectorAll(".vocab-word").forEach(word => word.addEventListener("click", event => this.showVocab(event, word.dataset.word)));
    document.getElementById("startMissions").addEventListener("click", () => {
      MissionEngine.start(story);
      this.showView("missions");
    });
    const reading = document.getElementById("readingText");
    reading.addEventListener("scroll", () => this.updateReadingProgress(reading));
    window.addEventListener("scroll", () => this.updateReadingProgress(reading), { passive: true });
    this.showView("reader");
    this.updateReadingProgress(reading);
  },

  highlightVocabulary(text, vocabulary) {
    const words = Object.keys(vocabulary).sort((a,b) => b.length-a.length);
    const pattern = new RegExp(`\\b(${words.map(w => w.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")).join("|")})\\b`, "gi");
    return text.replace(pattern, match => `<button class="vocab-word" data-word="${match.toLowerCase()}">${match}</button>`);
  },

  showVocab(event, key) {
    const vocab = this.currentStory.vocabulary[key];
    if (!vocab) return;
    const popup = document.getElementById("vocabPopup");
    popup.innerHTML = `<b>${key}</b><p>${vocab.definition}</p><small>Example: ${vocab.example}<br>Similar meaning: ${vocab.synonym}</small>`;
    popup.classList.add("show");
    const rect = event.currentTarget.getBoundingClientRect();
    popup.style.left = `${Math.min(rect.left, window.innerWidth - 290)}px`;
    popup.style.top = `${Math.min(rect.bottom + 8, window.innerHeight - 150)}px`;
    clearTimeout(this.popupTimer);
    this.popupTimer = setTimeout(() => popup.classList.remove("show"), 6000);
  },

  updateReadingProgress(element) {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const total = element.scrollHeight - window.innerHeight;
    const progress = total <= 0 ? 100 : Math.max(0, Math.min(100, ((window.scrollY + window.innerHeight - rect.top) / (element.scrollHeight + rect.top)) * 100));
    const bar = document.getElementById("readingProgress");
    if (bar) bar.style.width = `${progress}%`;
  },

  showReport(story, report) {
    const host = document.getElementById("reportContent");
    const message = report.percentage >= 85 ? "Outstanding investigation!" : report.percentage >= 60 ? "Good detective work!" : "Every investigation helps you learn. Keep practicing!";
    host.innerHTML = `
      <div class="report-card">
        <div class="report-medal">${report.percentage >= 85 ? "🏆" : report.percentage >= 60 ? "🏅" : "📖"}</div>
        <div class="eyebrow">CASE FILE CLOSED · ${story.title.toUpperCase()}</div>
        <h1>${message}</h1>
        <p>You finished all four missions. Take a look at your detective report.</p>
        <div class="score-panel"><strong>${report.percentage}%</strong><span>${report.correct} correct answers out of ${report.total}</span></div>
        <div class="report-breakdown"><h3>Mission results</h3>
          ${report.breakdown.map(row => `<div class="report-row"><span>${row.title}</span><b>${row.correct} / ${row.total}</b></div>`).join("")}
        </div>
        <p>Reading helps you discover new words, understand people, and explore different ideas. Keep going!</p>
        <div class="report-actions">
          <button class="button button-primary" id="readAnother">Read another story →</button>
          <button class="button button-secondary" id="tryAgain">Try this case again</button>
        </div>
      </div>`;
    document.getElementById("readAnother").addEventListener("click", () => {
      this.renderStoryCards();
      this.showView("library");
    });
    document.getElementById("tryAgain").addEventListener("click", () => this.openStory(story.id));
    this.renderStoryCards();
    this.showView("report");
  }
};

document.addEventListener("DOMContentLoaded", () => App.init());
