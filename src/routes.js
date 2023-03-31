import { createBrowserRouter } from "react-router-dom";
import { default as App } from './App'
import { default as Art } from './components/art/Art.jsx'

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/art",
      element: <Art />,
    },
  ]);