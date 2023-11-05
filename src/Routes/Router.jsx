import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import AllFoodItems from "../AllFoodItems/AllFoodItems";
import Blog from "../Blog/Blog";
import Login from "../Login/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
          {
              path: '/',
              element: <Home></Home>
          },
          {
              path: '/allfooditems',
              element: <AllFoodItems></AllFoodItems>
          },
          {
              path: '/blog',
              element: <Blog></Blog>
          },
          {
              path: '/login',
              element: <Login></Login>
          }
        ]
    },
  ]);

  export default router;