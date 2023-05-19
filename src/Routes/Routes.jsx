import {createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToy from "../pages/AllToy/AllToy";
import MyToy from "../pages/MyToy/MyToy";
import AddaToy from "../pages/AddaToy/AddaToy";
import PrivateRoutes from "./PrivateRoutes";


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
           path: 'login',
           element:<Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'alltoy',
          element: <AllToy></AllToy>
        },
        {
          path: 'mytoy',
          element: <PrivateRoutes><MyToy></MyToy></PrivateRoutes>
        },
        {
          path: 'addtoy',
          element: <PrivateRoutes><AddaToy></AddaToy></PrivateRoutes>
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
  }
  
  ]);
  export default router;