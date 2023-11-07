describe('INVENIO-114', function() {

  before((browser) => {
    // login process in pages/login
    var loginPage = browser.page.login();
    loginPage.navigate().login();
  })

  it('Uses "Additional Dates" instead of "Dates" in Deposit > Recommended information', function(browser) {

    var uploadPage = browser.page.upload();
    uploadPage.navigate()
    browser.assert.textContains('label[for="metadata.dates"]', "Additional Dates")
    // browser.element.find('label[for="metadata.dates"]').assert.textContains("Additional Dates")

  })
  after(browser => browser.end())
})
