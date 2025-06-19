import PortfolioPicture from './images/Portfolio Photo.png';


import './App.css';

import useMediaQuery from '@mui/material/useMediaQuery';


import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import { styled } from '@mui/material/styles';

import { PortfolioColors } from './ui/colors'




//Data Imports for elements 
import { ContactInfo } from './data/contact-info';

import { WorkExperienceColumn } from './work_experience_components/work-experience-column';

import { ShowcaseContainer } from './showcase_components/showcase-container';
import { SkillsContainer } from './skills_components/skills-container';

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



function App() {
  return (
    <div className="Page-Container">
    
    { NameAndImageHeader() }
    
    
    
    { ContactsAndWorkExperienceStackVertical() }
    
   



    { ShowcaseContainer() }



      { SkillsContainer() }



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





//** Components
function NameAndImageHeader() {
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




//Container for BOTH styles of portfolio scrolling 




//Container for 




//contacts also has 2 different versions. 
//Horizontal uses the laid out components, side by side, 
//vertical will use contacts on side by side with work experience


//Contact Container 
//Uses 2 different versions. 1 vertical, 2 horizontal
function ContactsAndWorkExperienceStackVertical(){
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
    
    { VerticalContactsContainer() }
    
    
    { WorkExperienceColumn() }




    </Stack>
    
  )
  
}


function HorizontalContatsLayout(){
  
}

function VerticalContactsContainer(){
  
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




























//ShowCase Components








  
  
  
  
  
export default App;
  
  
  
  
  
  