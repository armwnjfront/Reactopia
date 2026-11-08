import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import App from "../App";
import Productslayout from "../layout/Products/Productslayout";
import ProductsList from "../Pages/Products/ProductsList";
import Producttwo from "../Pages/Products/Producttwo";
import PostLayout from "../layout/posts/PostLayout";
import PostsList from "../Pages/Posts/PostsList";
import LoginPage from "../Pages/LoginPage"


const Router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/products",
        Component: Productslayout,
        children: [
          {
            index: true,
            Component: ProductsList,
          },
          {
            path: ":id",
            Component: Producttwo,
          },
        ],
      },
      {
        path: "Posts",
        Component: PostLayout,
        children: [
          {
            index: true,
            Component: PostsList,
          },
        ],
      },
      {
        path: "/LoginPage",
        Component: LoginPage,
      }
    ],
  },
]);

export default Router;
