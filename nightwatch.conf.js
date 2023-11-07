// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['nightwatch/tests'],
  
  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  // globals_path: '',
  
  vite_dev_server: {
    start_vite: true,
    port: 5173
  },
  
  webdriver: {},

  test_workers: {
    enabled: true
  },

  page_objects_path: ['nightwatch/pages'],
  test_settings: {
    // settings for the default test environment
    default: {
      disable_error_log: false,
      launch_url: '${UV_URL}',
      // environment isolated global variables
      globals: {
        test_username: '${TEST_USER}',
        test_password: '${TEST_PW}',
      },

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--ignore-certificate-errors', '--allow-insecure-localhost'],
        },        
      },
      
      webdriver: {
        start_process: true,
        server_path: ''
      },
      
    },
    
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            '--no-sandbox',
            '--ignore-certificate-errors',
            '--allow-insecure-localhost',
            '--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },
    
  },
  
};
