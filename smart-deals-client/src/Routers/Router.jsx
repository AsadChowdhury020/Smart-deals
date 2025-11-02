import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Components/Home/Home";
import AllProducts from "../Components/AllProducts/AllProducts";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import MyProducts from "../Components/MyProducts/MyProducts";
import MyBids from "../Components/MyBids/MyBids";

const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayout,
    children : [
      {
        index : true,
        Component : Home
      },
      {
        path : '/allProducts',
        Component : AllProducts
      },
      {
        path : '/register',
        Component : Register
      },
      {
        path : '/login',
        Component : Login
      },
      {
        path : '/myProducts',
        element : <MyProducts></MyProducts>
      },
      {
        path : '/myBids',
        element : <MyBids></MyBids>
      }
    ]
  },
]);

export default router