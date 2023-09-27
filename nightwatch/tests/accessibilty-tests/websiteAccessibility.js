/**
 * Rules the aXe uses:
 * https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
 */

describe('Accessibilty tests for UltraViole home page', function() {
  
  before(async function() {
    browser.navigateTo('https://127.0.0.1:5000/');
    await browser.axeInject();
  });

  after(function() {
    browser.end();
  });

  it('UltraViolet home page has accessible headers', function(browser) {
    browser.axeRun('body', {
      runOnly: ['empty-heading', 'page-has-heading-one', 'p-as-heading']
    });
  });
});
