// Mission rendering and answer checking.
const MissionEngine = {
  currentStory: null,
  missionIndex: 0,
  questionIndex: 0,
  answers: {},
  locked: false,

  start(story) {
    this.currentStory = story;
    this.missionIndex = 0;
    this.questionIndex = 0;
    this.answers = {};
    this.locked = false;
    this.render();
  },

  get mission() { return this.currentStory.missions[this.missionIndex]; },
  get question() { return this.mission.questions[this.questionIndex]; },

  render() {
    const host = document.getElementById("missionsContent");
    const mission = this.mission;
    const question = this.question;
    const totalMissions = this.currentStory.missions.length;
    const answered = this.answers[`${this.missionIndex}-${this.questionIndex}`];
    const progress = this.currentStory.missions.map((_, i) => `<span class="${i <= this.missionIndex ? "done" : ""}"></span>`).join("");

    host.innerHTML = `
      <div class="missions-wrap">
        <div class="page-hero" style="padding:30px 10px 15px">
          <div class="eyebrow">CASE FILE: ${this.currentStory.title.toUpperCase()}</div>
          <h1>Follow the <em>clues.</em></h1>
          <p>Complete each mission to solve the story's case.</p>
        </div>
        <div class="mission-progress" aria-label="Mission progress">${progress}</div>
        <article class="mission-card">
          <div class="mission-kicker">MISSION ${this.missionIndex + 1} OF ${totalMissions} · QUESTION ${this.questionIndex + 1} OF ${mission.questions.length}</div>
          <h1>${mission.emoji} ${mission.title}</h1>
          <p class="mission-description">${mission.description}</p>
          <div class="question-block">
            <h3>${question.q}</h3>
            <div class="answer-options">
              ${question.options.map((option, i) => `
                <button class="answer-option ${answered === i ? "selected" : ""}" data-answer="${i}" ${this.locked ? "disabled" : ""}>
                  <b>${String.fromCharCode(65+i)}.</b> ${option}
                </button>`).join("")}
            </div>
            <div class="mission-feedback ${this.locked ? "show " + (answered === question.answer ? "good" : "try") : ""}">
              ${this.locked ? (answered === question.answer ? "✓ Correct! " : "Not quite. ") + question.explain : ""}
            </div>
          </div>
          <div class="mission-actions">
            <button class="button button-secondary" id="missionBack">${this.questionIndex === 0 && this.missionIndex === 0 ? "Exit missions" : "Previous"}</button>
            <button class="button button-primary" id="missionNext" ${!this.locked ? "disabled" : ""}>
              ${this.questionIndex === mission.questions.length - 1 && this.missionIndex === totalMissions - 1 ? "View detective report →" : "Next question →"}
            </button>
          </div>
        </article>
      </div>`;

    host.querySelectorAll("[data-answer]").forEach(button => {
      button.addEventListener("click", () => this.choose(Number(button.dataset.answer)));
    });
    document.getElementById("missionNext").addEventListener("click", () => this.next());
    document.getElementById("missionBack").addEventListener("click", () => {
      if (this.questionIndex > 0) { this.questionIndex--; this.locked = Boolean(this.answers[`${this.missionIndex}-${this.questionIndex}`] !== undefined); this.render(); }
      else if (this.missionIndex > 0) { this.missionIndex--; this.questionIndex = this.mission.questions.length - 1; this.locked = this.answers[`${this.missionIndex}-${this.questionIndex}`] !== undefined; this.render(); }
      else { App.showView("reader"); }
    });
  },

  choose(index) {
    if (this.locked) return;
    const key = `${this.missionIndex}-${this.questionIndex}`;
    this.answers[key] = index;
    this.locked = true;
    this.render();
  },

  next() {
    if (this.questionIndex < this.mission.questions.length - 1) {
      this.questionIndex++;
      this.locked = this.answers[`${this.missionIndex}-${this.questionIndex}`] !== undefined;
      this.render();
      return;
    }
    if (this.missionIndex < this.currentStory.missions.length - 1) {
      this.missionIndex++;
      this.questionIndex = 0;
      this.locked = this.answers[`${this.missionIndex}-0`] !== undefined;
      this.render();
      return;
    }
    this.finish();
  },

  finish() {
    let correct = 0, total = 0;
    const breakdown = this.currentStory.missions.map((mission, mi) => {
      let missionCorrect = 0;
      mission.questions.forEach((q, qi) => {
        total++;
        if (this.answers[`${mi}-${qi}`] === q.answer) { correct++; missionCorrect++; }
      });
      return { title: mission.title, correct: missionCorrect, total: mission.questions.length };
    });
    const report = { correct, total, percentage: Math.round((correct / total) * 100), breakdown };
    Progress.saveReport(this.currentStory.id, report);
    App.showReport(this.currentStory, report);
  }
};
