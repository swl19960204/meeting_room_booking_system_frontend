import { createBrowserRouter, Link, Outlet } from 'react-router-dom';
import Login from '../view/Login';
import Register from '../view/Register';
import ErrorPage from '../view/ErrorPage';
import UpdatePassword from '../view/UpdatePassword';

const routes = [
    {
        path: "/",
        element: <div>index</div>,
        errorElement: <ErrorPage />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "update_password",
        element: <UpdatePassword />,
    }
];
export const router = createBrowserRouter(routes);