import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login to SauceDemo with correct creds', async ({ page }) => {
  const login = new LoginPage(page); // should now work
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await login.expectLoggedIn();
});

test('Login to SauceDemo with wrong creds', async ({ page }) => {
  const login = new LoginPage(page); // should now work
  await login.goto();
  await login.login('standard_user', 'secret_sauce_wrong');
  await login.expectErrorMessage("Epic sadface: Username and password do not match any user in this service"); // No error expected on successful login
});
