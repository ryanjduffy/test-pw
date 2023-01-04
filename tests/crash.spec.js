const { test, expect } = require("@playwright/test");

test("test", async ({ page }) => {
  // Go to https://browserleaks.com/features
  await page.goto("https://browserleaks.com/features");

  const pages = [
    "Features Detection",
    "Geolocation API",
    "Content Filters",
    "JavaScript",
    "Canvas Fingerprint",
    "WebGL Report",
  ];

  for await (const p of pages) {
    await page.locator("#nav_menu >> text=" + p).click();
    await page.waitForTimeout(5000);
  }
});
