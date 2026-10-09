/**
 * Simple Selenium WebDriver + JavaScript practice test
 * Website used: https://www.saucedemo.com
 *
 * What this test does:
 * 1. Opens the browser
 * 2. Goes to SauceDemo login page
 * 3. Enters username and password
 * 4. Clicks Login
 * 5. Checks if the Products page is displayed
 * 6. Closes the browser
 */

const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runLoginTest() {
  // Create Chrome browser instance
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments('--start-maximized'))
    .build();

  try {
    console.log('1. Opening SauceDemo website...');
    await driver.get('https://www.saucedemo.com');

    // Wait for the login form to be visible
    await driver.wait(until.elementLocated(By.id('user-name')), 10000);

    console.log('2. Entering username...');
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');

    console.log('3. Entering password...');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');

    console.log('4. Clicking Login button...');
    await driver.findElement(By.id('login-button')).click();

    // Wait for Products page title
    await driver.wait(until.elementLocated(By.className('title')), 10000);

    const pageTitle = await driver.findElement(By.className('title')).getText();
    console.log('5. Page title after login:', pageTitle);

    if (pageTitle === 'Products') {
      console.log('✅ TEST PASSED: Successfully logged in and reached Products page');
    } else {
      console.log('❌ TEST FAILED: Did not reach Products page');
    }

  } catch (error) {
    console.error('❌ Test failed with error:', error.message);
  } finally {
    // Always close the browser
    await driver.quit();
    console.log('6. Browser closed.');
  }
}

runLoginTest();