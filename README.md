# Learning Playwright (UI)

The purpose of this repo is to show a lot of UI specific tests with Playwright, trying to deal with certain challenging situations. See some of the examples below.

[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-1c8620.svg?logo=playwright)](https://playwright.dev/docs/intro)
[![Playwright - GitHub](https://img.shields.io/badge/GitHub-Playwright-1c8620.svg?logo=github)](https://github.com/microsoft/playwright/tree/main)
[![Playwright - Stack Overflow](https://img.shields.io/badge/stackoverflow-Playwright-e87922.svg?logo=stackoverflow)](https://stackoverflow.com/questions/tagged/playwright)

## 🟢 Prerequisites

Make sure you have [Node.js](https://nodejs.org/en). The LTS version should be fine. You will also need the `npm` package manager (which comes with Node.js) or `yarn`. A development environment or IDE with TypeScript/JavaScript support will help. [Visual Studio Code](https://code.visualstudio.com/) is a good choice.

## 📦 Execution

Clone the repository and then set everything up:

```shell
npm ci
```

The reason for `npm ci` is covered best in this [Stack Overflow answer](https://stackoverflow.com/a/53325242).

Make sure to install the browsers that Playwright will need.

```shell
npx playwright install
```

Run the tautology spec. Note that this does not need a browser.

```shell
npx playwright test tests/tautology.spec.ts
```

Run the Weight on Other Planets spec.

```shell
npx playwright test tests/playground/planets.spec.ts
```

You can add the `--headed` flag to see the test run in a browser. You can also just run the playground project:

```shell
npx playwright test --headed --project="Playground Tests"
```

Or just run the script:

```shell
npm run playground-ui
```

You can also run headless:

```shell
npm run playground
```

## 💼 Examples

```shell
npx playwright test tests/playground/dragdrop.spec.ts --headed
```

This will test the ability to drag an element on the page to another element and then check that a state change occurred.

```shell
npx playwright test tests/playground/warcraft.spec.ts --headed
```

This will test the ability to find a particular table row and then get the contents of a given column from that row.

```shell
npx playwright test tests/playground/warping.spec.ts --headed
```

This will show how to handle a dynamically changing table and also provide an interative approach to the test data.

```shell
npx playwright test tests/ludic/ludic.spec.ts --headed
```

This will show how to handle some interesting elements, such as a header that appears and disappears depending on the how the user scrolls, a "scroll to top" widget that has a built in timer and conditional display properties, and a dark/light mode toggle.

## 💻 Implementation

I'm using my own site material for this. One is a sample article called [A Ludic Historian Précis](https://testerstories.com/xyzzy/ludic/article/precis.html). The other is my [Playwright Playwround](https://testerstories.com/xyzzy/).

## ⚖ License

The code used in this project and in the linked tutorial are licensed under the [MIT license](https://github.com/jeffnyman/playwright-ui/blob/main/LICENSE).
