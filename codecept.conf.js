exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://todomvc.com',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'todomvc-webdriverio',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }  
}