import { ChakraProvider } from "@chakra-ui/react";
import { VersionLabel } from "@components/VersionLabel/VersionLabel";
import { Router } from "@routes/Router";
import { SessionServiceProvider } from "@services/SessionService";
import { theme } from "@styles/theme";
import i18next from "@utils/i18next";
import { ReactElement, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";

const App = (): ReactElement => {
  const [client] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <I18nextProvider i18n={i18next}>
        <ChakraProvider theme={theme}>
          <SessionServiceProvider>
            <Router />
          </SessionServiceProvider>
          <VersionLabel />
        </ChakraProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
};

export default App;
