// @ts-check
/* @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
      headless: false,
      viewport: { width: 1280, height: 720 },
      screenshot: 'only-on-failure',
      ignoreHTTPSErrors: true,
      launchOptions: {
              slowMo: 1000,
          },
    },
  };
  module.exports = config;