# Selenium Practice – SauceDemo Login Test

Beginner-level **Selenium WebDriver + JavaScript** practice project.

Created for Software Testing Engineer interview preparation (Virtusa / similar roles).

---

## What this project does

- Opens Chrome browser
- Goes to [https://www.saucedemo.com](https://www.saucedemo.com)
- Logs in with valid credentials
- Verifies that the **Products** page is displayed
- Closes the browser

---

## Prerequisites

1. **Node.js** installed (https://nodejs.org)
2. **Google Chrome** browser
3. ChromeDriver (Selenium 4 usually manages this automatically)

---

## How to run

```bash
# 1. Install dependencies
npm install

# 2. Run the test
npm test
```

---

## Project Structure

```
selenium-practice-saucedemo/
├── package.json
├── tests/
│   └── login.test.js
└── README.md
```

---

## Next steps to improve this project

1. Add more test cases (invalid login, add to cart, checkout)
2. Use Mocha or Jest as a test runner
3. Add assertions library (Chai)
4. Create Page Object Model structure
5. Run tests in headless mode

---

## Author

**Vinay Adabala**  
GitHub: [vinayadabala05](https://github.com/vinayadabala05)
