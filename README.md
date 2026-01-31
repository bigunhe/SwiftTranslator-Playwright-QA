# assignment_1_playwright_code

Comprehensive instructions to install dependencies, run tests, and view reports for this Playwright test project.

**Project summary:**
- This repository contains Playwright test code (TypeScript) for Assignment 1. Tests are in the `tests/` folder and Playwright generates HTML reports in `playwright-report/`.

**Quick links**
- Tests: [tests](tests)
- Latest report (generated after running tests): `playwright-report/`

**Prerequisites**
- macOS, Linux, or Windows Subsystem for Linux (WSL).
- Git (to clone the repo).
- Node.js (recommended: Node 18 LTS or newer). Use `nvm` or the official installer.
- npm (bundled with Node.js) or yarn (optional).

Recommended Node version manager (optional):

```bash
# Install nvm (if you don't have it)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
# Then install Node 18 LTS
nvm install 18
nvm use 18
```

**Repository and Git link**
- Add the Git repository URL in the file `GIT_REPO.txt` (created in the project root). Replace the placeholder URL in that file with your repository HTTPS link.

**Install — step by step**
1. Clone the repository (example using the repository URL provided in `GIT_REPO.txt`):

```bash
git clone https://github.com/bigunhe/SwiftTranslator-Playwright-QA.git
cd assignment_1_playwright_code
```
**Repository URL**
- GitHub repository: https://github.com/bigunhe/SwiftTranslator-Playwright-QA.git
- The file `GIT_REPO.txt` in the project root also contains this URL. Update it if you move the repo.


2. Install dependencies using npm (recommended) or yarn:

```bash
npm install
# or, if you prefer yarn:
yarn install
```

3. Install Playwright browser binaries (required to run tests):

```bash
# installs the browsers used by Playwright (chromium, firefox, webkit)
npx playwright install
```

Notes:
- On Linux you may need to run `npx playwright install-deps` to install missing OS dependencies.
- If you need only specific browser engines, run `npx playwright install chromium firefox webkit`.

**Run tests**
- Run the full test suite (headless):

```bash
npx playwright test
```

- Run tests in headed mode (visible browser):

```bash
npx playwright test --headed
```

- Run a single test file:

```bash
npx playwright test tests/assignment1.spec.ts
```

- Run a single test by title or grep pattern:

```bash
# Match a test title (example)
npx playwright test -g "Your test name here"
```

**Viewing HTML reports**
- After running tests, Playwright generates a report in `playwright-report/` by default. To open the report in your browser:

```bash
npx playwright show-report
# or explicitly:
npx playwright show-report playwright-report
```

**CI / Headless server notes**
- For CI systems (GitHub Actions, GitLab CI, etc.), add a step to install Node, checkout the repo, run `npm ci` and `npx playwright install --with-deps` (or `npx playwright install` on macOS). Then run `npx playwright test --reporter=html` to produce an HTML report artifact.

Example minimal CI steps (pseudo):

```yaml
# Checkout, install Node, then:
npm ci
npx playwright install --with-deps
npx playwright test --reporter=html
```

**Project dependencies (from package.json)**
- `@playwright/test` — Playwright Test runner (v1.58.0 or compatible).
- `@types/node` — Node.js types for TypeScript.

If you see additional devDependencies in `package.json`, `npm install` will install them automatically.

**Troubleshooting**
- Node version errors: make sure `node -v` is >= 18. If not, use `nvm` to switch versions.
- Test failing due to browser not found: run `npx playwright install` and re-run tests.
- Permission errors on macOS: ensure you have appropriate permissions for the project directory and for launching browsers (sometimes macOS prompts for permissions when browsers run).
- If tests hang or fail with unexpected errors: remove `node_modules` and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
npx playwright install
```

**Commands summary**

```bash
# Clone
git clone https://github.com/bigunhe/SwiftTranslator-Playwright-QA.git
cd assignment_1_playwright_code

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run tests (headless)
npx playwright test

# Run tests (headed)
npx playwright test --headed

# Open HTML report
npx playwright show-report
```

**Where tests live**
- See the test file: [tests/assignment1.spec.ts](tests/assignment1.spec.ts)

**Need help?**
- If you want, I can add example `npm` scripts to `package.json` (for example `test`, `test:headed`, `report`) and commit them. Want me to add these convenience scripts?

---
Generated on: January 31, 2026

