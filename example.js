const playwright = require("playwright");
const { getExecutablePath } = require("@recordreplay/playwright-config");

(async () => {
	const browser = await playwright.firefox.launch({
		headless: false,
		executablePath: getExecutablePath("firefox"),
		env: {
			RECORD_ALL_CONTENT: 1,
		},
	});
	const page = await browser.newPage();
	await page.goto("https://app.replay.io");
	await page.screenshot({ path: "replay.png" });

	await page.waitForTimeout(30000);
	await page.close();
	await browser.close();
})();
