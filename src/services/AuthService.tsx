import { getSession } from "@utils/cognito";
import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { useQuery } from "react-query";

type UserId = string;

export type User = {
  id: UserId;
  data?: string;
};

export type AuthServiceState =
  | {
      status: "signedIn";
      accessToken: string;
      refreshToken: string;
    }
  | {
      status: "signedOut";
    };

export type AuthServiceValue = {
  login: () => void;
  logout: () => void;
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

type Props = {
  children: ReactNode;
};

export const AuthServiceProvider = ({ children }: Props): ReactElement => {
  const { data, isLoading } = useQuery(
    ["session"],
    async (): Promise<AuthServiceState> => {
      try {
        const session = await getSession();
        return {
          status: "signedIn",
          accessToken: session.getAccessToken().getJwtToken(),
          refreshToken: session.getRefreshToken().getToken(),
        };
      } catch {
        return { status: "signedOut" };
      }
    },
    {
      onSuccess: (result) => {
        if (result.status !== "signedIn") {
          return;
        }
        window.localStorage.setItem("accessToken", `${result.accessToken}`);
        window.localStorage.setItem("refreshToken", `${result.refreshToken}`);
      },
    }
  );

  // const fetcher = useCallback(() => {

  // }, []);

  const value = useMemo<AuthServiceNullableValue>(() => {
    return {
      isInitialized: true,
      value: {
        login: () => {
          // const result = await Promise.resolve({ id: queryKey[1] });
          // return result;
        },
        logout: () => {
          // return ["user", id];
        },
      },
    };
  }, []);

  return <AuthService.Provider value={value}>{children}</AuthService.Provider>;
};
