import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useState } from 'react';



import { ContactInfo } from '../data/contact-info';





//**Style Elements
import { PortfolioColors } from '../ui/colors'

import { styled } from '@mui/material/styles';





const smallLabelVerticalPaddingAmount = '5vmin'
const AboutMeLabel = styled('h2')(({ theme }) => ({
    
    
    paddingTop:smallLabelVerticalPaddingAmount,
    paddingBottom:smallLabelVerticalPaddingAmount,
    


    fontSize:'1.1rem',

    wordBreak: 'break-word',

    borderBottom:1,


    
    
    
}));

const linkFontSize = '1.1rem'
const LinkTextLabel = styled('h2')(({ theme }) => ({
    
    
    paddingTop:smallLabelVerticalPaddingAmount,
    paddingBottom:smallLabelVerticalPaddingAmount,
    


    fontSize:linkFontSize,

    wordBreak: 'break-word',


    alignContent:'center',

    marginBottom:'0px'

    
    
    
}));




function ContactLinkCell ({text, link, cellWidth='100%', cellFontSize=linkFontSize}) {
  const cellTextMargin = '5%'
  //Only have border on bottom

  //Built using small stack w text + link image

  //Cell Hover States 
  const [isHoveringOverInfo, setHoveringOverInfo] = useState(false);
  
 


  return (
    <Stack
      direction={'row'}


      onMouseEnter={() => setHoveringOverInfo(true)}
      onMouseLeave={() => setHoveringOverInfo(false)}

      sx={{
        justifyContent:'center',

        cursor:'pointer',

        width:cellWidth,

        //bg color goes to white and text color goes to black 
        bgcolor: isHoveringOverInfo ? 'white' : 'black',
        color:isHoveringOverInfo ? 'black' : 'white'


      
        // borderTop:1,

        // borderColor:PortfolioColors.InfoDivider,

      }}
    >

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



//The VERTICAL contacts container used for HORIZONTAL layout
export const  VerticalHorizontalContactsContainer = () => {
  
  //Internal width for the vertical container 
  const width = '30vw'

  const smallLabelVerticalPaddingAmount = '8vmin'



  
  
  

  
  
  return(
    <Stack 
    
    sx={ {


      position:'sticky',
      top:'150px',

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
      <AboutMeLabel>
        {ContactInfo.quickAboutMe}
      </AboutMeLabel>
    </Box>
   
    <Divider sx={{bgcolor:'white'}} orientation="horizontal" flexItem />



    {
      //Each Subsiquent Item Occur from a box 
    }
    <ContactLinkCell text={ContactInfo.email} link={''} />

    <Divider sx={{bgcolor:'white'}} orientation="horizontal" flexItem />

    <ContactLinkCell text={ContactInfo.phoneNum} link={''} />

    <Divider sx={{bgcolor:'white'}} orientation="horizontal" flexItem />

    <ContactLinkCell text={['Linkedin']} link={ContactInfo.phoneNum} />
    
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
        <ContactLinkCell cellFontSize={smallerFontSize} text={ContactInfo.email} link={''} cellWidth={width} />

        <Divider sx={{bgcolor:'white'}} orientation="vertical" flexItem />

        <ContactLinkCell cellFontSize={smallerFontSize} text={ContactInfo.phoneNum} link={''} cellWidth={width} />

        <Divider sx={{bgcolor:'white'}} orientation="vertical" flexItem />

        <ContactLinkCell cellFontSize={smallerFontSize} text={['Linkedin']} link={ContactInfo.phoneNum} cellWidth={width} />
      </Stack>
      


    </Stack>
  );


}



