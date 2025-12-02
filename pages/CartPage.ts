// pages/CartPage.ts
import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly title: Locator;
  readonly product: Locator;
  readonly checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.product = page.locator('.inventory_item_name');
    this.checkoutBtn = page.locator('text=CHECKOUT');
  }

  async verifyCartPage() {
    await expect(this.title).toHaveText('Your Cart');
  }

  async verifyProductInCart(productName: string) {
    await expect(this.product).toHaveText(productName);
    console.log(`Product "${productName}" is verified in the cart`);
  }

  async clickCheckout() {
    await this.checkoutBtn.click();
  }
}
