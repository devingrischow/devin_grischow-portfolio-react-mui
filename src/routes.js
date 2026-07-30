// import { createBrowserRouter } from "react-router-dom";

import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';


import { LandingPage } from "./landing_page/landing-page";


import { DetailsPageHolder } from './details_pages/details-page-holder';


import { PageNotFoundPage } from "./PageNotFound";

import { AboutMeAndMorePage } from './about_me_edu_more/about-me-more-page';


export const PorfolioRoutes = createHashRouter([
    
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

    {
        path:'/about',
        element: <AboutMeAndMorePage />
    },


    //Catch for Invalid Page
    {
        path:'*',
        Component:PageNotFoundPage
    }

]);




  