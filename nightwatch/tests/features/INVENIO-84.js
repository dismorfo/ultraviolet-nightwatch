describe('INVENIO-84', function() {

  before((browser) => {
    // login process in pages/login
    var loginPage = browser.page.login();
    loginPage.navigate().login();
    var uploadPage = browser.page.upload();
    uploadPage.navigate().waitForElementVisible('body')
  })

  it('Has two alert messages in the File Upload section of the upload form', function(browser) {
    browser.page.upload().expect.elements('@fileUploadAlertMessages').count.toEqual(2)
  })


  it('Has a second alert message in the file upload section warning about file size', function(browser) {
    const searchText = "Contact the NYU Libraries UltraViolet service team at uv@nyu.edu if you have more than 100 files or 50GB."

    browser.page.upload().element.findAll('@fileUploadAlertMessages').nth(1).assert.visible();
    browser.page.upload().element.findAll('@fileUploadAlertMessages').nth(1).find("p").assert.visible();
    browser.element.findAll('div.ui.visible.warning.message').nth(1).assert.hasDescendants();
    browser.element.findAll('div.ui.visible.warning.message').nth(1).find('p').assert.textContains("100 files");
    // browser.assert.textContains("div.ui.visible.warning.message::nth(1) p", "100 files");
    // browser.page.upload().element.findAll('@fileUploadAlertMessages').nth(1).assert.containsText('.mainline-results', 'Nightwatch.js')
    // browser.page.upload().element.findByText(searchText).assert.visible();
    // browser.page.upload().element.findByText('100 files').assert.visible();
  })

  after(browser => browser.end())
})
