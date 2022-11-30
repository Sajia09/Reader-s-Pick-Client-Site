import { createBrowserRouter } from "react-router-dom";
import React from 'react';
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import BooksCollection from "../Pages/BooksCollection/BooksCollection";
import CategoryLayout from "../Layout/CategoryLayout";
import CategoryBookCollection from "../Pages/BooksCollection/CategoryBookCollection";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminRoute from "./AdminRoute";
import AllBuyers from "../Pages/Dashboard/AllUsers/AllBuyers";
import Allseller from "../Pages/Dashboard/AllUsers/Allseller";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";


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
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path:'/category',
        element:<CategoryLayout></CategoryLayout>,
        children:[
            {
                path:'/category',
                element:<BooksCollection></BooksCollection>
            },
            {
                path:'/category/:name',
                element:<PrivateRoute><CategoryBookCollection></CategoryBookCollection></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/category/${params.name}`)
            },

        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'dashboard/allbuyers',
                element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path:'dashboard/allsellers',
                element:<AdminRoute><Allseller></Allseller></AdminRoute>
            },
            {
                path:'dashboard/myproducts',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashboard/myorders',
                element:<MyOrders></MyOrders>
            }
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])

export default router;