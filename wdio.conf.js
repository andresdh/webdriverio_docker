exports.config = {
    runner: 'local',
    port: 4444,
    runner: "local",
    hostname: "localhost",
    path: '/wd/hub',
    specs: [
        './test/specs/*.js'
    ],
    sync: true,
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'firefox',
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://webdriver.io',
    waitforTimeout: 10000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
