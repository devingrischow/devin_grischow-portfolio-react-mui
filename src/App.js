import PortfolioPicture from './images/Portfolio Photo.png';

import React, { useState } from 'react';



import './App.css';



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

import { PortfolioColors } from './ui/colors'




//Data Imports for elements 
import { ContactInfo } from './data/contact-info';

import { WorkExperienceColumn } from './work_experience_components/work-experience-column';

import { ShowcaseContainer } from './showcase_components/showcase-container';
import { SkillsContainer } from './skills_components/skills-container';
import { MoreOnGithubContainer } from './github-pages-links/more-on-github-container';


import { RouterProvider } from 'react-router-dom';


import { PorfolioRoutes } from './routes';




//Custom Components styled from other components, for easy use declaration 
//From MUI

const CenteredStack = styled(Stack)(({ theme }) => ({
  justifyContent: "center",       
  alignItems: "center",
  width: 'fit-content',
  
}));

const Item = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'start',
  color: 'white',
  background: 'transparent',
  width: 'fit-content',
  
  
}));










//remove paper shadow
//boxShadow: 'none'



//Additional Routing Info From: 
//https://youtu.be/xMYo9jaMah8?si=vvNJLdmC0AqeKnqS


function App() {

  

  //Most things change, but the header
  //easyest with one if statement change
  //This is done for looks AND speed.



  return (
    <div className="Page-Container">



        < RouterProvider router={PorfolioRoutes} />




      {/* {
        //Header Over Everything, which never changes. (details page )
        //Details Page use similar nav bars, but landing page has section press back button
        LandingPortfolioNavigationNavBar()
      }



    
    { 
      //Name and image header stays static
      // NameAndImageHeader()
      //Everything else gets swapped, due to needing to be changed.
    }
    
    
    <LandingPageHandler
      isLandingPageAbout={isLandingPageAbout}

      handledClickEvent={handleChangePageToAboutMe}
    />
     */}
   

   
  
    
   
    {/* {ContactsAndWorkExperienceStackVertical()}




    { ShowcaseContainer() }



    { SkillsContainer() }


    { MoreOnGithubContainer() }




    { ContactAndAboutFooter(setIsOverContactMe) } */}


    <br />

    <br />

    <br />

    <br />


     <br />

    <br />

    <br />

    <br />


     <br />

    <br />

    <br />

    <br />

    <br />

    <br />

    <br />

    <br />


     <br />

    <br />

    <br />

    <br />


     <br />

    <br />

    <br />

    <br />

    
    </div>
  );
}



function LandingPortfolioNavigationNavBar(){
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
        >
          <MenuIcon />
        </IconButton>

            





        <Button color="inherit">Back</Button>


      </Toolbar>
    </AppBar>

  );
}

















//** Components








//Container for BOTH styles of portfolio scrolling 




//Container for 























//Contact +  About, Education & more buttons
















//ShowCase Components








  
  
  
  
  
export default App;
  
  
  
  
  
  