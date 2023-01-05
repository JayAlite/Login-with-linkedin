import { RouterProvider } from "react-router-dom";
import "./App.css";

import Router from "./routes";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  );
}

export default App;
