import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RedirectPage from "./pages/RedirectPage";
import DepartmentPage from "./pages/DepartmentPage";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/department/:department",
    element: <DepartmentPage />,
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
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
