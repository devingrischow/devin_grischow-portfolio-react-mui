



import Stack from '@mui/material/Stack';



import { ContactInfo } from '../data/contact-info';





//**Style Elements
import { PortfolioColors } from '../ui/colors'

import { styled } from '@mui/material/styles';


//Contacts and About Me container 
function ContactsAndAboutMeVertical(){
  <Stack
    direction="row"

    sx={ {



      //Content will always be in the center, flex parameters however, WILL change 
      display:'flex',




      justifyContent: "space-evenly",       
      alignItems: "start",
    } }
  >

    { VerticalContactsContainer() }



    
  </Stack>
}




function HorizontalContatsLayout(){
  
}

export const  VerticalContactsContainer = () => {
  
  //Internal width for the vertical container 
  const width = '30vw'

  const smallLabelVerticalPaddingAmount = '8vmin'



  const SmallAboutMeLabel = styled('h2')(({ theme }) => ({
    
    
    paddingTop:smallLabelVerticalPaddingAmount,
    paddingBottom:smallLabelVerticalPaddingAmount,
    


    fontSize:'1.4rem',

    wordBreak: 'break-word',

    
    
    
  }));
  
  

  
  
  return(
    <Stack 
    
    sx={ {

      position:'sticky',
      top:'50px',

      width:'40%',

      // width:width,
      //Border Between this cell and the next info cells 
      borderBottom:1,
      borderTop: 1,
      
      borderColor:PortfolioColors.SectionDivider,


      marginLeft:'3vw',
      marginRight:'5vw'
      
    } }>
    
    <SmallAboutMeLabel>
    {ContactInfo.quickAboutMe}
    </SmallAboutMeLabel>


    {
      //Each Subsiquent Item Occur from a box 

    }
    
    </Stack>
  )
}


