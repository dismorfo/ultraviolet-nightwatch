var loginCommands = {
  login: function() {
      return this
              .waitForElementVisible('body')
              .verify.visible('@username')
              .verify.visible('@password')
              .verify.visible('@submit')
              .setValue('@username', this.api.globals.test_username)
              .setValue('@password', this.api.globals.test_password)
              .click('@submit')
  }
}
module.exports = {
  commands: [loginCommands],
  elements: {
      'username': {
          selector: "input[name='email']"
      },
      'password': {
          selector: "input[name='password']"
      },
      'submit': {
          selector: "button[type='submit']"
      }
  },
  url: function() {
      return this.api.launch_url + '/login';
  },
}
