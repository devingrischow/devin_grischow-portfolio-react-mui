import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



import { styled } from '@mui/material/styles';

import { PortfolioColors } from '../ui/colors'




//Data Imports for elements 
import { ContactInfo } from '../data/contact-info';


import { ShowcaseContainer } from '../showcase_components/showcase-container';
import { SkillsContainer } from '../skills_components/skills-container';
import { MoreOnGithubContainer } from '../github-pages-links/more-on-github-container';

import { PortfolioDrawer } from '../ui/portfolio-drawer'


import PortfolioPicture from '../images/Portfolio Photo.png';











import { NameAndImageHeader, ContactsAndWorkExperienceStackVertical } from './landing-components'







import React, { useState, useRef } from 'react';
import { workExperience } from '../data/work-experience-objects';








export const LandingPage = () => {
    //Declared Function to change the page state
    const [isLandingPageAbout, setLandingPageAbout] = useState(false);

    //State controll for drawer open (on landing page)

    const [isLandingDrawerOpen, setLandingDrawer] = useState(false);

  

    const openLandingDrawer = () => {
        setLandingDrawer(true);
    };

    const closeLandingDrawer = () => {
        setLandingDrawer(false);
    };


    const handleChangePageToAboutMe = () => {
        console.log("Changing Is Landing Value to True ". isLandingPageAbout)

        setLandingPageAbout(true);

    };

    const handleChangePageToLanding = () => {
        setLandingPageAbout(false);
    };


    //Location Refs to use for navigation points
    const workExperienceRef = useRef(null);
    const showcaseRef = useRef(null);
    const skillsRef = useRef(null);
    const gitHubRef = useRef(null);

    //Landing Page from box
    return (

        <div>
            <LandingPortfolioNavigationNavBar openDrawerToggle={openLandingDrawer} />
            <PortfolioDrawer 
              isDrawerOpen={isLandingDrawerOpen} 
              closeLandingDrawer={closeLandingDrawer} 

              workExperienceRef={workExperienceRef}
              showcaseRef={showcaseRef} 
              skillsRef={skillsRef}
              gitHubRef={gitHubRef}
            />


            <NameAndImageHeader />





            <LandingPageAboutMeHandler
                isLandingPageAbout={isLandingPageAbout}

                handledClickEvent={handleChangePageToAboutMe}

                workExperienceRef={workExperienceRef}

                showcaseRef={showcaseRef}

                skillsRef={skillsRef}

                gitHubRef={gitHubRef}
            />


        </div>
        

            
    );

}




function LandingPortfolioNavigationNavBar({openDrawerToggle}) {
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
          onClick={openDrawerToggle}
        >
          <MenuIcon />
          
        </IconButton>

            





        <Button color="inherit">Back</Button>


      </Toolbar>
    </AppBar>

  );
}





function LandingPageAboutMeHandler({
  isLandingPageAbout, 
  handledClickEvent,

  workExperienceRef,
  showcaseRef,
  skillsRef,
  gitHubRef
}){

  if(isLandingPageAbout){
    //Handle About me & Education Landing Page 
    return (
      <Box>
        <h2>heg</h2>
      </Box>
    );
  }else{
    //Handle Normal Pages

    return(
      <div>



        <ContactsAndWorkExperienceStackVertical workExperienceRef={workExperienceRef} />



        <ShowcaseContainer showcaseRef={showcaseRef} />



        < SkillsContainer skillsRef={skillsRef} />


        < MoreOnGithubContainer gitHubRef={gitHubRef} />



        <ContactAndAboutFooter handleClickEvent={handledClickEvent}  />


      </div>

      
    );

  }

}








function ContactAndAboutFooter({handleClickEvent}){

  //Use multiple on hover trackers to track each hovered over item, 
  //when Hovered over, Bolden 
  const [isOverContactMe, setIsOverContactMe] = useState(false);
  const [isOverTopJump, setIsOverTopJump] = useState(false);
  const [isOverAbout, setIsOverAbout] = useState(false);


  

  const optionsFontSize = '5vmin';


  //Used for all instances of hovering
  const hoveredOverFontSize = '5.5vmin'




  const horzMargin = '5px';

  const normalFontWeight = '500'
  const heightLightedWeight = '800'










  const FooterLabel = styled(Box)(({ theme }) => ({
    // wordBreak: 'break-word',


    width:'25%',

    color:"inherit",


    cursor: 'pointer'
  
  }));


  const JumpToToText = styled(Button)(({ theme }) => ({
          
  
    textTransform:'none',
  
    color:PortfolioColors.SubInfoColor,
  
  
  
    width:'5%',
    minWidth:'fit-content',


    
    fontSize: isOverTopJump ? hoveredOverFontSize : '4vmin',

    fontWeight: isOverTopJump ? heightLightedWeight : normalFontWeight,
  
  
          
  
         
  
  }));



  const jumpToTopAction = () => {

    window.scrollTo({
      top: 0,

      behavior:'smooth'

    })

  }

  const contactLink = `mailto:${ContactInfo.email}?subject=Hello!`



  const doContactDevAcvtion = () => {
    window.open(contactLink,'_blank');
  }







 
 

  return(
    <Stack
      direction={'row'}

      sx={{

        marginRight:horzMargin,
        marginLeft:horzMargin,

        marginBottom:'5vmin',


        // width:'100%',

        height:'20vmin',

        justifyContent:'space-around',
        alignItems:'center',


      }}
    >

      <FooterLabel

        onClick={doContactDevAcvtion}
      


        onMouseEnter={() => setIsOverContactMe(true)}
        onMouseLeave={() => setIsOverContactMe(false)}
      >

        <Typography 
          variant="h2" 
          sx={{
            fontWeight: isOverContactMe ? heightLightedWeight : normalFontWeight,


            fontSize:isOverContactMe ? hoveredOverFontSize : optionsFontSize,
            

          }} 
        >
          Contact
        </Typography>
        <Typography 
          variant="h2" 
          sx={{
            fontWeight: isOverContactMe ? heightLightedWeight : normalFontWeight,


            fontSize:isOverContactMe ? hoveredOverFontSize : optionsFontSize,

          }} 
        >
          Me
        </Typography>

      </FooterLabel>






      <JumpToToText

        onClick={jumpToTopAction}

        onMouseEnter={() => setIsOverTopJump(true)}
        onMouseLeave={() => setIsOverTopJump(false)}



      >
        Top
      </JumpToToText>







      <FooterLabel

        underline="none"

        onClick={handleClickEvent}


        onMouseEnter={() => setIsOverAbout(true)}
        onMouseLeave={() => setIsOverAbout(false)}
      >
        
        <Typography
          sx={{

            fontWeight: isOverAbout ? heightLightedWeight : normalFontWeight,

            fontSize: isOverAbout ? hoveredOverFontSize : optionsFontSize,

          }}
        >
          About,
        </Typography>

        <Typography
          sx={{
              fontWeight: isOverAbout ? heightLightedWeight : normalFontWeight,

              fontSize: isOverAbout ? hoveredOverFontSize : optionsFontSize,
          }}
        >
          Education
        </Typography>

        <Typography
          sx={{
            fontWeight: isOverAbout ? heightLightedWeight : normalFontWeight,

            fontSize: isOverAbout ? hoveredOverFontSize : optionsFontSize,
          }}
        >
          & More
        </Typography>

      
      </FooterLabel>

    </Stack>
  );
}

