import { createBrowserRouter } from "react-router-dom";
import { default as App } from './App'
import { default as Gallery } from './components/gallery/Gallery.jsx'

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
  ]);