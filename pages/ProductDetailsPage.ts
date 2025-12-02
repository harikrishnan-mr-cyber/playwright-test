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
  }

  async verifyRemoveButtonVisible() {
    await expect(this.removeButton).toBeVisible();
  }

  async verifyDescription(description: string) {
    await expect(this.description).toHaveText(description);
  }
}
