# React + Vite starter

This is my starter. Project info.

## 🎉 Project setup

1. Install [node.js](https://nodejs.org/en/). Version should be greater then 16.0.0.

2. Install package manager `yarn`:

   > `npm install --global yarn`

3. Check versions of packages:

   1. Run `node --version` should be greater or equal to v16.10.0.

   2. `npm --version` should be greater or equal to 7.24.0.

4. In project root folder run:

   > `yarn`

   Command will install packages in `node_modules` folder.

5. Run project on your local machine in development mode:

   > `yarn dev`

6. Browser should open automatically. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

7. Make sure to install `prettier` and `eslint` plugins in your code editor. If your are using VsCode install recommended extensions for project (Extensions>Filter Extension>Recommended).

## 🔗 Useful links

* Figma

* Docs

* Redmine


## 📁 Project structure

* `components`

* `hooks`

* `modules`

* `routes`

* `services`

* `styles`

* `tests`

* `utils`  - Utility functions used across all components

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

## 📋 Environmental variables

Documentation is avaliable [here](https://vitejs.dev/guide/env-and-mode.html).  prevent accidentally leaking env variables to the client, only variables prefixed with VITE_ are exposed to your Vite-processed code

Example .env file

```txt
VITE_USERPOOL_ID=eu-central-1-sdsad
VITE_CLIENT_ID=qw45ert453yu
```

## 📖 Translations

i18next

locales

## 🎨 Static assets

[static assets](https://vitejs.dev/guide/assets.html)

## 👷 Branches

### Branches naming convention

// TODO

### Feature branches

* `development`

* `integration`

* `main`

## 👨‍💻 Merge requests

### Template

### Code review

2 approves

All team members

## 🔥 Code generators

### Create component

* To create component `Sidebar` in `routes/Home` folder with named export (preferred) run:

  > `yarn codegen component named routes/Home/Sidebar`

* To create component `Dashboard` in `routes` folder with default export run:

  > `yarn codegen component default routes/Dashboard`

### Create primitive

* To create primitive based on `Button` component from `chakra-ui` run:

  > `yarn codegen primitive Button`

### Create context

* To create simple context `UserContext` in `utils` folder run:

  > `yarn codegen context simple utils/UserContext`

* To create service context `ProfileService` in `services` folder with model `Profile`:

  > `yarn codegen context service services/ProfileService`

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

* `yarn dev` - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

* `yarn build` - Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
App is ready to be deployed!

* `yarn preview` - Runs production build

### Linters

* `yarn lint` - Code should follow lint rules specified in [.eslintrc.js](.eslintrc.js). All code should be checked against those rules. You can use yarn lint to see if your code meet lint criteria.

* `yarn prettier` - Check and update code style. Prettier can format your code on save. Check [this](https://www.robinwieruch.de/how-to-use-prettier-vscode/) guide to make sure you config is correct.

* `yarn tsc` - This command will check code against typescript compiler.

* `yarn code-check` - This command will check code against linter, prettier and typescript compiler. This command is run in pipeline. This script is required to pass without warnings.

### Tests

* `yarn coverage`

* `yarn test` - Launches the test runner in the interactive watch mode.

* `yarn test:ui`

### Stories

* `yarn storybook` - Storybook is place where you can find components in project.

* `yarn build-storybook`

### Codegen

* `yarn codegen`

## 🚀 Pipelines

List of pipelines:

### Install

* `Install` - installs all dependencies and saves them to cache.

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

## ✅ Do’s and ❌ Don’ts - Best Practices

**🚧WIP🚧To be discussed!!**

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
* [Accessing resources after sign in](https://docs.aws.amazon.com/cognito/latest/developerguide/accessing-resources.html)
* [Example repo](https://github.com/dbroadhurst/aws-cognito-react)

### AWS Amplify

* [docs](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html)

### vite.js

### storybook

### tests

### eslint

### prettier

### plop
