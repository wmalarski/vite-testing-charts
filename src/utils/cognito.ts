import {
  AuthenticationDetails,
  CognitoRefreshToken,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  CognitoUserSession,
  ISignUpResult,
} from "amazon-cognito-identity-js";

const userPool: CognitoUserPool = new CognitoUserPool({
  UserPoolId: `${process.env.VITE_USERPOOL_ID}`,
  ClientId: `${process.env.VITE_CLIENT_ID}`,
});

const getCognitoUser = (username: string): CognitoUser => {
  return new CognitoUser({
    Username: username,
    Pool: userPool,
  });
};

export const getSession = (): Promise<CognitoUserSession> => {
  const currentUser = userPool.getCurrentUser();

  if (!currentUser) {
    throw new Error("Session not defined");
  }

  return new Promise((resolve, reject) => {
    currentUser.getSession((err: Error | null, session: CognitoUserSession) => {
      if (err) {
        reject(err);
      } else {
        resolve(session);
      }
    });
  });
};

export type SignUpUserWithEmailArgs = {
  username: string;
  email: string;
  password: string;
};

export const signUpUserWithEmail = ({
  username,
  email,
  password,
}: SignUpUserWithEmailArgs): Promise<ISignUpResult> => {
  return new Promise((resolve, reject) => {
    const attributeList = [
      new CognitoUserAttribute({
        Name: "email",
        Value: email,
      }),
    ];
    userPool.signUp(username, password, attributeList, [], (err, res) => {
      if (err || !res) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

export type VerifyCodeArgs = {
  username: string;
  code: string;
};

export const verifyCode = ({
  username,
  code,
}: VerifyCodeArgs): Promise<void> => {
  return new Promise((resolve, reject) => {
    const cognitoUser = getCognitoUser(username);

    cognitoUser.confirmRegistration(code, true, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export type SignInWithEmailArgs = {
  username: string;
  password: string;
};

export const signInWithEmail = ({
  password,
  username,
}: SignInWithEmailArgs): Promise<CognitoUserSession> => {
  return new Promise((resolve, reject) => {
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    const currentUser = getCognitoUser(username);

    currentUser.authenticateUser(authenticationDetails, {
      onSuccess: (res) => {
        resolve(res);
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  });
};

export type RefreshSessionArgs = {
  refreshToken: string;
};

export const refreshSession = ({
  refreshToken,
}: RefreshSessionArgs): Promise<CognitoUserSession> => {
  return new Promise((resolve, reject) => {
    const currentUser = userPool.getCurrentUser();

    if (!currentUser) {
      reject();
      return;
    }

    const cognitoRefreshToken = new CognitoRefreshToken({
      RefreshToken: refreshToken,
    });

    currentUser.refreshSession(cognitoRefreshToken, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export const signOut = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const currentUser = userPool.getCurrentUser();

    if (!currentUser) {
      reject();
      return;
    }

    currentUser.signOut(() => {
      resolve();
    });
  });
};
