import { expect, Locator, Page } from '@playwright/test';

/**
 * LoginPage
 * ----------
 * Page Object Model (POM) class representing the Login page of SauceDemo.
 * This class abstracts UI locators and provides reusable actions such as
 * navigating to the login page, entering credentials, and validating login state.
 */
export class LoginPage {
  // Reference to Playwright's Page object, used to interact with the browser
  readonly page: Page;

  // Locators for UI elements on the Login page
  readonly username: Locator;    // Input field for username
  readonly password: Locator;    // Input field for password
  readonly loginBtn: Locator;    // Button to trigger login action
  readonly error: Locator;       // Error message container displayed on invalid login

  /**
   * Constructor initializes the locators when a new instance is created.
   * @param page - Playwright Page object passed from the test
   */
  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
    this.error = page.locator('.error-message-container');
  }

  /**
   * Navigates to the base URL (Login page).
   * The baseURL is picked from Playwright config, so no hard-coded URL is required.
   */
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  /**
   * Performs the login action using the provided username and password.
   * @param user - username to enter in the username field
   * @param pass - password to enter in the password field
   */
  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }

  /**
   * Validates that login was successful by checking if the Products page title is visible.
   * If the title is not found, the test will fail with an assertion error.
   */
  async expectLoggedIn() {
    await expect(this.page.locator('.title')).toHaveText('Products');
    console.log('Login successful, products page is visible');
  }

  /**
   * Validates that the displayed error message contains the expected text.
   * Useful for negative test scenarios (invalid username/password).
   * @param text - Expected error message snippet
   */
  async expectErrorMessage(text: string) {
    await expect(this.error).toContainText(text);
  }
}
