import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

import Grow from '@mui/material/Grow';



import React, { useState } from 'react';





import { ContactInfo } from '../data/contact-info';





//**Style Elements
import { PortfolioColors } from '../ui/colors'

import { styled } from '@mui/material/styles';


import { ContactType } from '../data/contact-info';


import {GetMatchesSmallScreen} from '../ui/matchesSmallScreenCondition';

function GrowTransition(props) {
  return <Grow {...props} />;
}



const smallLabelVerticalPaddingAmount = '5vmin';

const linkFontSize = 'calc(0.3rem + 0.7vw)';



const LinkTextLabel = styled('h2')(({ theme }) => ({
    
    
    paddingTop:smallLabelVerticalPaddingAmount,
    paddingBottom:smallLabelVerticalPaddingAmount,
    

    // width:'',


    fontSize:linkFontSize,

    wordBreak: 'break-word',

    maxHeight: '2.4m',
    lineHeight: '1.4em',


    alignContent:'center',

    marginBottom:'0px',


    
    
    
}));




function ContactLinkCell ({text, link, cellWidth='100%', cellFontSize=linkFontSize,shouldShowIcon = true, contactType=ContactType.linkedIn}) {
  const cellTextMargin = '5%'
  //Only have border on bottom



  //Copied Number Feedback Related
  const [state, setState] = useState(false);


  const handleClick = () => {
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };


  
  //on click go to given email link 
  const contactLink = `mailto:${ContactInfo.email}?subject=Hello!`
  const doContactDevAcvtion = () => {
    window.open(contactLink,'_blank');
  }

  const openLILink = () => {
    window.open(link,'_blank');
  }
  
  
  const contactClickLink = () => {
    switch(contactType){

      case ContactType.email:
        console.log("Pressed Email Contact Button");
        doContactDevAcvtion();

        break;

      case ContactType.linkedIn:
        console.log("Pressed Open LinkedIn")

        openLILink()

        break;

      case ContactType.phoneNumber:
        handleClick();

        copyTextToClipboard(ContactInfo.phoneNum);

        break;

      default:
        break;


    }
  }



  //Built using small stack w text + link image

  //** Icons Related */
  const ShowIcon = () => {

    if(shouldShowIcon){
      return(
      <span class="material-symbols-outlined">
          arrow_menu_close
        </span>
    );
    }
    
    

  };


  const copiedToClipboardAction = (
    <React.Fragment>
      <AssignmentTurnedInIcon />
    </React.Fragment>
  );


 
 

  //If the contact type is phone, then return a different stack and container
  const ContactReturnCell = () => {
    const isScreenSmall = GetMatchesSmallScreen()
    
    return (
    <Stack
      direction={'row'}


      onClick={contactClickLink}
     

      sx={{


        justifyContent:shouldShowIcon ? 'start' : 'center', 

        cursor:'pointer',

        width:cellWidth,

        //bg color goes to white and text color goes to black 
        bgcolor: 'black',
        color:'white',
        
        display:'flex',
        alignItems:'center',


      
      
        // borderTop:1,
        // borderColor:PortfolioColors.InfoDivider,

        '&:hover':{
          bgcolor:'white',
          color:'black'
        }

      }}
    >
      
      <ShowIcon />
      

      <LinkTextLabel
      
        sx={{
          fontSize:cellFontSize,

          width: shouldShowIcon ? 'fit-content' : '50%',
          height:'20%',
          wordWrap:'break-word',

          

          

          marginRight:cellTextMargin,
          marginLeft:cellTextMargin,
          
        }}
      >
        
          {text}
          
        
      </LinkTextLabel>

      <Snackbar
            open={state}
           
            onClose={handleClose}

            
            message="Copied Phone Number to Clipboard"

            autoHideDuration={3000}

            action={copiedToClipboardAction}

            
            

           

      />

    </Stack>
  )

  };



  
  return (
    <ContactReturnCell />
  );


  

}



//The VERTICAL contacts container used for Wide HORIZONTAL layout

export const  VerticalHorizontalContactsContainer = () => {
  
  //Internal width for the vertical container 
  const width = '30vw'

  const smallLabelVerticalPaddingAmount = '8vmin'



  
  
  

  
  
  return(
    <Stack 

    
    
    sx={ {


      position:'sticky',
      top:'12vmin',

      width:'65%',

      // width:width,
      //Border Between this cell and the next info cells 
      
      


      marginLeft:'3vw',
      marginRight:'5vw'
      
    } }>
    
    <Box sx={{
      borderTop: 1,

      borderColor:PortfolioColors.SectionDivider,

    }} >
      <ContactLinkCell text={ContactInfo.email} contactType={ContactType.email}  />

      {/* <AboutMeLabel
        
      >
        {ContactInfo.quickAboutMe}
      </AboutMeLabel> */}
    </Box>
   


    {
      //Each Subsiquent Item Occur from a box 
    }

    <Divider sx={{bgcolor:'white'}} orientation="horizontal" flexItem />

    <ContactLinkCell text={ContactInfo.phoneNum} contactType={ContactType.phoneNumber} />

    <Divider sx={{bgcolor:'white'}} orientation="horizontal" flexItem />

    <ContactLinkCell text={['Linkedin']} contactType={ContactType.linkedIn} link={ContactInfo.linkedIn_link} />
    
    </Stack>
  )
}










//The Vertical Contacts container used for HORIZONTAL layout
export const HorizontalContactsContainer = () => {

  const width='44%'

  const smallerFontSize = '0.8rem'

  return(
    <Stack
      sx={{

        width:'100%',
        paddingBottom:'7vmin'

        // marginBottom:'7vmin'
      }}
    >

     
      <Stack
        direction={'row'}

        sx={{

          // borderTop: 1,
          // borderBottom: 1,


          borderColor:PortfolioColors.SectionDivider,

          justifyContent:'space-evenly',

          marginTop:'7vmin'
        }}
      >
        <ContactLinkCell contactType={ContactType.email} text={ContactInfo.email} link={''} cellWidth={width} shouldShowIcon={false} />

        <Divider sx={{bgcolor:'white'}} orientation="vertical" flexItem />

        <ContactLinkCell text={ContactInfo.phoneNum} contactType={ContactType.phoneNumber} cellWidth={width} shouldShowIcon={false} />

        <Divider sx={{bgcolor:'white'}} orientation="vertical" flexItem />

        <ContactLinkCell text={['Linkedin']} contactType={ContactType.linkedIn} link={ContactInfo.linkedIn_link} cellWidth={width} shouldShowIcon={false} />
      </Stack>
      


    </Stack>
  );


}






async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard successfully!');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}