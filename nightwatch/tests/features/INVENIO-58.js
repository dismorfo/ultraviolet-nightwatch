describe('INVENIO-58', function() {

  before((browser) => {
    // login process in pages/login
    var loginPage = browser.page.login();
    loginPage.navigate().login();
  })

  it('Redirects to community=opendata when navigating to the uploads/new', function(browser) {
    var uploadPage = browser.page.upload();
    uploadPage.navigate()
    browser.assert.urlContains('community=opendata');

    // Take a screenshot of the current browser viewpoint
    // browser.saveScreenshot('./images/community.png')
  })

  it("Has an asterisk next to the Selected Community text to indicate it's required", function() {
    const parentSelector = "#deposit-form div.page-subheader-element:nth-last-child(2)";

    browser.execute(function (parentSelector) {
      const parentElement = document.querySelector(parentSelector);
      const computedStyle = getComputedStyle(parentElement, '::after')
      return computedStyle.content;
    }, [parentSelector], function (result) {
      const afterContent = result.value
      
      // Perform an assertion on the :after content
      browser.assert.equal(afterContent, "\"*\"", ':after content is correct (it is "*")')
    })
  })

  after(browser => browser.end())
})
