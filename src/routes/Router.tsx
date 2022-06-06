import { paths } from "@utils/paths";
import { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Root = lazy(() => import("./Root/Root"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
const SignIn = lazy(() => import("./SignIn/SignIn"));

export const Router = (): ReactElement => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route element={<Root />} path={paths.root}>
            <Route element={<Dashboard />} index />
            <Route element={<SignIn />} path={paths.signIn} />
          </Route>
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
