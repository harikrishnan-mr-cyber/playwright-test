import { test, expect } from '@playwright/test';

test('opening product page', async ({ page }) => {
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
  // print a message if the title is visible if not print an error message
  if (await page.locator('.title').isVisible()) {
    console.log('Login successful, products page is visible');
  } else {
    console.error('Login failed, products page is not visible');
  }

  // 6. verify the Sauce Labs Backpack product link is avaialable and print a success message else print an error message
  const productLink = page.locator('.inventory_item_name:has-text("Sauce Labs Backpack")');
  if (await productLink.isVisible()) {
    console.log('Sauce Labs Backpack product link is available');
  } else {
    console.error('Sauce Labs Backpack product link is not available');
  }

  // 7. click on the Sauce Labs Backpack
  await page.click('.inventory_item_name:has-text("Sauce Labs Backpack")');

  // 8. verify that the product description is visible and print a success message else print an error message
  await expect(page.locator('.inventory_details_desc')).toHaveText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
  
});

test('clicking add to cart changes button to remove ', async ({ page }) => {
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

  // 7. click on the Sauce Labs Backpack
  await page.click('.inventory_item_name:has-text("Sauce Labs Backpack")');
  console.log('Clicked on Sauce Labs Backpack');

  // 8. click on the Add to Cart button
  await page.click('text=ADD TO CART');
  console.log('Clicked on Add to Cart button for Sauce Labs Backpack');
  // 9. verify button changes to remove
  await expect(page.locator("text=REMOVE")).toBeVisible();
  console.log('Add to Cart button changed to Remove button');
 
});

test('clicking add to cart changes number cart icon ', async ({ page }) => {
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

  // 7. click on the Sauce Labs Backpack
  await page.click('.inventory_item_name:has-text("Sauce Labs Backpack")');
  console.log('Clicked on Sauce Labs Backpack');

  // 8. click on the Add to Cart button
  await page.click('text=ADD TO CART');
  console.log('Clicked on Add to Cart button for Sauce Labs Backpack');
  // 9. verify number cart icon changes to 1
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  console.log('Cart icon number changed to 1');
 
});

test('clicking check out', async ({ page }) => {
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

  // 7. click on the Sauce Labs Backpack
  await page.click('.inventory_item_name:has-text("Sauce Labs Backpack")');
  console.log('Clicked on Sauce Labs Backpack');

  // 8. click on the Add to Cart button
  await page.click('text=ADD TO CART');
  console.log('Clicked on Add to Cart button for Sauce Labs Backpack');
// 9. verify button changes to remove
  await expect(page.locator("text=REMOVE")).toBeVisible();
  console.log('Add to Cart button changed to Remove button');
  // 10. click on the cart icon
  await page.click('.shopping_cart_link');
  console.log('Clicked on cart icon');
  // 11. verify that the cart page is visible
  await expect(page.locator('.title')).toHaveText('Your Cart');
  console.log('Cart page is visible');
  // 12. click on the checkout button
  await page.click('text=CHECKOUT');
  console.log('Clicked on Checkout button');
  // 13. verify that the checkout page is visible
  await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
  console.log('Checkout page is visible');
  // 14. fill in the first name
  await page.fill('#first-name', 'John');
  // 15. fill in the last name
  await page.fill('#last-name', 'Doe');
  // 16. fill in the zip code
  await page.fill('#postal-code.form_input', '12345');
  // 17. click on the continue button
  await page.click('#continue');
  console.log('Clicked on Continue button');
  // 18. verify that the checkout overview page is visible
  await expect(page.locator('.title')).toHaveText('Checkout: Overview');
  console.log('Checkout Overview page is visible');
  // 19. click on the finish button
  await page.click('#finish');
  console.log('Clicked on Finish button');
  // 20. verify that the checkout complete page is visible
  await expect(page.locator('.title')).toHaveText('Checkout: Complete!');
  console.log('Checkout Complete page is visible');
  // 21. verify that the thank you message is visible
  const thankYouMessage = await page.locator('.complete-header').textContent();
  expect(thankYouMessage).toContain('Thank you for your order!');
  console.log('Thank you message is visible:', thankYouMessage);

});