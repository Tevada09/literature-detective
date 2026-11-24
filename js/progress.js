// Small progress helper. No account or server is needed.
const Progress = {
  key: "literatureDetectiveProgress",
  read() {
    try { return JSON.parse(localStorage.getItem(this.key)) || { completed: {}, totalReads: 0 }; }
    catch { return { completed: {}, totalReads: 0 }; }
  },
  saveReport(storyId, report) {
    const data = this.read();
    data.completed[storyId] = { ...report, completedAt: new Date().toISOString() };
    data.totalReads = Object.keys(data.completed).length;
    localStorage.setItem(this.key, JSON.stringify(data));
  },
  getStory(storyId) { return this.read().completed[storyId] || null; },
  getCompletedCount() { return Object.keys(this.read().completed).length; },
  clear() { localStorage.removeItem(this.key); }
};
