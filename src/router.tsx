import { createBrowserRouter } from "react-router-dom";

import BaseLayout from "./layouts/BaseLayout";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },
    ],
  },
]);

export default router;
