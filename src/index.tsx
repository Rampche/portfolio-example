import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import AppProvider from "./contexts/AppContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);
