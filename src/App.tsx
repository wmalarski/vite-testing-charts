import { ChakraProvider } from "@chakra-ui/react";
import { Test1 } from "@components/Test1";
import i18next from "@utils/i18next";
import { ReactElement } from "react";
import { I18nextProvider } from "react-i18next";

const App = (): ReactElement => {
  return (
    <I18nextProvider i18n={i18next}>
      <ChakraProvider>
        <Test1 />
      </ChakraProvider>
    </I18nextProvider>
  );
};

export default App;
