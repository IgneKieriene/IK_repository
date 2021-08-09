// playwright-dev-page.js
exports.StartPage = class StartPage {
    constructor(page) {
      this.page = page;
    }
    async goto() {
      await this.page.goto('https://testsheepnz.github.io');
    }
}