import { BarangPage } from './app.po';

describe('barang App', () => {
  let page: BarangPage;

  beforeEach(() => {
    page = new BarangPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
