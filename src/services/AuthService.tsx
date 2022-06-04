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
  useCallback,
  useContext,
  useMemo,
} from "react";
import { useQuery, useQueryClient } from "react-query";

export type AuthServiceState =
  | {
      status: "loading";
    }
  | {
      status: "signedIn";
      accessToken: string;
      refreshToken: string;
    }
  | {
      status: "signedOut";
    };

export type AuthServiceValue = {
  fetcher: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
  signIn: (args: SignInWithEmailArgs) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (args: SignUpUserWithEmailArgs) => Promise<void>;
  state: AuthServiceState;
  verifyCode: (args: VerifyCodeArgs) => Promise<void>;
};

type AuthServiceNullableValue =
  | {
      isInitialized: false;
    }
  | {
      isInitialized: true;
      value: AuthServiceValue;
    };

export const AuthService = createContext<AuthServiceNullableValue>({
  isInitialized: false,
});

export const useAuthService = (): AuthServiceValue => {
  const context = useContext(AuthService);

  if (!context.isInitialized) {
    throw new Error("AuthService not defined");
  }

  return context.value;
};

export const getSessionQueryKey = (): string[] => {
  return ["session"];
};

type Props = {
  children: ReactNode;
  onSignOut: () => void;
};

export const AuthServiceProvider = ({
  children,
  onSignOut,
}: Props): ReactElement => {
  const client = useQueryClient();

  const { data } = useQuery(
    getSessionQueryKey(),
    async (): Promise<AuthServiceState> => {
      try {
        const session = await getSession();
        return {
          status: "signedIn",
          accessToken: session.getAccessToken().getJwtToken(),
          refreshToken: session.getRefreshToken().getToken(),
        };
      } catch (err) {
        // maybe here we can use refresh
        return { status: "signedOut" };
      }
    },
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      initialData: { status: "loading" },
      onSuccess: (result) => {
        if (result.status === "signedIn") {
          window.localStorage.setItem("accessToken", `${result.accessToken}`);
          window.localStorage.setItem("refreshToken", `${result.refreshToken}`);
        } else if (result.status === "signedOut") {
          onSignOut();
        }
      },
    }
  );

  const fetcher = useCallback(
    async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
      console.log({ data });
      const response = await fetch(input, init);
      // check for rejected request
      console.log({ status: response.status });
      return response;
    },
    [data]
  );

  const value = useMemo<AuthServiceNullableValue>(() => {
    return {
      isInitialized: true,
      value: {
        fetcher,
        signIn: async (args) => {
          const session = await signInWithEmail(args);
          client.setQueryData<AuthServiceState>(getSessionQueryKey(), {
            status: "signedIn",
            accessToken: session.getAccessToken().getJwtToken(),
            refreshToken: session.getRefreshToken().getToken(),
          });
        },
        signOut: async () => {
          await signOut();
          client.setQueryData<AuthServiceState>(getSessionQueryKey(), {
            status: "signedOut",
          });
        },
        signUp: async (args) => {
          await signUpUserWithEmail(args);
        },
        state: data ?? { status: "loading" },
        verifyCode: async (args) => {
          await verifyCode(args);
        },
      },
    };
  }, [client, data, fetcher]);

  return <AuthService.Provider value={value}>{children}</AuthService.Provider>;
};
