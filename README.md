# Learning Playwright (UI)

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/en). The LTS version should be fine. You will also need the `npm` package manager (which comes with Node.js) or `yarn`. A development environment or IDE with TypeScript/JavaScript support will help. [Visual Studio Code](https://code.visualstudio.com/) is a good choice.

## Execution

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

## Implementation

Details to come.
