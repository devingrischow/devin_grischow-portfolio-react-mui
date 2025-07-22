import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';


import { styled } from '@mui/material/styles';


import { PortfolioColors } from '../ui/colors';


import useMediaQuery from '@mui/material/useMediaQuery';

import { createTheme } from '@mui/material/styles';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';




import { useState } from 'react';



import {ContactInfo} from '../data/contact-info';
import { height } from '@mui/system';


import { Fade } from '@mui/material';


export function AboutMeEduAndMoreContainer({}) {
    const matchesSmallScreenQuery = useMediaQuery('(min-width:600px)');

    const matchesMicroScreen = useMediaQuery('(min-width:500px)');


    
    

    
    
    const PageHeader = styled('h2')(({ theme }) => ({
        textAlign:'start',

        paddingTop:'5vmin',
        



        textAlign:'start',
        
        
        color:PortfolioColors.SectionDivider
    }));

    const sectionBorder = `2vw solid ${PortfolioColors.SectionDivider}`


    
    
    const AboutText = styled('h6')(({ theme }) => ({
        textAlign:'start',

        
        
        color:PortfolioColors.SectionDivider
    }));


    const CollegeDurationDate = styled(AboutText)(({ theme }) => ({
        
        
        color:PortfolioColors.SubInfoColor
    }));





    const HobbyImages = ({hobbyObject}) => {

        const [ focusedOnHobby, setHobbyFocus ] = useState(false);

        const setIsFocused = () => {
            setHobbyFocus(true);
        }

        const setIsNotFocused = () => {
            setHobbyFocus(false);
        }



        const HobbyLabel = styled('h3')(({ theme }) => ({
            textAlign:'center',


            marginTop:'5%',
        
        
            color:PortfolioColors.SectionDivider,

            fontSize:'1.5rem',
            
        }));


        const HobbyImageBackground = () => {
            
                if(focusedOnHobby === true){
                return(
                    
                    <Fade in={focusedOnHobby} >

                    
                    <img 
                        src={ focusedOnHobby ? hobbyObject.image : '' }
                        alt={hobbyObject.text}  
                        style={{
                            
                            height:'100vw',
                            width:"100%",

                            objectFit:'contain'
                        }}
                    />
                    </Fade>
                )
            }
            
        }

        //potential hobby label -
            const PotHobbyLabel = () => {
                
                if(matchesMicroScreen === true){
                    return(
                        <HobbyLabel>
                            {hobbyObject.text}
                        </HobbyLabel>
                    )
                }
            }


        const HobbyTextLogicLabel = () => {
            
            


            

            if(focusedOnHobby === false){
                return(
                    <Box
                        sx={{
                            minHeight:"fit-content"
                        }}
                    >
                        
                        <hobbyObject.icon sx={{
                            transform:'scale(2)',

                            marginBottom:'1vw'
                            }}
                        />

                        <PotHobbyLabel />
                        
                        
                    </Box>
                )
            }
        }


        return(

            
            <Grid

                
                onMouseEnter={setIsFocused}
                onMouseLeave={setIsNotFocused}

                


                size={ 5 }

                sx={{


                    border:2,
                    borderColor:PortfolioColors.SectionDivider, 
                    borderRadius:'2vw',

                    
                    minHeight:'20vw',


                    maxHeight:'20vw',

                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center', 
                    flexDirection:'column',

                    overflow:'hidden'

                }}
            >

                <Box
                    sx={{
                    }}
                >


                    
                    <HobbyTextLogicLabel />
                    
                        
                    
                    <HobbyImageBackground />

                </Box>
                    
                



                
                


            </Grid>

        );
    

    }



    

    
    return(
        <Stack

        spacing={6}

        
        sx={{
            width:'90vw',


            marginRight:'3vw',
            marginLeft:matchesSmallScreenQuery ? '0vw' : '5vw',
            
            borderTop: 1,
            borderColor:PortfolioColors.SectionDivider,
            
            
            

            minWidth:'auto',

            marginBottom:'40vw',
        }}
        
        >
        

        
        
        
        <PageHeader>
            About
        </PageHeader>
        
        <AboutText>
            I’m a developer who’s passionate about technology and finding solutions to problems. I’m always thinking of ideas and different ways to tackle challenges or to expand my horizons.
        </AboutText>
            
           
            
        <Box
            sx={{
                borderTop: 1,
                borderColor:PortfolioColors.SectionDivider,
            }}
        >
            

           


            <Accordion
                

                 sx={{
                    width:'inherit',
                    backgroundColor:'black',
                    color:'white',


                }}

                
            >
                <AccordionSummary 
                
                expandIcon={<ExpandMoreIcon sx={{color:'white', width:"3rem", height:'inherit', marginBottom:'12px'}} />}
                aria-controls="panel1-content"
                id="hobbies-accordian"
                sx={{
                    alignItems:'flex-end',



                    padding:'0px'
                    
                    
                }}
                >

                <PageHeader>
                    Hobbies & Interests
                </PageHeader>

                </AccordionSummary>


                <AccordionDetails>

                <AboutText
                    sx={{
                        marginBottom:"2vw",

                    }}
                >
                    Nothing’s more enjoyable than kayaking down a nice scenic river, camping, or hiking down a trail. In my spare time I also enjoy working on side projects. Creative work, programming work, all kinds of work. 
                </AboutText>
                
                <Grid container rowSpacing={2} sx={{ justifyContent:'center' }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 8, md: 12 }} >
                
                {
                    ContactInfo.hobbyImages.map ( hobbyObj => (

                        <HobbyImages hobbyObject={hobbyObj} />
                    ) )
                }

                </Grid>


                </AccordionDetails>
            </Accordion>

        </Box>


        



      


        <Box
            sx={{
                borderTop: 1,
                borderColor:PortfolioColors.SectionDivider,
            }}
        >
            <PageHeader>
                Education
            </PageHeader>
        </Box>
        
        
        <Stack
            spacing={2}
        >
            <Box>
                <AboutText>
                    McHenry County College - MCC
                </AboutText>
                <CollegeDurationDate>
                2021-2025
                </CollegeDurationDate>
            </Box>
            

            <AboutText>
                Associate's in Applied Science, Mobile Design And Development
            </AboutText>
        </Stack>
        


        
        
        
        </Stack>
    );
    
    
    
}