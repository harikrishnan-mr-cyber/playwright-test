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

// export class CheckoutPage {
//   readonly page: Page;
//   readonly firstname: Locator;
//   readonly lastname: Locator;
//   readonly zipcode: Locator;
//   readonly checkoutBtn: Locator;
//   readonly error: Locator
  

//   constructor(page: Page) {
//     this.page = page;
//     this.firstname = page.locator('#first-name');
//     this.lastname = page.locator('#last-name');
//     this.zipcode = page.locator('#postal-code');
//     this.checkoutBtn = page.locator('#continue');
//     this.error = page.locator('.error-message-container');
//   }

//   async verifyCheckoutPage() {
//     await expect(this.page.locator('.title')).toHaveText('Checkout: Your Information');
//     console.log('Checkout page is visible');
//     }

//   async enterCheckoutInfo(first: string, last: string, zip: string) {
//     await this.firstname.fill(first);
//     await this.lastname.fill(last);
//     await this.zipcode.fill(zip);
//   };

//   async validateCheckoutInfoError(text: string) {
//     await expect(this.error).toBeVisible();
//     await expect(this.error).toContainText(text);
//     console.log(`Checkout info error "${text}" is verified`);
//   };

//   async proceedToCheckout() {
//     await this.checkoutBtn.click();
//     console.log('Proceeded to Checkout');
//   }

//   async verifyOverviewPage() {
//     await expect(this.page.locator('.title')).toHaveText('Checkout: Overview');
//     console.log('Checkout Overview page is visible');
//   }

//   async totalAmount() {
//     await expect(this.page.locator('.summary_total_label')).toBeVisible();
//     const total = await this.page.locator('.summary_total_label').textContent();
//     console.log(`Total amount "${total}" is verified`);
//   }

//   async verifyPurchaseCompletePage() {
//     await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
//     console.log('Purchase Complete page is visible');
//   }

// }
