// pages/ProductsPage.ts
import { expect, Locator, Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly productLink: (name: string) => Locator;
  readonly cartBadge: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.productLink = (name: string) => page.locator(`.inventory_item_name:has-text("${name}")`);
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async verifyProductsPage() {
    await expect(this.title).toHaveText('Products');
    console.log('Products page is visible');
  }

  async openProduct(name: string) {
    await this.productLink(name).click();
    console.log(`Clicked on product: ${name}`);
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}
