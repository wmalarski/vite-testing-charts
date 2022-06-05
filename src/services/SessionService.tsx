import {
  getSession,
  signInWithEmail,
  SignInWithEmailArgs,
  signOut,
  signUpUserWithEmail,
  SignUpUserWithEmailArgs,
  verifyCode,
  VerifyCodeArgs,
} from "@utils/cognito";
import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { useQuery, useQueryClient } from "react-query";

export type AuthService = {
  fetcher: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
  signOut: () => Promise<void>;
};

export type AnonService = {
  signIn: (args: SignInWithEmailArgs) => Promise<void>;
  signUp: (args: SignUpUserWithEmailArgs) => Promise<void>;
  verifyCode: (args: VerifyCodeArgs) => Promise<void>;
};

type SessionServiceValue =
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
    async (): Promise<SessionServiceState> => {
      try {
        const session = await getSession();
        return {
          status: "auth",
          accessToken: session.getAccessToken().getJwtToken(),
          refreshToken: session.getRefreshToken().getToken(),
        };
      } catch (err) {
        return { status: "anon" };
      }
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
            signIn: async (args) => {
              const session = await signInWithEmail(args);
              client.setQueryData<SessionServiceState>(getSessionQueryKey(), {
                status: "auth",
                accessToken: session.getAccessToken().getJwtToken(),
                refreshToken: session.getRefreshToken().getToken(),
              });
            },
            signUp: async (args) => {
              await signUpUserWithEmail(args);
            },
            verifyCode: async (args) => {
              await verifyCode(args);
            },
          },
        };
      case "auth":
        return {
          status: "auth",
          value: {
            fetcher: (
              input: RequestInfo,
              init?: RequestInit
            ): Promise<Response> => {
              return fetch(input, {
                ...init,
                headers: {
                  ...init?.headers,
                  Authorization: `Bearer ${data.accessToken}`,
                },
              });
            },
            signOut: async () => {
              await signOut();
              client.setQueryData<SessionServiceState>(getSessionQueryKey(), {
                status: "anon",
              });
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
