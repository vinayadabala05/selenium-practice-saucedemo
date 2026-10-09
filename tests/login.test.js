/**
 * Test Case: Valid Login
 * Website : https://www.saucedemo.com
 * Author  : Vinay Adabala
 *
 * Steps:
 * 1. Launch browser and open SauceDemo
 * 2. Enter valid username and password
 * 3. Click Login
 * 4. Verify user lands on Products page
 * 5. Close browser
 */

const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function validLoginTest() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments('--start-maximized'))
    .build();

  try {
    console.log('\n========== TEST: Valid Login ==========');

    // Step 1: Open application
    await driver.get('https://www.saucedemo.com');
    await driver.wait(until.elementLocated(By.id('user-name')), 10000);
    console.log('✓ Application launched');

    // Step 2: Enter credentials
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    console.log('✓ Credentials entered');

    // Step 3: Click Login
    await driver.findElement(By.id('login-button')).click();
    console.log('✓ Login button clicked');

    // Step 4: Verify Products page
    await driver.wait(until.elementLocated(By.className('title')), 10000);
    const pageTitle = await driver.findElement(By.className('title')).getText();

    if (pageTitle === 'Products') {
      console.log('✓ Assertion Passed: Products page is displayed');
      console.log('✅ TEST PASSED\n');
    } else {
      console.log(`❌ Assertion Failed: Expected "Products" but got "${pageTitle}"`);
      console.log('❌ TEST FAILED\n');
    }

  } catch (error) {
    console.error('❌ TEST FAILED with error:', error.message);
  } finally {
    await driver.quit();
    console.log('Browser closed.\n');
  }
}

validLoginTest();