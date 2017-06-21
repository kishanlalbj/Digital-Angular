import { DigitalPortalPage } from './app.po';

describe('digital-portal App', () => {
  let page: DigitalPortalPage;

  beforeEach(() => {
    page = new DigitalPortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
