const { test, expect } = require('@playwright/test');

test.describe('Portfolio Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('file://' + __dirname + '/index.html');
  });

  test('should have the correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Majid Awan | Web Developer Portfolio');
  });

  test('should navigate to the about section', async ({ page }) => {
    await page.click('a[href="#about"]');
    await expect(page.locator('#about')).toBeVisible();
  });

  test('should navigate to the services section', async ({ page }) => {
    await page.click('a[href="#services"]');
    await expect(page.locator('#services')).toBeVisible();
  });

  test('should navigate to the projects section', async ({ page }) => {
    await page.click('a[href="#projects"]');
    await expect(page.locator('#projects')).toBeVisible();
  });

  test('should navigate to the contact section', async ({ page }) => {
    await page.click('a[href="#contact"]');
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('should submit the contact form', async ({ page }) => {
    await page.fill('input[placeholder="Your Name"]', 'John Doe');
    await page.fill('input[placeholder="Your Email"]', 'john.doe@example.com');
    await page.fill('input[placeholder="Subject"]', 'Test Subject');
    await page.fill('textarea[placeholder="Your Message"]', 'This is a test message.');
    await page.click('button[type="submit"]');
  });
});
