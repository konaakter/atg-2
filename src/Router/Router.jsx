import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Registation from "../Pages/Registation/Registation";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Upload from "../Pages/Profile/Upload";
import Yorpost from "../Pages/Profile/Yorpost";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/singup",
          element: <Registation></Registation>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ],
    },
    {
      path: "profile",
      element: <Profile></Profile>,
      children: [
        {
          path: "profile/upload",
          element: <Upload></Upload>,
        },
        {
          path: "profile/post",
          element: <Yorpost></Yorpost>,
        },
       
      ],

    },
  ]);

  export default router;