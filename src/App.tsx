import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RedirectPage from "./pages/RedirectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/moodle",
    element: <RedirectPage to="http://182.74.215.198/moodle/" />,
  },
  {
    path: "/library",
    element: <RedirectPage to="https://aothopac.lsease.in/" />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
