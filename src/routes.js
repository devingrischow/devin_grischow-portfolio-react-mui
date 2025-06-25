import { createBrowserRouter } from "react-router-dom";



import { LandingPage } from "./landing_page/landing-page";


import { DetailsPageHolder } from './details_pages/details-page-holder';


import { PageNotFoundPage } from "./PageNotFound";




export const PorfolioRoutes = createBrowserRouter([
    {
        path:'/:goToOnPage',
        element:<LandingPage />,
    },

    {
        path:'/',
        element:<LandingPage />,
    },
    
    {
        path:"/details/:detailType",
        Component:DetailsPageHolder
    }, 

    {
        path:'*',
        Component:PageNotFoundPage
    }

]);




  