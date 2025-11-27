import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login to SauceDemo', async ({ page }) => {
  const login = new LoginPage(page); // should now work
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await login.expectLoggedIn();
});
