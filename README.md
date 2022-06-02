# React + Vite starter

This is placeholder. Project info.

## 🔗 Links

* Figma

* JIRA

* Docs

## 🎉 Project setup

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

### Basic scripts

* `yarn dev`

* `yarn build`

* `yarn preview`

### Linters

* `yarn lint`

* `yarn prettier`

* `yarn tsc`

* `yarn code-check`

### Tests

* `yarn coverage`

* `yarn test`

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

## 📚 Resources

### typescript

### react

### react-query

### react-router

### chakra-ui

### msw

### recharts

### translations

### vite.js

### storybook

### tests

### eslint

### prettier

### plop