import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


import { styled } from '@mui/material/styles';


import { PortfolioColors } from '../ui/colors';


import { ShowcaseObjects } from '../data/showcase-objects';


//Import cells for showcase 
import { ShowCaseCell } from './showcase-cells'




export function ShowcaseContainer(){


    //Map through the objects of the showcase section, 
    //THEN call the cells onto the screen 
    const showCaseItems = ShowcaseObjects.map( showcaseObj => 

        ShowCaseCell(showcaseObj)

    );


    //Have the showcase header be STICKY and stay at the top while scrolling through 
    return (
        <Stack
            //Ensure Stacked Centered
            sx={ {
                marginTop:'15vmin'
            } }
        >
            
                { ShowCaseHeader() }


                {
                    // EasyEats 
                    showCaseItems
                }

            
        </Stack>
       


    )



}




function ShowCaseHeader(){
    const HeaderText = styled('h1')(({ theme }) => ({
       textAlign:'center',

        wordBreak: 'break-word',


        width:'100%'

    }));


    const horizontalMargin = '5vw'
    
    return(

        <Box sx={ {
            //Box is mainly a showcase seperator, HOWEVER, 
            // it also needs to **STICK** to the top when the user scrolls to the section

            borderBottom:1,

            borderColor:PortfolioColors.SectionDivider,
            
            marginRight:horizontalMargin,
            marginLeft:horizontalMargin,


            //Margin Spacing on the bottom 
            marginBottom:'7vmin'


            
        } }>
            <HeaderText>
                Showcase
            </HeaderText>
        </Box>

        
    )

}