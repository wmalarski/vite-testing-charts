import i18next from "@/utils/i18next";
import { SessionService, SessionServiceValue } from "@services/SessionService";
import { ReactElement, ReactNode, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { mockSessionService } from "./mocks/services";

export type TestWrapperProps = {
  session?: SessionServiceValue;
  children?: ReactNode;
};

export type PropsWithTestWrapper<T = unknown> = T & {
  wrapperProps?: Omit<TestWrapperProps, "children">;
};

export const TestWrapper = ({
  children,
  session: sessionValue,
}: TestWrapperProps): ReactElement => {
  const [client] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <SessionService.Provider
        value={sessionValue ?? mockSessionService("anon")}
      >
        <BrowserRouter>
          <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
        </BrowserRouter>
      </SessionService.Provider>
    </QueryClientProvider>
  );
};
