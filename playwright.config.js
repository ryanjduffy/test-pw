// playwright.config.js
// @ts-check
const { devices } = require("@recordreplay/playwright-config");

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	use: {
		trace: "on-first-retry",
		defaultBrowserType: "firefox",
	},
	projects: [
		{
			name: "firefox",
			use: {
				...devices["Replay Firefox"],
			},
		},
	],
};

module.exports = config;
