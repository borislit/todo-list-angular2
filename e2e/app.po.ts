export class Ng2TodoTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-todo-test-app p')).getText();
  }
}
