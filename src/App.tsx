import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post/:postId", element: <Post /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
