import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';



import { PortfolioColors } from '../ui/colors';

import { GithubLinks } from './github-link-badges';

import { DetailsPageData } from '../data/details-pages-data';

import { LandingLocations } from '../landing_page/landing-components';
 


function MoreOnHeader() {
    const HeaderText = styled('h3')(({ theme }) => ({
       textAlign:'center',

        wordBreak: 'break-word',



    }));



    const horizontalMargin = '5vw'


    return (
        <Box
            sx={{
                width:'100%',


                borderBottom:1,

                borderColor:PortfolioColors.SectionDivider,


                marginBottom:'5vmin'
                
                // marginRight:horizontalMargin,
                // marginLeft:horizontalMargin,

            }}
        >

            <HeaderText>
                More on my Github
            </HeaderText>

        </Box>
    );
}


export function MoreOnGithubContainer({refs}){
    const horizontalMargin = '10vw'

    return (
        <Stack

            ref={ (element) => (refs.current[LandingLocations.Github] = element) }
            // {}

            sx={{
                alignItems:'center',

                marginTop:'6vmin',

                //margin right and left instead of margin of header, should take care of links margins
                marginRight:horizontalMargin,
                marginLeft:horizontalMargin,
            }}
        >
        
            {
                //Call on more header, then place the 2 icons under it (use 2 diff  funcs [1 file, share body])
                MoreOnHeader()
            }


            {
                GithubLinks(
                    "https://github.com/devingrischow",
                    "My GitHub", 'white', 'black')
            }



            {
                GithubLinks(
                    "https://github.com/Dgriscow",
                    "College Github",
                    'yellow', 
                    'coral' 
                    
                    ,'25vmin', '24vw')
            }


        </Stack>
    );
    
    

}