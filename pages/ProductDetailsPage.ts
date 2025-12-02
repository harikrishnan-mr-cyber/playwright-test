// pages/ProductDetailsPage.ts
import { expect, Locator, Page } from '@playwright/test';

export class ProductDetailsPage {
  readonly page: Page;
  readonly description: Locator;
  readonly addToCartButton: Locator;
  readonly removeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.description = page.locator('.inventory_details_desc');
    this.addToCartButton = page.locator('text=ADD TO CART');
    this.removeButton = page.locator('text=REMOVE');
  }

  async addToCart() {
    await this.addToCartButton.click();
    console.log('Clicked on Add to Cart button');
  }

  async verifyRemoveButtonVisible() {
    await expect(this.removeButton).toBeVisible();
    console.log('Remove button is visible');
  }

  async verifyDescription(prodDescription: string) {
    await expect(this.description).toHaveText(prodDescription);
    console.log('Product description "${prodDescription}" is verified');
  }
}
