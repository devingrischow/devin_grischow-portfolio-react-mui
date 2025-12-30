import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import React, { useEffect } from "react";


import useMediaQuery from '@mui/material/useMediaQuery';




import { styled } from '@mui/material/styles';

import { PortfolioColors } from '../ui/colors'




//Data Imports for elements 
import { ContactInfo } from '../data/contact-info';


import { GetMatchesSmallScreen } from "../ui/matchesSmallScreenCondition";



import { HorizontalContactsContainer, VerticalHorizontalContactsContainer } from '../contacts_and_info/contacts-components';



import PortfolioPicture from '../images/Portfolio Photo.png';


import AOS from "aos";
import "aos/dist/aos.css";








const smallLabelVerticalPaddingAmount = '2vw'



const fontSize = '2rem'



const HelloText = styled('h1')(({ theme }) => ({
  // color:'purple',


  width: 'fit-content',
  display:'block',
  fontWeight:'600',
  paddingInlineEnd: '0.2em',
  
  
  fontSize:fontSize,
  
  wordBreak: 'break-word',
  
  
  // fontFamily:'roboto'
}));


const ImDevinText = styled('h2')(({ theme }) => ({
  // color:'green',
  width: 'fit-content',
  display:'block',
  
  textAlign: 'start',
  
  
  
  // fontFamily:'roboto',
  
  fontSize:fontSize,
  
  
  
  wordBreak: 'break-word',
  
  
}));



const TitleText = styled('h3')(({ theme }) => ({
  color:PortfolioColors.SubInfoColor,
  
  
  
  // fontFamily:'roboto',

  fontWeight:'300',
  
  width: 'fit-content',
  
  fontSize:24,
  
}));


const AboutMeLabel = styled('h4')(({ theme }) => ({
    
    
    paddingTop:smallLabelVerticalPaddingAmount,
    


    fontSize:'calc(1rem + 0.5vw)',

    wordBreak: 'break-word',

    borderBottom:1,

    textAlign:'start', 


   
    marginRight:'2vw',
    marginLeft:'2vw'
        



    
    
    
}));





export const LandingLocations = {
  WorkExperience:"Experience",
  Showcase:"Showcase",
  Skills:"Skills",
  Github:"Contacts & GitHub"

}





export const  NameAndImageHeader = () => {
  //Reference to if the screen is small or not 
  const doesScreenMatchSmall = GetMatchesSmallScreen()

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  
  //In the header, call another function for making the Hello Title 
  
  //In the Header ALSO contains a horizontal MUI stack to hold the name+title and the image next to each other 
  return (
    <header className="name-image-header">
    
    <Stack 
    direction="row"
    sx={ { 
      
      display:'flex',
      
      justifyContent: "space-between",       
      alignItems: "center",
      
      
      marginTop: '2vw',
      // 
      marginLeft: '7vw',
      marginRight:'2vw',
      
      
      flexWrap:'wrap',
      
      
    } }
    >
    { NameAndTitle() }
    
    
    {/* Profile Picture */}
    <Avatar 
    alt='Devin Grischow'
    src={PortfolioPicture}

    data-aos="fade-left"

    sx={ { 
      display:'block',
      width: '20%',
      height: '20%', 
      
      marginRight: '4vw',
      marginLeft: '4vw',

      marginTop: doesScreenMatchSmall ? '' : '5vw',
       
      
    } }
    
    
    />
    <AboutMeLabel>
      { ContactInfo.quickAboutMe }
    </AboutMeLabel>
    
    
    </Stack>
    
    </header>
  );
}









function NameAndTitle(){
  return (
    
    <Stack 
    spacing={4}
    
    sx={ {
      justifyContent: "center",
    } }
    >
    <Box
    
    sx={ { 
      display: 'flex',
      flexWrap: 'wrap',
      // marginRight: '6vw'
    } }
    > <HelloText >Hello!</HelloText> <ImDevinText >I'm Devin Grischow</ImDevinText> </Box>
    
    <TitleText>Software Developer</TitleText>
    
    </Stack>
    
  );
}










//contacts also has 2 different versions. 
//Horizontal uses the laid out components, side by side, 
//vertical will use contacts on side by side with the display element
//the display element varies from on the home screen being work experience, to the about mode being the about page. 
export function ContactsAndDisplayElementHolder({displayElement}){
  const matches = useMediaQuery('(min-width:600px)');

  console.log("Matches Small: ", matches)

  if(matches){
    return(<ContactsAndDisplayElementHorizontal displayElement={displayElement} />);
  }else{
    return(<ContactsAndAndDisplayElementHorizontal displayElement={displayElement} />);
    
  }

}




//Contact Container 
//Uses 2 different versions. 1 vertical, 2 horizontal
export function ContactsAndDisplayElementHorizontal({displayElement}) {
  // const matches = useMediaQuery('(min-width:600px)');
  
  
  
  
  //Its always Contacts paired with wExperience, 
  //Position of contacts may change and so may wExperience, 
  //But wExperience will always be a column
  return ( 
    
    <Stack
    direction="row"

    sx={ {



      //Content will always be in the center, flex parameters however, WILL change 
      display:'flex',




      justifyContent: "space-evenly",       
      alignItems: "start",
    } }
    
    >
    
    <VerticalHorizontalContactsContainer />
    
    
    {/*  */}
    { displayElement }



    </Stack>
    
  );
  
}





//Vertical Layout for Smaller phones
function ContactsAndAndDisplayElementHorizontal({displayElement}){
  return ( 
    
    <Stack
    

    sx={ {



      //Content will always be in the center, flex parameters however, WILL change 
      display:'flex',




      justifyContent: "space-evenly",       
      alignItems: "start",
    } }
    
    >
    
    <HorizontalContactsContainer />
    
    
    {/* <WorkExperienceColumn refs={refs} /> */}
    { displayElement }



    </Stack>
    
  );
}









