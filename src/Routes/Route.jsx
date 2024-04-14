import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DetailsNews from "../Components/DetailsNews/DetailsNews";
import PrivateRoute from "../Private/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/news/:id",
                element: <PrivateRoute>
                    <DetailsNews />
                </PrivateRoute>
            }
        ]
    }
])

export default router