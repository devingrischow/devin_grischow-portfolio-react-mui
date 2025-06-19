import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


import { PortfolioColors } from '../ui/colors';




function MoreOnHeader() {
    const HeaderText = styled('h3')(({ theme }) => ({
       textAlign:'center',

        wordBreak: 'break-word',


        width:'100%'

    }));



    const horizontalMargin = '5vw'


    return (
        <Box
            sx={{
                borderBottom:1,

                borderColor:PortfolioColors.SectionDivider,
                
                marginRight:horizontalMargin,
                marginLeft:horizontalMargin,

            }}
        >

            <HeaderText>
                More on my Github
            </HeaderText>

        </Box>
    );
}


export function MoreOnGithubContainer(){

    return (
        <Stack
            sx={{
                marginTop:'35vmin'
            }}
        >
        
            {
                //Call on more header, then place the 2 icons under it (use 2 diff  funcs [1 file, share body])
                MoreOnHeader()
            }


            {

            }



            {
                
            }


        </Stack>
    );
    
    

}