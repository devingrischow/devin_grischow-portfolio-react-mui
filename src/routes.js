import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./landing_page/landing-page";




export const PorfolioRoutes = createBrowserRouter([
    {
        path:'/',
        Component:LandingPage
    },
    
    {
        path:"/details/:detailType",
        Component:LandingPage
    }

]);




  