import { Navigate, createBrowserRouter } from "react-router-dom";

import { Login, LinkedinPage } from "../modules/auth";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" replace />,
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "linkedin/callback",
        element: <LinkedinPage />,
      },
    ],
  },
]);

export default Router;
