import { paths } from "@utils/paths";
import { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Home = lazy(() => import("./Home/Home"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
const SignIn = lazy(() => import("./SignIn/SignIn"));
const SignUp = lazy(() => import("./SignUp/SignUp"));
const VerifyCode = lazy(() => import("./VerifyCode/VerifyCode"));

export const Router = (): ReactElement => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path={paths.signIn}>
            <Route element={<SignIn />} index />
            <Route element={<SignUp />} path={paths.signUp} />
            <Route element={<VerifyCode />} path={paths.verify} />
            <Route element={<Dashboard />} path={paths.dashboard} />
          </Route>
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
