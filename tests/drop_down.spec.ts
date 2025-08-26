import { test, expect } from '@playwright/test';

test('Check presence of drop down menu', async ({ page }) => {
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
  console.log('Login successful, products page is visible');
  // 6. verify that there is a drop down menu
  await expect(page.locator('.product_sort_container')).toBeVisible();
  console.log('Drop down menu is visible');
});

test('Check drop down menu options', async ({ page }) => {
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
  console.log('Login successful, products page is visible');
  // 6. verify that there is a drop down menu
  await expect(page.locator('.product_sort_container')).toBeVisible();
  console.log('Drop down menu is visible');
  // 7. click on the drop down menu
  await page.click('.product_sort_container');
  console.log('Clicked on drop down menu');
  // 8. verify that there are four options in the drop down menu
  const options = page.locator('.product_sort_container option');
  await expect(options).toHaveCount(4);
  // 9. verify the text of each option
  console.log('Drop down menu has four options');
  await expect(options.nth(0)).toHaveText('Name (A to Z)');
  console.log('First option is Name (A to Z)');
  await expect(options.nth(1)).toHaveText('Name (Z to A)');
  console.log('Second option is Name (Z to A)');
  await expect(options.nth(2)).toHaveText('Price (low to high)');
  console.log('Third option is Price (low to high)');
  await expect(options.nth(3)).toHaveText('Price (high to low)');
  console.log('Fourth option is Price (high to low)');
});
