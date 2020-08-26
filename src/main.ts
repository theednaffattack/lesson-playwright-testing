import { chromium, firefox, webkit } from "playwright";

async function main(): Promise<void> {
  for (const browserType of [chromium, firefox, webkit]) {
    // Launch browser
    const browser = await browserType.launch();

    // Create context (single browser instance?)
    const context = await browser.newContext();

    // Create a page
    const page = await context.newPage();

    // Carry out actions

    await page.goto("http://whatsmyuseragent.org/");
    await page.screenshot({ path: `output/${browserType.name()}.png` });

    // Close the browser
    browser.close();
  }
}

main();
