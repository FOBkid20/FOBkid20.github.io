const { defineConfig, devices } = require('@playwright/test');

const PORT = 4173;

module.exports = defineConfig({
    testDir: 'tests/e2e',
    fullyParallel: true,
    reporter: 'list',
    use: {
        baseURL: `http://localhost:${PORT}`,
        trace: 'retain-on-failure'
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
    ],
    webServer: {
        command: `node tests/e2e/static-server.js ${PORT}`,
        url: `http://localhost:${PORT}/index.html`,
        reuseExistingServer: !process.env.CI
    }
});
