import { createBrowserRouter, Link, Outlet } from 'react-router-dom';
import Login from '../view/Login';
import Register from '../view/Register';
import ErrorPage from '../view/ErrorPage';
import UpdatePassword from '../view/UpdatePassword';
import App from '../view/Outlet'
import UpdateInfo from '../view/UpdateInfo'

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'update_info',
                element: <UpdateInfo />,
            },
            {
                path: 'bbb',
                element: <div>bbb</div>
            }
        ]
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