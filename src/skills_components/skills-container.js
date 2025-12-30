import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import { PortfolioColors } from '../ui/colors';




import { SkillsCell } from './skills-cell';






import { SkillsData } from '../data/skills-data';
import { LandingLocations } from '../landing_page/landing-components';








export function SkillsContainer({refs}) {
    const horizontalMargin = '20vw'


    const containerHorzMargin = '8vw'


  




    return (
        <Stack

            spacing={1.5}

            ref={ (element) => (refs.current[LandingLocations.Skills] = element) }

            sx={{
                marginTop:'5vmin',
                marginBottom:'5vmin',

                marginRight:containerHorzMargin,
                marginLeft:containerHorzMargin
                
            }}
        >

            { SkillsHeader() }



            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ 
                marginRight:horizontalMargin,
                marginLeft:horizontalMargin 
             }} >

                {Array.from(Array(SkillsData.length)).map((_, index) => (

                    <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>

                        { SkillsCell(SkillsData[index]) }

                    </Grid>
                ))}


            </Grid>
                            


            
        </Stack>
    );

}



function SkillsHeader(){
    const HeaderText = styled('h2')(({ theme }) => ({
       textAlign:'center',

        wordBreak: 'break-word',


        width:'100%'

    }));


    const horizontalMargin = '5vw'


    return (
        <Box
            sx={ {
                //Border on the top of the box, seperate it more
                // borderTop:1,
                // borderColor:PortfolioColors.SectionDivider,


                marginRight:horizontalMargin,
                marginLeft:horizontalMargin


            } }
        >
            <HeaderText>
                Skills
            </HeaderText>
        </Box>
    );

}