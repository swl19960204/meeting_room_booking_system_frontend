import { createBrowserRouter, Link, Outlet } from 'react-router-dom';
import Login from '../view/Login';
import Register from '../view/Register';
import ErrorPage from '../view/ErrorPage';
import UpdatePassword from '../view/UpdatePassword';
import App from '../view/Outlet'
import UpdateInfo from '../view/UpdateInfo'
import Menu from '../view/Menu'
import MeetingRoomList from '../view/MeetingRoomList'
import BookingHistory from '../view/BookingHistory'

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
                path: '/',
                element: <Menu />,
                children: [
                    {
                        path: '/',
                        element: <MeetingRoomList />
                    },
                    {
                        path: 'meeting_room_list',
                        element: <MeetingRoomList />
                    },
                    {
                        path: 'booking_history',
                        element: <BookingHistory />
                    }
                ]
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