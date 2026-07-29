import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router";

import { useInView } from 'react-intersection-observer';


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
import { Slide } from '@mui/material';








const smallLabelVerticalPaddingAmount = '2vw'



const fontSize = '1.5rem'

const helloFont = '1.3rem'
const devinFont = '2rem'
const titleFont = '1.2rem'

const aboutMeFont = '1.1rem'
const combinedNavFont = 'calc(1rem + 0.2vw - 0.5vh)'
// 'calc(1.5rem - 0.4vw)'


const HelloText = styled('h1')(({ theme }) => ({
  // color:'purple',
  
  
  // width: 'fit-content',
  color:PortfolioColors.SubInfoColor,
  display:'block',
  fontWeight:'300',
  paddingInlineEnd: '0.2em',
  textAlign: 'start',

  
  fontSize:helloFont,
  
  wordBreak: 'break-word',
  
  
  // fontFamily:'roboto'
}));


const ImDevinText = styled('h2')(({ theme }) => ({
  // color:'green',
  // width: 'fit-content',
  display:'block',
  
  textAlign: 'start',
  
  
  
  // fontFamily:'roboto',
  
  fontSize:devinFont,
  fontWeight:'720',
  
  
  wordBreak: 'break-word',
  
  
}));



const TitleText = styled('h3')(({ theme }) => ({
  color:PortfolioColors.SubInfoColor,
  
  
  
  // fontFamily:'roboto',
  
  fontWeight:'550',
  
  width: 'fit-content',
  
  fontSize:titleFont,
  
}));


const AboutMeLabel = styled('p')(({ theme }) => ({
  
  
  // paddingTop:smallLabelVerticalPaddingAmount,
  
  
  // width:'50%',
  fontSize:aboutMeFont,
  fontWeight:'200',
  // fontSize:'2vw',
  
  
  borderBottom:1,
  
  textAlign:'center', 
  
  
  
  // marginLeft:'9vw',
  // marginRight:'4vw',
  margin:'5vw'
  
  
  
  
  
  
  
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
    
    const [ firstShowRef, firstShowTextSeen ] = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

    const doesScreenMatchSmall = GetMatchesSmallScreen();

    const defaultFolioHeight = '88vh'
    const mobileFolioHeight = 'fit'
    
    
    //In the header, call another function for making the Hello Title 
    
    //In the Header ALSO contains a horizontal MUI stack to hold the name+title and the image next to each other 
    if (hideHeader == false) {
      
      
      return (
        <header className="name-image-header" ref={ref} >
        
        <Stack 
        // direction="row"
        ref={firstShowRef}
        sx={ { 
          
          height: doesScreenMatchSmall ? defaultFolioHeight : mobileFolioHeight, //Should Make the heigh Expand to be the entire size of the browser size
          // minHeight:'fit',
          justifyContent: "space-between",       
          // alignItems: "center",
          
          
          // marginTop: '2vw',
          
          
          
          
          // flexWrap:'wrap',
          
          
        } }
        >
        <NameAndTitle 
        textSeen={firstShowTextSeen}
        />
        
        
        
        <AboutMeTextWithImage textSeen={firstShowTextSeen} />

        
        
        {/* <AboutMeLabel>
          { ContactInfo.quickAboutMe }
          </AboutMeLabel> */}
          
          
          
          {/* <ContentNavigationOptions
            fontSize='1.2rem'
            cnctNavBarRef={ref}
            /> */}
            <GuidedCombinedNavBar 
            handleGoToRef={handleGoToRef}
            fontSize={combinedNavFont}
            
            handleChangePageToAboutMe={handleChangePageToAboutMe}
            handleChangePageToLanding={handleChangePageToLanding}
            isLandingPageAbout={isLandingPageAbout}
            />


            
            
            </Stack>
            
            </header>
          );
        }
}

function DisplayAvatar({textSeen}) {
  return (
    <Slide in={textSeen} direction='left'
    style={{ transitionDelay: textSeen ? '1200ms' : '0ms' }}
    >
    <Avatar
    variant="rounded"
    alt='Devin Grischow'
    src={PortfolioPicture}
    
    
    sx={ { 
      display:'block',
      width: '15rem',
      height: '15rem',
      maxWidth:'90%',
      
      // marginRight: '4vw',
      // marginLeft: '4vw',
      margin:'auto',
      // padding:'4vw',
      
      // marginTop: doesScreenMatchSmall ? '' : '5vw',
      
      
    } }
    
    
    />
    
    </Slide>
  );
}

function AboutMeTextWithImage({textSeen}) {
  const doesNotMatchScreenMatchSmall = GetMatchesSmallScreen();

  if(!doesNotMatchScreenMatchSmall) {
    return(
    <Stack
    // direction={'row'}
    sx={{

    }}
    >
    
    <AboutMeLabel>
    { ContactInfo.quickAboutMe }
    </AboutMeLabel>
    
    
    <DisplayAvatar textSeen={textSeen} />

    <AboutMeLabel
    sx={{
      fontStyle: 'italic'
    }}
    >
    If there's a problem, it must have a solution.
    </AboutMeLabel>
    
    </Stack>
  );
  }else{
    return(
    <Stack
    direction={'row'}
    sx={{

    }}
    >
    
    <AboutMeLabel>
    { ContactInfo.quickAboutMe }
    </AboutMeLabel>
    
    
    <DisplayAvatar textSeen={textSeen} />

    <AboutMeLabel
    sx={{
      fontStyle: 'italic'
    }}
    >
    If there's a problem, it must have a solution.
    </AboutMeLabel>
    
    </Stack>
  );
  }

  return 
}
      
      
      
      
      
      
      
function NameAndTitle({textSeen}){
  const doesScreenMatchSmall = GetMatchesSmallScreen();
  
  
  return (
    
    
    
    <Stack 
    spacing={'2vw'}
    
    sx={ {
      width: 'fit-content',
      justifyContent: "center",
      padding:2,
      
      marginLeft: '7vw',
      marginRight:'2vw',
    } }
    >
    
    
    
    
    <Slide in={textSeen}>
    <HelloText>
    Hello! I'm 
    </HelloText> 
    </Slide>
    
    <Slide in={textSeen}
    direction='left'
    style={{ transitionDelay: textSeen ? '400ms' : '0ms' }}
    >
    <ImDevinText >Devin Grischow</ImDevinText> 
    </Slide>
    
    
    
    
    
    
    
    
    
    <Slide 
    in={textSeen}
    direction='down'
    style={{ transitionDelay: textSeen ? '800ms' : '0ms' }}
    >
    <TitleText>Software Developer</TitleText>
    </Slide>
    
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
      export function AboutMeAndMoreNavOption({handleChangePageToAboutMe, handleChangePageToLanding, isLandingPageAbout, fontSize='0.875rem'}) {
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
              <p style={{
                fontWeight:'500',
                fontSize:fontSize,
                margin:'auto'
                
              }}>{menuItem.headerText}</p>
              </Button>)
            }
            
          }
        )
        
      }
      
      </Stack>
    );
}
        
        
        
        
        
        
        