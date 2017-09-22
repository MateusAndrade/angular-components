import { AngularComponentsPage } from './app.po';

describe('angular-components App', () => {
  let page: AngularComponentsPage;

  beforeEach(() => {
    page = new AngularComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
