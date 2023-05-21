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
import UpdateToy from "../pages/UpdateToy/UpdateToy";



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
          element: <AllToy></AllToy>,
          loader: () => fetch('https://cars-toytopia-server.vercel.app/toy')
        },
        {
          path: 'mytoy',
          element: <PrivateRoutes><MyToy></MyToy></PrivateRoutes>
        },
        {
          path: 'addtoy',
          element: <PrivateRoutes><AddaToy></AddaToy></PrivateRoutes>
        },
        {
          path: 'singleToy/:id',
          element: <UpdateToy></UpdateToy>,
          loader:({params})=> fetch(`https://cars-toytopia-server.vercel.app/singleToy/${params.id}`)
        },
        // {
        //   path: 'details/:id',
        //   element: <Details></Details>
        // }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
  }
  
  ]);
  export default router;