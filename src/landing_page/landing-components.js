import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';



import { styled } from '@mui/material/styles';

import { PortfolioColors } from '../ui/colors'




//Data Imports for elements 
import { ContactInfo } from '../data/contact-info';

import { WorkExperienceColumn } from '../work_experience_components/work-experience-column';



import { VerticalContactsContainer } from '../contacts_and_info/contacts-components';



import PortfolioPicture from '../images/Portfolio Photo.png';











const fontSize = '2rem'



const HelloText = styled('h1')(({ theme }) => ({
  color:'purple',
  width: 'fit-content',
  display:'block',
  fontWeight:'600',
  paddingInlineEnd: '0.2em',
  
  
  fontSize:fontSize,
  
  wordBreak: 'break-word',
  
  
  fontFamily:'roboto'
}));


const ImDevinText = styled('h2')(({ theme }) => ({
  color:'green',
  width: 'fit-content',
  display:'block',
  
  textAlign: 'start',
  
  
  
  fontFamily:'roboto',
  
  fontSize:fontSize,
  
  
  
  wordBreak: 'break-word',
  
  
}));



const TitleText = styled('h3')(({ theme }) => ({
  color:'yellow',
  
  
  
  fontFamily:'roboto',
  
  width: 'fit-content',
  
  fontSize:24,
  
}));




export const  NameAndImageHeader = () => {
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
      
      
      marginTop: '10vmin',
      marginBottom: '3vmin',
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
    sx={ { 
      display:'block',
      width: '20%',
      height: '20%', 
      
      marginRight: '4vw',
      marginLeft: '4vw',
      
      
    } }
    
    
    />
    
    </Stack>
    
    </header>
  );
}









function NameAndTitle(){
  return (
    
    <Stack 
    spacing={2}
    
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
    > <HelloText >Hello!</HelloText> <ImDevinText >Im Devin Grischow,</ImDevinText> </Box>
    
    
    
    <TitleText>Software Developer</TitleText>
    </Stack>
    
  );
}










//contacts also has 2 different versions. 
//Horizontal uses the laid out components, side by side, 
//vertical will use contacts on side by side with work experience


//Contact Container 
//Uses 2 different versions. 1 vertical, 2 horizontal
export function ContactsAndWorkExperienceStackVertical({refs}) {
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
    
    <VerticalContactsContainer />
    
    
    <WorkExperienceColumn refs={refs} />




    </Stack>
    
  )
  
}










