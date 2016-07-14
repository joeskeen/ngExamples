/// <reference path="../../typings/globals/node/index.d.ts" />
/// <reference path="../../typings/globals/jasmine/index.d.ts" />

/**
 * Created by lbleak on 5/14/2015.
 */
var HtmlReporter = require("protractor-html-screenshot-reporter");

exports.config = {
    allScriptsTimeout: 20000,
    getPageTimeout: 20000,
    capabilities: {
        browserName: 'chrome'
    },
    localSeleniumStandaloneOpts: {
        loopback: true
    },
    onPrepare: function() {
        // Add a reporter and store screenshots to `screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: '.generated/test/report/js-test-reports/screenshots'
        }));
    }
}