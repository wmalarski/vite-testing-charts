# React + Vite starter

This is placeholder. Project info.

## 🔗 Links

* Figma

* JIRA

* Docs

## 🎉 Project setup

1. Install node

2. Install yarn

### How to run project locally?

### Install recommended vscode plugins

## 📁 Project structure

* `components`

* `hooks`

* `modules`

* `routes`

* `services`

* `styles`

* `tests`

* `utils`

## ⛏️ Components structure

Components should have structure:

>>>
* ChildComponent
  * ChildComponent.stories.tsx
  * ChildComponent.test.tsx
  * ChildComponent.tsx
* Component.stories.tsx
* Component.test.tsx
* Component.tsx
* Component.utils.tsx
>>>

## 📖 Translations

i18next

locales

## 🎨 Static assets

[static assets](https://vitejs.dev/guide/assets.html)

## 👷 Branches

## 👨‍💻 Merge requests

### Template

### Code review

All team members

## 🔥 Code generators

### Create component

* To create component `Sidebar` in `routes/Home` folder with named export (preferred) run:

  `yarn codegen component named routes/Home/Sidebar`

* To create component `Dashboard` in `routes` folder with default export run:

  `yarn codegen component default routes/Dashboard`

### Create primitive

* To create primitive based on `Button` component from `chakra-ui` run:

  `yarn codegen primitive Button`

### Create context

* To create simple context `UserContext` in `utils` folder run:

  `yarn codegen context simple utils/UserContext`

* To create service context `ProfileService` in `services` folder with model `Profile`:

  `yarn codegen context service services/ProfileService`

  **How to use services?**

  ```ts
  const profileService = useProfileService();
  const { data } = useQuery(
    profileService.key(id),
    profileService.get,
  );
  ```

## 🧰 Scripts

In the project directory, you can run:

### Basic scripts

* `yarn dev` - Runs the app in the development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

* `yarn build` - Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
App is ready to be deployed!

* `yarn preview` - Runs production build

### Linters

* `yarn lint`

* `yarn prettier`

* `yarn tsc`

* `yarn code-check`

### Tests

* `yarn coverage`

* `yarn test` - Launches the test runner in the interactive watch mode.

* `yarn test:ui`

### Stories

* `yarn storybook`

* `yarn build-storybook`

### Codegen

* `yarn codegen`

## 🚀 Pipelines

### Install

* `Install`:

### Lint and Test

* `Lint`:

* `Test`:

* `Coverage`:

### Build

* `Build`:

### Deploy

* `Development`:

* `Integration`:

* `Production`:

### Storybook

* `Storybook`:

### How to deploy to integration or production?

## 📚 Resources

### typescript

### react

### react-query

### react-router

### react-hook-form

### yup

### chakra-ui

### msw

### msw-data

### recharts

### translations

### AWS cognito

* [amazon cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html)
* [amazon-cognito-identity-js](https://www.npmjs.com/package/amazon-cognito-identity-js)

### vite.js

### storybook

### tests

### eslint

### prettier

### plop
