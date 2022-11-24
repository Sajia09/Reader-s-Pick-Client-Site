import { createBrowserRouter } from "react-router-dom";
import React from 'react';
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
               element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default router;