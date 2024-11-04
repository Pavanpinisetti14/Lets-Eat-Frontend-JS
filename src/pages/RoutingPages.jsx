import Kitchen from "../components/Kitchen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./LandingPage";
import Layout from "./Layout";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/kitchens",
                element: <Kitchen />,
            },
        ],
    },
]);

function RoutingPages() {
    return <RouterProvider router={AppRouter} />;
}

export default RoutingPages;
