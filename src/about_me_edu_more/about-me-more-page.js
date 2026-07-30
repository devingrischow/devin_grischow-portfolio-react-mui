import { useState, useRef } from 'react';
import { useNavigate, useParams } from "react-router";


import Box from '@mui/material/Box';

import { PortfolioDrawer } from '../ui/portfolio-drawer';

import { ContactsAndDisplayElementHolder } from '../landing_page/landing-components';
import { AboutMeEduAndMoreContainer } from '../about_me_edu_more/about-me-edu-more-container';

import { DetailsPortfolioNavigationNavBar } from '../details_pages/details-page-holder';

export function AboutMeAndMorePage() {
    const navigate = useNavigate();

    const [isLandingDrawerOpen, setLandingDrawer] = useState(false);

    const openLandingDrawer = () => {
        setLandingDrawer(true);
    };
    const closeLandingDrawer = () => {
        setLandingDrawer(false);
    };


    const handleGoToMainPage = (toGoToRef) => {
        navigate(`/${toGoToRef}`);
    }


    return(

        <div>

            <DetailsPortfolioNavigationNavBar 
                openLandingDrawer={openLandingDrawer} 
            />
        
            <PortfolioDrawer 
                isDrawerOpen={isLandingDrawerOpen} 
                closeLandingDrawer={closeLandingDrawer} 
                
                handleGoToRef={handleGoToMainPage}
            />

            <Box
                sx={{
                marginTop:'5vmin'

                }}
            >
                <ContactsAndDisplayElementHolder displayElement={<AboutMeEduAndMoreContainer />} />
            </Box>

        </div>

    );


}