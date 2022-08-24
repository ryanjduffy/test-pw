const playwright = require("playwright");
const { devices } = require("@replayio/playwright");

it("basic test", async () => {
  const browser = await playwright.firefox.launch({
    ...devices["Replay Firefox"].launchOptions,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://playwright.dev/");
  const title = page.locator(".navbar__inner .navbar__title");

  await expect(await title.textContent()).toBe("Playwright");
  await browser.close();
});

it("basic test 2", async () => {
  const browser = await playwright.firefox.launch({
    ...devices["Replay Firefox"].launchOptions,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://playwright.dev/");
  const title = page.locator(".navbar__inner .navbar__title");

  await expect(await title.textContent()).toBe("Playwright");
  await browser.close();
});
