import { useSessionStatus } from "@services/SessionService";
import { paths } from "@utils/paths";
import { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Home = lazy(() => import("./Home/Home"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
const SignIn = lazy(() => import("./SignIn/SignIn"));

export const Router = (): ReactElement => {
  const status = useSessionStatus();

  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path={paths.root}>
            {status === "anon" && <Route element={<SignIn />} index />}
            {status === "auth" && <Route element={<Dashboard />} index />}
          </Route>
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
