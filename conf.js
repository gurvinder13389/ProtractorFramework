var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var configData = require('./resources/config.json');
var prot = require('protractor');

exports.config = {
    directConnect: true, //npm install for node_modules folder // npm run pre for running the script //selenium  i npm
    capabilities: {
      'browserName': 'chrome'
    },
  
    framework: 'jasmine',
  
    specs: ['./tests/*.js'],
  
    jasmineNodeOpts: {
      defaultTimeoutInterval: 60000
    },
// spec reporter
    onPrepare: function() {
      //browser.ignoreSynchronization=true;
      browser.get(configData.appData.url);

      var vDate = new Date();
      var newDate = vDate.getFullYear() + '-' + (vDate.getMonth()+1) +'-'+ vDate.getDate() + '-'+ vDate.getHours()+'-'+vDate.getMinutes();
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'reports/' + newDate,
          takeScreenshotsOnlyOnFailures: false,
          cleanDestination: false
        })
      );
    // onPrepare: function() {
    //   browser.manage().window().maximize();

    //   }

      jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
          displayStacktrace: true
        }
      }));

   }
  };