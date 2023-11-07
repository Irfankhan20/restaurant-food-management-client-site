import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import AllFoodItems from "../AllFoodItems/AllFoodItems";
import Blog from "../Blog/Blog";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddFoodItem from "../AddFoodItem/AddFoodItem";
import PrivateRoutes from "./PrivateRoutes";
import SingleFoodPage from "../SingleFoodPage/SingleFoodPage";
// import PrivateRoutes from "./PrivateRoutes";
// import Profile from "../Profile/Profile";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage/>,
        children: [
          {
              path: '/',
              element: <Home></Home>
          },
          {
              path: '/allfooditems',
              element: <AllFoodItems></AllFoodItems>,
            //   loader: () => fetch('http://localhost:5000/foodItemsCount')
          },
          {
              path: '/blog',
              element: <Blog></Blog>
          },
          {
              path: '/login',
              element: <Login></Login>
          },
          {
              path: '/register',
              element: <Register></Register>
          },
          {
              path: '/singlefoodpage',
              element: <SingleFoodPage></SingleFoodPage>
          },
          {
              path: '/addfooditem',
              element: <PrivateRoutes><AddFoodItem></AddFoodItem></PrivateRoutes>
          },
          
          
        //   {
        //       path: '/profile',
        //       element: <Profile></Profile>,
        //       children:[
                
        //             {
        //                 path: '/addafooditem',
        //                 element:<AddFoodItem></AddFoodItem>
        //             }
                
        //       ]
        //   }

        ]

    }
  ]);

  export default router;