import { test, expect } from '@playwright/test';

test('Login to SauceDemo', async ({ page }) => {
  // 1. Go to SauceDemo login page
  await page.goto('https://www.saucedemo.com/');

  // 2. Fill in username
  await page.fill('#user-name', 'standard_user');

  // 3. Fill in password
  await page.fill('#password', 'secret_sauce');

  // 4. Click login button
  await page.click('#login-button');

  // 5. Verify login success - check that products page is visible
  await expect(page.locator('.title')).toHaveText('Products');
});
// handle the exception if the login fails
test('Login failure handling', async ({ page }) => {
  // 1. Go to SauceDemo login page
  await page.goto('https://www.saucedemo.com/');

  // 2. Fill in username with incorrect value
  await page.fill('#user-name', 'wrong_user');

  // 3. Fill in password with incorrect value
  await page.fill('#password', 'wrong_password');

  // 4. Click login button
  await page.click('#login-button');

  // 5. Verify error message is displayed
  const errorMessage = await page.locator('.error-message-container').textContent();
  expect(errorMessage).toContain('Username and password do not match any user in this service');
}); 