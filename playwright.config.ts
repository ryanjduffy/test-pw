import type { ReplayReporterConfig } from "@replayio/test-utils";
import { devices } from "@replayio/playwright";
import { defineConfig } from "@playwright/test";

const config = defineConfig({
  forbidOnly: !!process.env.CI,
  retries: 3,
  reporter: [
    ["line"],
    [
      "@replayio/playwright/reporter",
      {
        apiKey: "rwk_FPMMwDQ8gh7CetByIvxzE6qAy6im2r49OtAZQn7MRGl",
        upload: true,
        filter: (r) => r.metadata.test?.result === "failed",
      } as ReplayReporterConfig,
    ],
  ],
  projects: [
    {
      name: "replay-firefox",
      use: {
        ...devices["Replay Firefox"],
      },
    },
    {
      name: "replay-chromium",
      use: {
        ...devices["Replay Chromium"],
      },
    },
  ],
});

module.exports = config;
