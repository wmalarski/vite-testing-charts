import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { useQuery, useQueryClient } from "react-query";

export type AuthService = {
  signOut: () => Promise<void>;
};

export type AnonService = {
  signIn: () => Promise<void>;
};

export type SessionServiceValue =
  | {
      status: "loading";
    }
  | {
      status: "auth";
      value: AuthService;
    }
  | {
      status: "anon";
      value: AnonService;
    };

type SessionServiceState =
  | {
      status: "auth";
      accessToken: string;
      refreshToken: string;
    }
  | {
      status: "anon";
    };

export const SessionService = createContext<SessionServiceValue>({
  status: "loading",
});

export const useAuthService = (): AuthService => {
  const context = useContext(SessionService);

  if (context.status !== "auth") {
    throw new Error("AuthService not defined");
  }

  return context.value;
};

export const useAnonService = (): AnonService => {
  const context = useContext(SessionService);

  if (context.status !== "anon") {
    throw new Error("AnonService not defined");
  }

  return context.value;
};

export const useSessionStatus = (): SessionServiceValue["status"] => {
  const context = useContext(SessionService);

  return context.status;
};

export const getSessionQueryKey = (): string[] => {
  return ["session"];
};

type Props = {
  children: ReactNode;
};

export const SessionServiceProvider = ({ children }: Props): ReactElement => {
  const client = useQueryClient();

  const { data } = useQuery(
    getSessionQueryKey(),
    (): Promise<SessionServiceState> => {
      const accessToken = localStorage.getItem("accessToken");
      return Promise.resolve(
        accessToken
          ? { status: "auth", accessToken, refreshToken: "" }
          : { status: "anon" }
      );
    },
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  const value = useMemo<SessionServiceValue>(() => {
    switch (data?.status) {
      case "anon":
        return {
          status: "anon",
          value: {
            signIn: () => {
              localStorage.setItem("accessToken", "accessToken");
              client.setQueryData<SessionServiceState>(getSessionQueryKey(), {
                status: "auth",
                accessToken: "accessToken",
                refreshToken: "",
              });
              return Promise.resolve();
            },
          },
        };
      case "auth":
        return {
          status: "auth",
          value: {
            signOut: () => {
              localStorage.removeItem("accessToken");
              client.setQueryData<SessionServiceState>(getSessionQueryKey(), {
                status: "anon",
              });
              return Promise.resolve();
            },
          },
        };
      default:
        return { status: "loading" };
    }
  }, [client, data]);

  return (
    <SessionService.Provider value={value}>{children}</SessionService.Provider>
  );
};
