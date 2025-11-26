import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Box, width } from '@mui/system';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';



import { PortfolioColors } from '../ui/colors';

import { GithubLinks } from './github-link-badges';

import { LandingLocations } from '../landing_page/landing-components';
 
import { HorizontalContactsContainer } from '../contacts_and_info/contacts-components';


import { WovenImagesDispaly } from '../details_pages/components/details-components';




const GithubHeaders = createTheme({

  typography: {

    bodyText: {
        fontSize: '1.4rem',

        textAlign:'start',

        margin:'2vw'


    },

    GithubLabel:{
        fontSize: '1.7rem',


        fontWeight:'500',


        textAlign:'start',

        // marginLeft:'2rem', 

        marginTop:'6vmin',
        marginBottom:'6vmin',

        width:'auto',


    },

  },
});



function MoreOnHeader() {
    const HeaderText = styled('h3')(({ theme }) => ({
       textAlign:'center',

        wordBreak: 'break-word',


        paddingTop:'2vw'


    }));



    const horizontalMargin = '5vw'


    return (
         <HeaderText>
                Contacts & GitHub
            </HeaderText>
    );
}


export function MoreOnGithubContainer({refs}){
    const horizontalMargin = '10vw'

    const [isHoverOverGithubName, setGitHubHover] = useState(false);
    const [isHoverOverCollegeGithub, setCollegeHover] = useState(false);


    return (
        <Stack

            ref={ (element) => (refs.current[LandingLocations.Github] = element) }
            // {}

            sx={{
                alignItems:'center',

                marginTop:'6vmin',
                marginBottom:'6vmin',

                //margin right and left instead of margin of header, should take care of links margins
                // marginRight:horizontalMargin,
                // marginLeft:horizontalMargin,
            }}
        >

             {
                //Call on more header, then place the 2 icons under it (use 2 diff  funcs [1 file, share body])
                MoreOnHeader()
            }


            
                <HorizontalContactsContainer/>





           



        
           


        <ThemeProvider theme={GithubHeaders}>
            <Typography variant='GithubLabel' >
                <a href="https://github.com/devingrischow"
                      onMouseEnter={() => setGitHubHover(true)}
                      onMouseLeave={() => setGitHubHover(false)}
                
                          style={{
                            color: isHoverOverGithubName ? PortfolioColors.SubInfoColor : '#fff', 
                          }}
                          target="_blank">My Github</a>
            </Typography>
        </ThemeProvider>

            <WovenImagesDispaly imageObjectList={[
            
            {
                image:'https://github-readme-stats-g-dev-g.vercel.app/api?username=devingrischow&hide_rank=true&hide=issues,contribs&show=prs_merged&show_icons=true',
                caption:""
            },
            {
                image:'https://github-readme-stats-g-dev-g.vercel.app/api/top-langs/?username=devingrischow&layout=donut-vertical&exclude_repo=SummerPrograms_2022,school_year_2021',
                caption:""
            },

        ]} modWidthWoven={'100%'} mobileDisplayMode={'column'} />
        

        <ThemeProvider theme={GithubHeaders}>
            <Typography variant='GithubLabel' >
                <a href="https://github.com/Dgriscow"
                      onMouseEnter={() => setCollegeHover(true)}
                      onMouseLeave={() => setCollegeHover(false)}
                
                          style={{
                            color: isHoverOverCollegeGithub ? PortfolioColors.SubInfoColor : '#fff', 
                          }}
                          target="_blank">My College Github</a>
               
            </Typography>
        </ThemeProvider>

        <WovenImagesDispaly imageObjectList={[
            
            {
                image:'https://github-readme-stats-g-dev-g.vercel.app/api/top-langs/?username=Dgriscow&layout=donut-vertical',
                caption:""
            },
            

        ]} modWidthWoven={'100%'} mobileDisplayMode={'column'} />

        </Stack>
    );
    
    

}