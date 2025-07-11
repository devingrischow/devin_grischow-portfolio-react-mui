import { createBrowserRouter } from "react-router-dom";



import { LandingPage } from "./landing_page/landing-page";


import { DetailsPageHolder } from './details_pages/details-page-holder';


import { PageNotFoundPage } from "./PageNotFound";




export const PorfolioRoutes = createBrowserRouter([
    
    //parameter given to landing page to allow for scrolling to 
    //landing page components based on the param
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


    //Catch for Invalid Page
    {
        path:'*',
        Component:PageNotFoundPage
    }

]);




  