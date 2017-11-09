import { NtUicorePage } from './app.po';

describe('nt-uicore App', () => {
  let page: NtUicorePage;

  beforeEach(() => {
    page = new NtUicorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
