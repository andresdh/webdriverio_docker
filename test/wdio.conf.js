exports.config = {
    
    runner: 'local',
    path: '/wd/hub',
    hostname: 'hub',
    port: 4444,
    specs: [
        './test/specs/basic_spec.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
    }],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'hub',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    
    framework: 'mocha',
    //
    reporters: ['spec'],
 
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    onPrepare() {
        setTimeout(() => { console.log("Wait before all workers got launched"); }, 5000);
    },
}
