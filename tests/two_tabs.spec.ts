import { test, expect } from '@playwright/test';

test('opening product page in a new tab', async ({ page, context }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page.locator('.title')).toHaveText('Products');
  if (await page.locator('.title').isVisible()) {
    console.log('Login successful, products page is visible');
  } else {
    console.error('Login failed, products page is not visible');
  }
  
  // 6. verify the Sauce Labs Backpack product link is available
  const productLocator = page.locator('.inventory_item_name:has-text("Sauce Labs Backpack")');
  if (await productLocator.isVisible()) {
    console.log('Sauce Labs Backpack product link is available');
  } else {
    console.error('Sauce Labs Backpack product link is not available');
    return; // stop the test as product link is missing
  }

  // 7. get the href of the product link and open it in a new tab
  const href = await productLocator.getAttribute('href');
  if (!href) {
    console.error('Could not read href from product link');
    return;
  }

  // Resolve relative href to absolute URL
  const productUrl = new URL(href, page.url()).toString();
  console.log('Opening product URL in new tab:', productUrl);

  // Open new tab and navigate
  const newTab = await context.newPage();
  try {
    await newTab.goto(productUrl);
    await newTab.waitForLoadState('domcontentloaded');

    // 8. verify that the product description is visible on the new tab
    const descLocator = newTab.locator('.inventory_details_desc');
    const expectedDesc =
      'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.';

    await expect(descLocator).toHaveText(expectedDesc);

    if (await descLocator.isVisible()) {
      console.log('Product description is visible in new tab and matches expected text');
    } else {
      console.error('Product description is not visible in the new tab');
    }
  } finally {
    // Close the new tab to keep the test environment clean
    await newTab.close();
  }
});
