// pages/CartPage.ts
import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly title: Locator;
  readonly checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.checkoutBtn = page.locator('text=CHECKOUT');
  }

  async verifyCartPage() {
    await expect(this.title).toHaveText('Your Cart');
  }

  async clickCheckout() {
    await this.checkoutBtn.click();
  }
}
