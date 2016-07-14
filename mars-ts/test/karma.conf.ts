/// <reference path="../typings/globals/node/index.d.ts" />
/// <reference path="../typings/globals/karma/index.d.ts" />


/*
 *     .-.                                                               .-.
 *    /   \           .-.                                 .-.           /   \
 *   /     \         /   \       .-.     _     .-.       /   \         /     \
 * -/Intermountain Healthcare Open Systems Development--/-----\-------/-------\--
 *           \     /       \   /     `-'   `-'     \   /       \     /
 *            \   /         `-'                     `-'         \   /
 *             `-'                                               `-'
 *
 *
 *  Confidential
 *
 *  These computer programs and their screen displays and documentation are
 *  confidential and proprietary to Intermountain Healthcare ("Intermountain")
 *  and may not be disclosed or used outside of Intermountain without the written
 *  consent of Intermountain in each case.
 *
 *  Unpublished Work of Authorship
 *
 *  Copyright Intermountain Healthcare. All Rights Reserved
 *
 *  No License
 *
 *  No license or right to any of these computer programs, screen displays or
 *  documentation is granted, unless and except to the extent of a formal written
 *  agreement with Intermountain.
 */
// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-01-02 using
// generator-karma 0.8.3

const wiredep = require('wiredep')().js; //TODO: Fix typings
const dependencies = wiredep.concat([
    require.resolve('angular-mocks'),
    require.resolve('q')
]);

module.exports = function (config) {
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // base path, that will be used to resolve files and exclude
        basePath: '../.generated/client',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: dependencies.concat([
            '**/*.module.js',
            '**/*.js',
            '../test/spec/**/*.js',
            '!**/karma.conf.js'
        ]),

        // list of files / patterns to exclude
        exclude: [ ],

        singleRun: true,
        reporters: [
            'junit',
            'coverage',
            'spec'
        ],
        junitReporter: { outputFile: '../test/report/js-test-reports/TESTS-xunit.xml' },
        coverageReporter: {
            dir: '../test/report/js-test-reports/coverage',
            reporters: [
                { type: 'lcov', subdir: '.' },
                { type: 'cobertura', subdir: '.' }
            ]
        },

        // web server port
        port: 3150,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [ 'PhantomJS' ],

        preprocessors: {
            // source files, that you want to generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            '**/*.js': 'coverage'
        },

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_ERROR
    });
};