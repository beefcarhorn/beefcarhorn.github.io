import { createHashRouter } from "react-router-dom";
import { default as App } from './App'
import { default as Gallery } from './components/gallery/Gallery.jsx'

export const router = createHashRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
  ]);