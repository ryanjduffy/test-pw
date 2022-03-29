// playwright.config.js
// @ts-check
const { devices } = require("@replayio/playwright");

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	forbidOnly: !!process.env.CI,
	retries: 0,
	use: {
		trace: "on-first-retry",
		defaultBrowserType: "firefox",
	},
	projects: [
		{
			name: "replay-firefox",
			use: {
				...devices["Replay Firefox"],
			},
		},
	],
};

module.exports = config;
