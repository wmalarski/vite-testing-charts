import { SessionServiceValue } from "@services/SessionService";

export const mockSessionService = (
  status: SessionServiceValue["status"]
): SessionServiceValue => {
  switch (status) {
    case "anon":
      return {
        status: "anon",
        value: { signIn: () => Promise.resolve() },
      };
    case "auth":
      return {
        status: "auth",
        value: { signOut: () => Promise.resolve() },
      };
    case "loading":
      return { status: "loading" };
  }
};
