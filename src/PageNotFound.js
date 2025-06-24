import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';




import { styled } from '@mui/material/styles';




const titleFontSize = '3rem'

const PageNotFoundTitle = styled('h1')(({ theme }) => ({
  color:'white',
  width: 'fit-content',
  display:'block',
  fontWeight:'600',
  paddingInlineEnd: '0.2em',
  
  
  fontSize:titleFontSize,
  
  wordBreak: 'break-word',
  
  
  fontFamily:'roboto',



  marginLeft:'6vw',

  marginTop:'15vmin'
}));


const bodyFontSize = '1rem'

const NotFoundBody = styled('h2')(({ theme }) => ({
  color:'white',
  width: 'fit-content',
  display:'block',
  fontWeight:'600',
  paddingInlineEnd: '0.2em',
  
  
  fontSize:bodyFontSize,
  
  wordBreak: 'break-word',
  
  
  fontFamily:'roboto',



  marginLeft:'6vw',

  marginTop:'15vmin'
}));



export const PageNotFoundPage = () => {


    

    return( 
        <Stack
            sx={{
            }}
        >
            <PageNotFoundTitle>
                Page Not Found
            </PageNotFoundTitle>



            <NotFoundBody>
                The entered link does not exsist or no longer exsists anymore - <Link to='/'>Click Here to Return to the Home Page</Link>
            </NotFoundBody>

        </Stack>
    );
}