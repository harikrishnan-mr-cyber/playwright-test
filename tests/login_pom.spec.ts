import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login to SauceDemo with correct creds', async ({ page }) => {
  const login = new LoginPage(page); // should now work
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await login.expectLoggedIn();
  await login.expectErrorMessage(""); // No error expected on successful login
});

test('Login to SauceDemo with wrong creds', async ({ page }) => {
  const login = new LoginPage(page); // should now work
  await login.goto();
  await login.login('standard_use', 'secret_sauce');
  await login.expectErrorMessage("Wrong credentials"); // No error expected on successful login
});
