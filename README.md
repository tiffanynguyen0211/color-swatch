# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn`
To install all dependencies 

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn test`

Runs all current tests in the project includes axe core accessibility test

### `yarn lint`
Script for fixing where possible & printing all linting errors

### Technical Decision:
- Project is developed with [React App](https://github.com/facebook/create-react-app) & TypeScript based on the timeframe & complexity of the requirements:
    - create-react-app handles webpack config + hot reload + code splitting + bundling for production build for a light weight web app
    - TypeScript for static type checking, IntelliSense, support for common library and better for code readibilty
- Project is using prettier-eslint for linting & code formatting to maintain code standards
- Project came with customised vscode config for easier local set up
- BEM is used for CSS naming system following[Harry Robert's BEM standards](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
- CSS standards are reinfoced using stylint

| Stylint Rules                                                                                               | Auto-formattted                                                                            |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [stylelint-config-idiomatic](https://github.com/ream88/stylelint-config-idiomatic-order#readme)     | Yes                                                                                        |
| empty line between class block                                                                      | Yes                                                                                        |  |

- Based on the complexity of the app, jest test is used for lightweight & fast tests runs focus on UI components rendering
- Based on the timeframe, only base tests are written at this point. Ideally, e2e test framework like Playwright or Cypress should be used to handle more complex logic 
