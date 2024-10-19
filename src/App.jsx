import PricingPageThree from "./PricingPageThree";
import PricingPage from "./PricingPage";
import OneYearDesktopPage from "./OneYearDesktopPage";
import OneYearMobilePage from "./OneYearMobilePage";
import ThreeYearDesktopPage from "./ThreeYearDesktopPage";
import ThreeYearMobilePage from "./ThreeYearMobilePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PartnerWithUsPage from "./PartnerWithUsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PricingPage />,
  },
  {
    path: "/pricingPageThree",
    element: <PricingPageThree />,
  },
  {
    path: "/oneYearDesktopPage",
    element: <OneYearDesktopPage />,
  },
  {
    path: "/oneYearMobilePage",
    element: <OneYearMobilePage />,
  },
  {
    path: "/threeYearDesktopPage",
    element: <ThreeYearDesktopPage />,
  },
  {
    path: "/threeYearMobilePage",
    element: <ThreeYearMobilePage />,
  },
  {
    path: "/partnerWithUsPage",
    element: <PartnerWithUsPage />,
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
