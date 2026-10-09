/**
 * Test Case: Add Product to Cart
 * Website : https://www.saucedemo.com
 * Author  : Vinay Adabala
 *
 * Steps:
 * 1. Login with valid credentials
 * 2. Add first product to cart
 * 3. Verify cart badge shows 1 item
 * 4. Open cart and verify product is present
 * 5. Close browser
 */

const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function addToCartTest() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments('--start-maximized'))
    .build();

  try {
    console.log('\n========== TEST: Add to Cart ==========');

    // Login
    await driver.get('https://www.saucedemo.com');
    await driver.wait(until.elementLocated(By.id('user-name')), 10000);
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();
    await driver.wait(until.elementLocated(By.className('title')), 10000);
    console.log('✓ Logged in successfully');

    // Add first product to cart
    await driver.findElement(By.id('add-to-cart-sauce-labs-backpack')).click();
    console.log('✓ Product added to cart');

    // Verify cart badge
    const cartBadge = await driver.findElement(By.className('shopping_cart_badge')).getText();
    if (cartBadge === '1') {
      console.log('✓ Assertion Passed: Cart badge shows 1 item');
    } else {
      console.log(`❌ Assertion Failed: Expected cart badge "1" but got "${cartBadge}"`);
    }

    // Open cart and verify product
    await driver.findElement(By.className('shopping_cart_link')).click();
    await driver.wait(until.elementLocated(By.className('inventory_item_name')), 10000);

    const productName = await driver.findElement(By.className('inventory_item_name')).getText();
    if (productName === 'Sauce Labs Backpack') {
      console.log('✓ Assertion Passed: Correct product is in the cart');
      console.log('✅ TEST PASSED\n');
    } else {
      console.log(`❌ Assertion Failed: Expected "Sauce Labs Backpack" but got "${productName}"`);
      console.log('❌ TEST FAILED\n');
    }

  } catch (error) {
    console.error('❌ TEST FAILED with error:', error.message);
  } finally {
    await driver.quit();
    console.log('Browser closed.\n');
  }
}

addToCartTest();