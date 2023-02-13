import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Intro from "../pages/Intro";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Intro />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
