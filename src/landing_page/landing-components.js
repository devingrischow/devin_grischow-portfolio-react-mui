import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router";


import useMediaQuery from '@mui/material/useMediaQuery';




import { styled } from '@mui/material/styles';

import { PortfolioColors } from '../ui/colors'




//Data Imports for elements 
import { ContactInfo } from '../data/contact-info';
import { MenuData } from '../data/menu-data';



import { GetMatchesSmallScreen } from "../ui/matchesSmallScreenCondition";



import { HorizontalContactsContainer, VerticalHorizontalContactsContainer } from '../contacts_and_info/contacts-components';



import PortfolioPicture from '../images/Portfolio Photo.png';


import AOS from "aos";
import "aos/dist/aos.css";
import { AboutMeEduAndMoreContainer } from '../about_me_edu_more/about-me-edu-more-container';








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


const AboutMeLabel = styled('p')(({ theme }) => ({
    
    
    // paddingTop:smallLabelVerticalPaddingAmount,
    


    fontSize:'calc(1rem + 0.2vw)',

    wordBreak: 'break-word',

    borderBottom:1,

    textAlign:'start', 


   
    marginLeft:'9vw',
    marginRight:'4vw',
    
        



    
    
    
}));





export const LandingLocations = {
  WorkExperience:"Experience",
  Showcase:"Showcase",
  Skills:"Skills",
  Github:"Contacts & GitHub"

}





export const FolioMainHeader = ({
  hideHeader=false, 
  handleGoToRef,
  handleChangePageToAboutMe, handleChangePageToLanding, isLandingPageAbout,
  ref}) => {
  //Reference to if the screen is small or not 
  const doesScreenMatchSmall = GetMatchesSmallScreen()

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  
  //In the header, call another function for making the Hello Title 
  
  //In the Header ALSO contains a horizontal MUI stack to hold the name+title and the image next to each other 
  if (hideHeader == false) {

  
  return (
    <header className="name-image-header" ref={ref} >
    
    <Stack 
    // direction="row"
    sx={ { 
      
      // display:'flex',
      height: '90vh', //Should Make the heigh Expand to be the entire size of the browser size
      justifyContent: "space-between",       
      // alignItems: "center",
      
      
      // marginTop: '2vw',
      
      
      
      
      flexWrap:'wrap',
      
      
    } }
    >
    { NameAndTitle() }
    
    
    
    {/* Profile Picture */}
    {/* <Avatar 
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
    
    
    /> */}
    <AboutMeLabel>
      { ContactInfo.quickAboutMe }
    </AboutMeLabel>
    
    {/* <ContentNavigationOptions
      fontSize='1.2rem'
      cnctNavBarRef={ref}
    /> */}
    <GuidedCombinedNavBar 
      handleGoToRef={handleGoToRef}
      fontSize={'1.2rem'}

      handleChangePageToAboutMe={handleChangePageToAboutMe}
      handleChangePageToLanding={handleChangePageToLanding}
      isLandingPageAbout={isLandingPageAbout}
    />

    <br />
    
    </Stack>
    
    </header>
  );
  }
}









function NameAndTitle(){
  return (
    
    <Stack 
    spacing={'4vh'}
    
    sx={ {
      justifyContent: "center",
      padding:4,
      
      marginLeft: '7vw',
      marginRight:'2vw',
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
    return(<ContactsAndDisplayElementVertical displayElement={displayElement} />);
  }else{
    return(<ContactsAndDisplayElementHorizontal displayElement={displayElement} />);
    
  }

}




//Contact Container 
//Uses 2 different versions. 1 vertical, 2 horizontal
//**Mobile Display Element
export function ContactsAndDisplayElementVertical({displayElement}) {
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
function ContactsAndDisplayElementHorizontal({displayElement}){
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


export function GuidedCombinedNavBar({
  handleGoToRef, fontSize,
  handleChangePageToAboutMe, handleChangePageToLanding, isLandingPageAbout
  }) {

    return (
    <Stack>
      <ContentNavigationOptions 
        handleGoToRef={handleGoToRef}
        fontSize={fontSize}
      />

      <AboutMeAndMoreNavOption
        handleChangePageToAboutMe={handleChangePageToAboutMe}
        handleChangePageToLanding={handleChangePageToLanding}
        isLandingPageAbout={isLandingPageAbout}
        fontSize={fontSize}
      />

    </Stack>
    );
  
}


//Navigaion Button that takes you to the About me and edu and hobbies page and shows back when you want to navigate back
//Shows "About|Education|& More" or "BACK"
export function AboutMeAndMoreNavOption({handleChangePageToAboutMe, handleChangePageToLanding, isLandingPageAbout, fontSize='1rem'}) {
  const [isOverAboutMeNavBar, setIsOverAboutMeNavBar] = useState(false);

  const aboutText = "About | Education | & More"
  const headerInfoText = isLandingPageAbout ? "Back" : aboutText

  const navigate = useNavigate();


  const navigateToAboutPage = () => {
    navigate(`/about`);

    window.scrollTo({
      top: 0,
      behavior:'instant'
    })
  }


  return (
    <Button 
        onClick={ navigateToAboutPage } 

        onMouseEnter={() => setIsOverAboutMeNavBar(true)}
        onMouseLeave={() => setIsOverAboutMeNavBar(false)}

        sx={{
          fontWeight: isOverAboutMeNavBar ? 650 : 500,
          fontSize: fontSize
        }}

        color="inherit">
          { headerInfoText }
        </Button>
  );
}

//Navigation Buttons that allow the user to jump to where they want to go on the main content page
//Shows various options like "Home" "Showcase" "Experience" etc...
export function ContentNavigationOptions({handleGoToRef, fontSize='1rem', cnctNavBarRef}) {
  return (
    <Stack
            ref={cnctNavBarRef}
            direction={'row'}
            sx={ { 
              alignItems: "center",
              justifyContent: "center",
              display:'flex',
              flexWrap: 'wrap'
              // minHeight:'64px',
              
             } }
          >
            {
              
              MenuData.map( menuItem =>
              {

                if('headerText' in menuItem){
                  //ONLY show the Menu Headers
                  return (
                  <Button
                    sx={{
                      color:"inherit"
                    }}

                    onClick={() => {
                      //On click switches destination/target depending on needs
                        handleGoToRef(menuItem.headerText)
                        
                    }}


                  >
                    <h1 style={{
                      fontWeight:'500',
                      fontSize:fontSize,
                      

                    }}>{menuItem.headerText}</h1>
                  </Button>)
                }

              }
            )

            }
           
          </Stack>
  );
}






