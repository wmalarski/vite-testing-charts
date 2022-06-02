import { initialize, mswDecorator } from "msw-storybook-addon";
import { theme } from "../src/styles/theme";
import { handlers } from "../src/tests/mocks/handlers";

initialize();

export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  chakra: {
    theme,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers,
  },
};
