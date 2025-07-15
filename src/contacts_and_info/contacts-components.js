import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useState } from 'react';



import { ContactInfo } from '../data/contact-info';





//**Style Elements
import { PortfolioColors } from '../ui/colors'

import { styled } from '@mui/material/styles';


import { ContactType } from '../data/contact-info'



const smallLabelVerticalPaddingAmount = '5vmin'
const AboutMeLabel = styled('h2')(({ theme }) => ({
    
    
    paddingTop:smallLabelVerticalPaddingAmount,
    paddingBottom:smallLabelVerticalPaddingAmount,
    


    fontSize:'1.1rem',

    wordBreak: 'break-word',

    borderBottom:1,

    textAlign:'start', 


   
    marginRight:'2vw',
    marginLeft:'2vw'
        



    
    
    
}));

const linkFontSize = '1.1rem'
const LinkTextLabel = styled('h2')(({ theme }) => ({
    
    
    paddingTop:smallLabelVerticalPaddingAmount,
    paddingBottom:smallLabelVerticalPaddingAmount,
    


    fontSize:linkFontSize,

    wordBreak: 'break-word',


    alignContent:'center',

    marginBottom:'0px',


    
    
    
}));




function ContactLinkCell ({text, link, cellWidth='100%', cellFontSize=linkFontSize,shouldShowIcon = true, contactType=ContactType.linkedIn}) {
  const cellTextMargin = '5%'
  //Only have border on bottom

  //Built using small stack w text + link image

  //Cell Hover States 
  
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

    }
  }



  const ShowIcon = () => {
    
    if(shouldShowIcon){
      return (
        <span class="material-symbols-outlined">
          arrow_menu_close
        </span>
      );
    }

  };
  
 


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


          marginRight:cellTextMargin,
          marginLeft:cellTextMargin
        }}
      >
        {text}
      </LinkTextLabel>


    </Stack>
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

      maxWidth:'35%',

      // width:width,
      //Border Between this cell and the next info cells 
      
      


      marginLeft:'3vw',
      marginRight:'5vw'
      
    } }>
    
    <Box sx={{
      borderTop: 1,

      borderColor:PortfolioColors.SectionDivider,

    }} >
      <AboutMeLabel
        
      >
        {ContactInfo.quickAboutMe}
      </AboutMeLabel>
    </Box>
   
    <Divider sx={{bgcolor:'white'}} orientation="horizontal" flexItem />



    {
      //Each Subsiquent Item Occur from a box 
    }
    <ContactLinkCell text={ContactInfo.email} contactType={ContactType.email}  />

    <Divider sx={{bgcolor:'white'}} orientation="horizontal" flexItem />

    <ContactLinkCell text={ContactInfo.phoneNum} link={''} />

    <Divider sx={{bgcolor:'white'}} orientation="horizontal" flexItem />

    <ContactLinkCell text={['Linkedin']} contactType={ContactType.linkedIn} link={ContactInfo.linkedIn_link} />
    
    </Stack>
  )
}










//The Vertical Contacts container used for HORIZONTAL layout
export const VerticalContactsContainer = () => {

  const width='44%'

  const smallerFontSize = '0.8rem'

  return(
    <Stack
      sx={{
        marginBottom:'7vmin'
      }}
    >

      <Box
        sx={{
          borderTop: 1,
          borderBottom: 1,


          borderColor:PortfolioColors.SectionDivider,
        }}
      >

        <AboutMeLabel>
          {ContactInfo.quickAboutMe}
        </AboutMeLabel>


      </Box>

      {
        //Horizontal row stack
      }
      <Stack
        direction={'row'}

        sx={{
          justifyContent:'space-evenly',

          marginTop:'7vmin'
        }}
      >
        <ContactLinkCell cellFontSize={smallerFontSize} contactType={ContactType.email} text={ContactInfo.email} link={''} cellWidth={width} shouldShowIcon={false} />

        <Divider sx={{bgcolor:'white'}} orientation="vertical" flexItem />

        <ContactLinkCell cellFontSize={smallerFontSize} text={ContactInfo.phoneNum} link={''} cellWidth={width} shouldShowIcon={false} />

        <Divider sx={{bgcolor:'white'}} orientation="vertical" flexItem />

        <ContactLinkCell cellFontSize={smallerFontSize} text={['Linkedin']} contactType={ContactType.linkedIn} link={ContactInfo.linkedIn_link} cellWidth={width} shouldShowIcon={false} />
      </Stack>
      


    </Stack>
  );


}



