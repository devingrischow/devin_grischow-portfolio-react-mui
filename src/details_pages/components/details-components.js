import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import SvgIcon from '@mui/material/SvgIcon';



import { DetailsIconLoader } from '../../ui/details-icon-loader';



import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { fontWeight, lineHeight, margin } from '@mui/system';























export const DetailsPageTheme = createTheme({

  typography: {


    bodyText: {
        fontSize: '1rem',

        textAlign:'start',

        margin:'2vw'


    },


    bodyTitle:{
        fontSize: '1.7rem',


        fontWeight:'500',


        textAlign:'start',

        marginLeft:'2vw', 


    },


    headerText: {
        fontSize: '2.5rem',
        fontWeight:'600',

        textAlign:'start',


        marginLeft:'2%', 

        lineHeight:'2rem'
        


    },
    // body1: {
    //   fontWeight: 500,
    // },
    // button: {
    //   fontStyle: 'italic',
    // },


  },
});





//*********** Text Components ***********/


export function DetailsHeader({
    text,

    detailsIcon
}) {

    return(
        <Stack

            variant='headerText'




            sx={{
                minHeight:'fit-content',

                wordBreak: 'break-word',

                alignItems:'center',

                marginTop:'4vmin',
                marginBottom:'2vmin'

            }}

            direction={'row'}
        >


            <DetailsIconLoader detailsIcon={detailsIcon} iconSize={'3rem'} />

            

            
            <Typography variant='headerText'>
                { text }
            </Typography>
            



        </Stack>
        
    );

}







export function DetailsBodyText({
    text,
}) {


    return (
        
            
        <Typography variant='bodyText' >
            { text }
        </Typography>
        

        
    );

}




export function DetailsBodyTitle({
    text
}){

    return(
        <Typography variant='bodyTitle' >
            { text }
        </Typography>
    );

}








//*********** Image Components ***********/

const BigImage = styled('img')(({ DetailsPageTheme }) => ({
  
  textAlign: 'start',
  


}));






export function BigImageSection({imageSection}) {

    return(

        <BigImage src={imageSection} />

    );

}







