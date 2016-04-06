import { Ng2TodoTestPage } from './app.po';

describe('ng2-todo-test App', function() {
  let page: Ng2TodoTestPage;

  beforeEach(() => {
    page = new Ng2TodoTestPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-todo-test Works!');
  });
});
