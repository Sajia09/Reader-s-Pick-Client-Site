import { createBrowserRouter } from "react-router-dom";
import React from 'react';
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import BooksCollection from "../Pages/BooksCollection/BooksCollection";
import CategoryLayout from "../Layout/CategoryLayout";
import CategoryBookCollection from "../Pages/BooksCollection/CategoryBookCollection";

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
                element:<CategoryBookCollection></CategoryBookCollection>,
                loader:({params})=> fetch(`http://localhost:5000/category/${params.name}`)
            },

        ]
    }
])

export default router;