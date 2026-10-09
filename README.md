# Selenium WebDriver Practice Project

**Author:** Vinay Adabala  
**Purpose:** Hands-on practice for Software Testing Engineer interviews (Virtusa and similar roles)

---

## Project Overview

This is a clean beginner-level **Selenium WebDriver + JavaScript** automation project.

It demonstrates:
- Browser automation
- Element location strategies (ID, Class Name)
- Explicit waits
- Assertions
- Multiple test cases
- Clean and readable code structure

**Application under test:** [SauceDemo](https://www.saucedemo.com)

---

## Test Cases Included

| Test Case          | Description                              | File                  |
|--------------------|------------------------------------------|-----------------------|
| Valid Login        | Login with valid credentials and verify Products page | `tests/login.test.js` |
| Add to Cart        | Login → Add product → Verify cart badge and product name | `tests/addToCart.test.js` |

---

## Prerequisites

- Node.js (v16 or higher)
- Google Chrome browser

---

## How to Run

```bash
# Clone the repository
git clone https://github.com/vinayadabala05/selenium-practice-saucedemo.git
cd selenium-practice-saucedemo

# Install dependencies
npm install

# Run individual tests
npm test              # Runs Login test
npm run test:cart     # Runs Add to Cart test

# Run all tests
npm run test:all
```

---

## Project Structure

```
selenium-practice-saucedemo/
├── package.json
├── README.md
└── tests/
    ├── login.test.js
    └── addToCart.test.js
```

---

## Key Learning Points Demonstrated

- Using `Builder` to create WebDriver instance
- Locating elements with `By.id` and `By.className`
- Explicit waits with `driver.wait` and `until`
- Reading text and performing assertions
- Proper use of `try-catch-finally` for browser cleanup
- Clear console logging for test steps and results

---

## Next Improvements (Future Learning)

1. Convert to Mocha + Chai test framework
2. Implement Page Object Model (POM)
3. Add data-driven testing
4. Run tests in headless mode
5. Generate HTML test reports

---

## Author

**Vinay Adabala**  
- GitHub: [vinayadabala05](https://github.com/vinayadabala05)  
- LinkedIn: [vinay-adabala05](https://www.linkedin.com/in/vinay-adabala05/)
