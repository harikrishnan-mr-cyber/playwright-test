import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Login to view Product Page', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await products.verifyProductsPage();
});

test('Opening a product from Products Page', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const productDetails = new ProductDetailsPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await products.verifyProductsPage();
  await products.openProduct('Sauce Labs Bike Light');
  await productDetails.verifyDescription(
    'A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.'
  );
});

test('Adding a product to cart from Product Details Page', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const productDetails = new ProductDetailsPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await products.openProduct('Sauce Labs Bike Light');
  await productDetails.addToCart();
  await productDetails.verifyRemoveButtonVisible();
});

test('Adding a product to cart and verifying in Cart Page', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const productDetails = new ProductDetailsPage(page);
  const cartPage = new CartPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await products.openProduct('Sauce Labs Bike Light');
  await productDetails.addToCart();
  await productDetails.verifyRemoveButtonVisible();
  await products.goToCart(); // Navigate to Cart Page
  await cartPage.verifyCartPage();
  await cartPage.verifyProductInCart('Sauce Labs Bike Light');
  await cartPage.clickCheckout();
});

test('Adding a product to cart and verify checking out page appears', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const productDetails = new ProductDetailsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await products.openProduct('Sauce Labs Bike Light');
  await productDetails.addToCart();
  await productDetails.verifyRemoveButtonVisible();
  await products.goToCart(); // Navigate to Cart Page
  await cartPage.verifyCartPage();
  await cartPage.verifyProductInCart('Sauce Labs Bike Light');
  await cartPage.clickCheckout();
  await checkoutPage.verifyCheckoutPage();
});

test('Adding a product to cart and verify checking out with out any details', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const productDetails = new ProductDetailsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await products.openProduct('Sauce Labs Bike Light');
  await productDetails.addToCart();
  await productDetails.verifyRemoveButtonVisible();
  await products.goToCart(); // Navigate to Cart Page
  await cartPage.verifyCartPage();
  await cartPage.verifyProductInCart('Sauce Labs Bike Light');
  await cartPage.clickCheckout();
  await checkoutPage.verifyCheckoutPage();
  await checkoutPage.enterCheckoutInfo('', '', '');
  await checkoutPage.proceedToCheckout();
  await checkoutPage.validateCheckoutInfoError('Error: First Name is required');
});

test('Adding a product to cart and verify checking out with valid details', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const productDetails = new ProductDetailsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await products.openProduct('Sauce Labs Bike Light');
  await productDetails.addToCart();
  await productDetails.verifyRemoveButtonVisible();
  await products.goToCart(); // Navigate to Cart Page
  await cartPage.verifyCartPage();
  await cartPage.verifyProductInCart('Sauce Labs Bike Light');
  await cartPage.clickCheckout();
  await checkoutPage.verifyCheckoutPage();
  await checkoutPage.enterCheckoutInfo('Test', 'Test', 'asd123');
  await checkoutPage.proceedToCheckout();
  await checkoutPage.verifyOverviewPage();
  await checkoutPage.totalAmount();
  await checkoutPage.verifyPurchaseCompletePage();
});
