import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import SvgIcon from '@mui/material/SvgIcon';



import { DetailsIconLoader } from '../../ui/details-icon-loader';



import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';














const marginBodyText = '5vw'









export const DetailsPageTheme = createTheme({
  typography: {

    detailsHeader: {
        fontSize: '3rem',

        textAlign:'start',

        //Margins
        marginTop:'5vmin',
        marginRight:'3vw',
        marginLeft:'3vw',

    },

    
    bodyText: {
        fontSize: '1rem',
        margin:marginBodyText,

        textAlign:'start',


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



            sx={{
                height:'10vmin',

                alignItems:'center'
            }}

            direction={'row'}
        >


            <DetailsIconLoader detailsIcon={detailsIcon}  />

            

            
            { text }



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









//*********** Image Components ***********/

const BigImage = styled('img')(({ DetailsPageTheme }) => ({
  
  textAlign: 'start',
  


}));






export function BigImageSection({imageSection}) {

    return(

        <BigImage src={imageSection} />

    );

}







