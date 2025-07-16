import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


import { useNavigate } from "react-router";
import { useState, useRef } from 'react';




import { useParams } from "react-router";



import { DetailsPageData } from '../data/details-pages-data';




import { DetailsComponentTypes } from "./components/component-types";

import { DetailsHeader, DetailsBodyText, DetailsBodyTitle, BigImageSection, WovenImagesDispaly, DetailsImagesCarousel, DetailsGitHubRepoLink  } from './components/details-components';



import { DetailsPageTheme } from './components/details-components';


import { PortfolioDrawer } from '../ui/portfolio-drawer';


import { GlobalFooter } from '../ui/globalFooter';





export function DetailsPageHolder() {
  const marginBodyText = '5vw'
  
  
  const navigate = useNavigate();
  
  //Based on the details Type, fetch the object to load in, and load in the components from it 
  //The details type are built from the inner array of map components
  
  //Loop through the details type given 
  
  
  //Get access to the routes parameters
  const detailsPageDataParams = useParams();
  
  console.log("Details Page parameters: ", detailsPageDataParams)
  
  //reference the details type 
  const detailType = detailsPageDataParams.detailType
  console.log("Details Type: ", detailType)
  
  const detailsItem = DetailsPageData[detailType]
  
  const detailsBody = detailsItem.detailsBody
  
  const detailsBodyCount = detailsBody.length;
  
  
  console.log("Details Body: ", detailsBodyCount)
  
  
  const detailsIcon = detailsItem.pageId;
  
  
  
  
  
  const detailItems = detailsBody.map( detailItem => 
    
    {
    
      const detailType = detailItem.type
      
      
      console.log("Body Element Type: ", detailType)
      
      switch(detailType){
        
        //** Text Components
        
        
        case DetailsComponentTypes.Header: 
        const headerText = detailItem.text;
        
        console.log("details icon to use: ", detailsIcon);
        
        return (<DetailsHeader key={headerText} text={headerText} detailsIcon={detailsIcon} />);
        
        
        case DetailsComponentTypes.BodyText:
        const bodyText = detailItem.text;
        
        
        return (<DetailsBodyText key={detailItem} text={bodyText}  />);
        
        
        
        case DetailsComponentTypes.BodyTitle:
        const bodyTitleText = detailItem.text;
        
        return(<DetailsBodyTitle key={detailItem} text={bodyTitleText} />);
        
        
        
        
        
        
        //**Image Components
        case DetailsComponentTypes.BigImage:
        
        const image = detailItem.image;
        
        return ( <BigImageSection key={detailItem} imageSection={image} /> );


        //**Image List Components */


        case DetailsComponentTypes.WovenImagesDispaly:
          const wovenImagesList = detailItem.imagesList;
          const potentialModWith = detailItem.modMaxWidth;

          const mobileDisplayMode = detailItem.displayMobileAs;

          console.log("Images to make Woven: ", wovenImagesList);

          return (  <WovenImagesDispaly modWidthWoven={potentialModWith} mobileDisplayMode={mobileDisplayMode} imageObjectList={wovenImagesList}  />);


        case DetailsComponentTypes.CarouselImagesDisplay:
            const carouselImages = detailItem.imagesList;

            //proper use for optional mobile use 
            

            const currCarouselID = detailItem.carouselID;

            console.log("Carousel Images List: ", carouselImages, 'carouselID: ', currCarouselID)

            return ( <DetailsImagesCarousel carouselImages={carouselImages} carouselID={currCarouselID} /> );


        case DetailsComponentTypes.GitHubLink:
          const githubRepoLink = detailItem.repoLink;

          const repoAuthor = detailItem.repoUser;
          const repoTitle = detailItem.repoTitle;

          console.log("Github Repo Link to Showcase Preview: ", githubRepoLink, "Author: ", repoAuthor, "title:", repoTitle);

          return(<DetailsGitHubRepoLink
            repoTitle={repoTitle}
            repoAuthor={repoAuthor}
            
            repoLink={githubRepoLink}

          /> );

        default:
          break;
        
        
      }
    }
    
    
    
  )
  
  
  
  //Controlls for given tab bar 
  const [isLandingDrawerOpen, setLandingDrawer] = useState(false);
  
  
  const refs = useRef({});
  
  
  
  const openLandingDrawer = () => {
    setLandingDrawer(true);
  };
  
  const closeLandingDrawer = () => {
    setLandingDrawer(false);
  };
  
  
  //Handles the user going from this screen, to the home screen, then where to scroll FROM 
  const handleGoToMainPage = (toGoToRef) => {
    navigate(`/${toGoToRef}`);
    
    
  }
  
  
  
  return(
    //Provide Theme to the details page 
    <ThemeProvider theme={DetailsPageTheme}>
    <DetailsPortfolioNavigationNavBar 
    openLandingDrawer={openLandingDrawer} 
    />
    <PortfolioDrawer 
    isDrawerOpen={isLandingDrawerOpen} 
    closeLandingDrawer={closeLandingDrawer} 
    
    handleGoToRef={handleGoToMainPage}
    />
    
    
    <Stack
    sx={{
      margin:marginBodyText,
      
    }}
    >
    
    
    
    
    { detailItems }
    
    
    <Box
      marginTop={'30vw'}
    >
      <GlobalFooter />
    </Box>
    
    
    </Stack>
    
    
    </ThemeProvider>
  );
  
}









function  DetailsPortfolioNavigationNavBar({ 
  openLandingDrawer
}) {
  
  //Navigator to take back to home screen
  let navigate = useNavigate();
  

  const goToHome = () => {
    navigate("/")

    window.scrollTo({
      top: 0,
      behavior:'instant'
    })
  }
  
  
  
  
  return (
    
    <AppBar position="static"
    sx={{
      bgcolor:'black',
      
      borderBottom:1,
      
      position:'sticky',
      top:0,
      
      zIndex:10
      
    }}
    >
    <Toolbar
    sx={{
      justifyContent:'space-between'
    }}
    >
    <IconButton
    size="large"
    edge="start"
    color="inherit"
    aria-label="menu"
    sx={{ mr: 2 }}
    
    onClick={openLandingDrawer}
    >
    <MenuIcon />
    </IconButton>
    
    
    
    
    
    
    
    <Button color="inherit"
    onClick={goToHome}
    >
    Back
    </Button>
    
    
    </Toolbar>
    </AppBar>
    
  );
}