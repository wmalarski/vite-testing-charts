import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "@routes/Router";
import i18next from "@utils/i18next";
import { ReactElement, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";

const App = (): ReactElement => {
  const [client] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <I18nextProvider i18n={i18next}>
        <ChakraProvider>
          <Router />
        </ChakraProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
};

export default App;
