import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';

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
  const prodcctDetails = new ProductDetailsPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await products.verifyProductsPage();
  await products.openProduct('Sauce Labs Bike Light');
  await products.verifyProductsPage('A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.');
});
