import { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Home/Home"));

export const Router = (): ReactElement => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
