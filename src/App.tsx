import { Router } from "@routes/Router";
import { SessionServiceProvider } from "@services/SessionService";
import i18next from "@utils/i18next";
import { ReactElement, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";

const App = (): ReactElement => {
  const [client] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <I18nextProvider i18n={i18next}>
        <SessionServiceProvider>
          <Router />
        </SessionServiceProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
};

export default App;
