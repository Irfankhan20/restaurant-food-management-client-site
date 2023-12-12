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
import CheckOut from "../CheckOut/CheckOut";
import MyOrderFoodItems from "../MyOrderedFoodItems/MyOrderFoodItems";
import MyAddedFoodItems from "../MyAddedFoodItems/MyAddedFoodItems";
import AddFoodUpdate from "../AddFoodUpdate/AddFoodUpdate";
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
            //   loader: () => fetch('https://assignment-eleven-server-side-rho.vercel.app/foodItemsCount')
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
              path: '/singlefoodpage/:id',
              element: <SingleFoodPage></SingleFoodPage>,
              loader: ({params})=> fetch(`https://assignment-eleven-server-side-rho.vercel.app/allfoods/${params.id}`)
          },
          {
              path: '/checkout/:id',
              element: <CheckOut></CheckOut>,
              loader: ({params})=> fetch(`https://assignment-eleven-server-side-rho.vercel.app/allfoods/${params.id}`)
          },
          {
              path: '/addfooditem',
              element: <PrivateRoutes><AddFoodItem></AddFoodItem></PrivateRoutes>
          },
          {
              path: '/orderedfooditem',
              element: <PrivateRoutes><MyOrderFoodItems></MyOrderFoodItems></PrivateRoutes>
          },
          {
              path: '/myaddfooditem',
              element: <PrivateRoutes><MyAddedFoodItems></MyAddedFoodItems></PrivateRoutes>
          },
          {
              path: '/addfoodupdate/:id',
              element: <PrivateRoutes><AddFoodUpdate></AddFoodUpdate></PrivateRoutes>,
              loader: ({params}) => fetch(`https://assignment-eleven-server-side-rho.vercel.app/allfoods/${params.id}`)
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