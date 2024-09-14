import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import Home from "../pages/Home/Home";
import Supports from "../pages/Supports/Supports";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const routes = createBrowserRouter(
    [
        {
            path:'/',
            element:<MainLayout/>,
            children:[

                {
                    index:true,
                    element:<Home/>
                },
                {
                    path:'/supports',
                    element:<Supports/>
                },
                {
                    path:'/about',
                    element:<About/>
                },
                {
                    path:'/contact',
                    element:<Contact/>
                },
            ]
        }
    ]
)

export default routes;