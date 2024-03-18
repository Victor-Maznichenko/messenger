import { Route, Routes } from "react-router-dom";

import NotFoundPage from "./not-found";
import HomePage from "./home";
import AuthPage from "./auth";
import { ROUTE_CONSTANTS } from "@/shared/config";

export const Router = () => (
   <Routes>
      <Route path='*' element={<NotFoundPage />} />
      <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
      <Route path={ROUTE_CONSTANTS.LOGIN} element={<AuthPage />} />
  </Routes>
);