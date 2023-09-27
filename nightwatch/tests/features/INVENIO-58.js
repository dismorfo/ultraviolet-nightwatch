describe('INVENIO-58', function() {

  before(browser => browser.navigateTo('https://127.0.0.1:5000/login/'))

  it('Make the Select a community field required for deposits', function(browser) {

    browser.waitForElementVisible('body')

    // Using CSS selector
    const usernameInput = 'input[name="email"]'

    const passwordInput = 'input[name="password"]'

    const loginButton = 'button[type="submit"]'

    const username = 'adminUV@test.com'

    const password = 'changeme'

    browser.setValue(usernameInput, username)

    browser.setValue(passwordInput, password)

    browser.click(loginButton)

    // Take a screenshot of the current browser viewpoint
    // browser.saveScreenshot('./images/screenshot.png');

    // Navigate to a different URL
    browser.url('https://127.0.0.1:5000/uploads/new');

    browser.url(function (result) {
      browser.assert.ok(result.value.includes('community=opendata'), 'Query string includes community=opendata in the Url.')
    })

    browser.waitForElementVisible('body')

    // Take a screenshot of the current browser viewpoint
    // browser.saveScreenshot('./images/community.png')

    const parentSelector = '#communityRequired div.page-subheader-element:nth-child(2)'    

    browser.assert.textContains(parentSelector, 'NYU Open Data')

    browser.execute(function (parentSelector) {
      const parentElement = document.querySelector(parentSelector);
      const computedStyle = getComputedStyle(parentElement, '::after')
      return computedStyle.content;
    }, [parentSelector], function (result) {
      const afterContent = result.value

      // Perform an assertion on the ::after content
      browser.assert.equal(afterContent, '"*"', '::after content is correct (it is "*")')
    })

  })

  after(browser => browser.end())

})
