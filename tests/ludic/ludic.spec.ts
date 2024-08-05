import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/xyzzy/ludic/article/precis.html");
});

test("page has expected title text", async ({ page }) => {
  const pageHeader = page.locator("h1");
  await expect(pageHeader).toBeVisible();
  await expect(pageHeader).toHaveText("A Ludic Historian Précis");
});

test("header conditionally displays", async ({ page }) => {
  const header = page.locator("header");

  // Initial state: header should have the 'nav-down' class
  await expect(header).toHaveClass("nav-down");

  // Scroll down and verify class change
  await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
  await expect(header).toHaveClass("nav-up");

  // Note that above isn't actually making sure that the element
  // is not visible. The following will not work. This is
  // because the opacity and positioning of the element change
  // but the display of the element does not. Playwright does not
  // check opacity of the element when determining visibility.
  // https://playwright.dev/docs/actionability#visible

  // await expect(header).toBeVisible();

  await expect(header).not.toHaveCSS("opacity", "1");

  // Scroll up and verify class change back to 'nav-down'.
  await page.evaluate("window.scrollTo(0, 0)");
  await expect(header).toHaveClass("nav-down");

  // Make sure the header is visible.
  // See above. The below would not work.

  //await expect(header.isVisible).toBe(true);

  await expect(header).toHaveCSS("opacity", "1");
});

test("scroll-to-top widget has conditional visibility", async ({ page }) => {
  const progressScroll = page.locator("#progress-scroll");

  // Initially, the widget should be hidden
  await expect(progressScroll).toHaveCSS("visibility", "hidden");

  // Simulate scrolling to make the widget visible
  await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
  await expect(progressScroll).toHaveCSS("visibility", "visible");

  // Wait for three seconds and check if the widget is visible.
  // It should be because it's at the bottom.
  await page.waitForTimeout(3000);
  await expect(progressScroll).toHaveCSS("visibility", "visible");

  // Simulate scrolling back up a little
  await page.evaluate("window.scrollTo(0, document.body.scrollHeight / 2)");

  // Wait for 3 seconds and check if the widget is hidden
  await page.waitForTimeout(3000);
  await expect(progressScroll).toHaveCSS("visibility", "hidden");
});

test("dark/light mode changes background", async ({ page }) => {
  const lightModeLabel = page.locator('label[for="mode-light"]');
  const darkModeLabel = page.locator('label[for="mode-dark"]');
  const body = page.locator("body");

  // Click light mode label
  await lightModeLabel.click();

  // Verify light mode background color
  const lightBgColor = await body.evaluate(
    () => getComputedStyle(document.body).backgroundColor,
  );

  // expect(lightBgColor).toBe("hsla(0, 0%, 100%, 1)");
  expect(lightBgColor).toBe("rgb(255, 255, 255)");

  // Click dark mode label
  await darkModeLabel.click();

  // Verify dark mode background color
  const darkBgColor = await body.evaluate(
    () => getComputedStyle(document.body).backgroundColor,
  );

  //expect(darkBgColor).toBe("hsla(0, 0%, 0%, 1)");
  expect(darkBgColor).toBe("rgb(0, 0, 0)");
});
