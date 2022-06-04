import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from "react";

type UserId = string;

export type User = {
  id: UserId;
  data?: string;
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
  const value = useMemo<AuthServiceNullableValue>(() => {
    return {
      isInitialized: true,
      value: {
        get: async ({ queryKey }) => {
          const result = await Promise.resolve({ id: queryKey[1] });
          return result;
        },
        key: (id) => {
          return ["user", id];
        },
      },
    };
  }, []);

  return <AuthService.Provider value={value}>{children}</AuthService.Provider>;
};
