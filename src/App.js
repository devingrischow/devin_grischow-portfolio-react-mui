import PortfolioPicture from './images/Portfolio Photo.png'
import './App.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import { styled } from '@mui/material/styles';


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

const fontSize = 50

const HelloText = styled('h1')(({ theme }) => ({
  color:'purple',
  width: 'fit-content',
  display:'block',
  fontWeight:'600',


  fontSize:fontSize,


  fontFamily:'roboto'
}));


const ImDevinText = styled('h2')(({ theme }) => ({
  color:'green',
  width: 'fit-content',
  display:'block',


  fontFamily:'roboto',

  fontSize:fontSize,

  maxLines:'1',
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


      <p>Body Section</p>



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
    <Box sx={{
      justifyContent: "center",
      alignItems: "center",
      // width: '100%',
    }}>
      <Stack spacing={2}>
        <CenteredStack
         spacing={2} 
         direction="row"
         sx={ { paddingRight: '6vw'} }

          ><HelloText>Hello!</HelloText> <ImDevinText className='text-truncate'>Im Devin Grischow,</ImDevinText></CenteredStack>
        <TitleText>Software Developer</TitleText>
      </Stack>
    </Box>
    
  );
}




//Container for BOTH styles of portfolio scrolling 




//Container for 




//Contact Container 


//Work Experience Container 






export default App;
