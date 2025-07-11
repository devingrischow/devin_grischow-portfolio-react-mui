import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';


import { styled } from '@mui/material/styles';


import { PortfolioColors } from '../ui/colors';






export function AboutMeEduAndMoreContainer({}) {

    
    
    const PageHeader = styled('h2')(({ theme }) => ({

        textAlign:'start',
        
        
        color:PortfolioColors.SectionDivider
    }));

    const sectionBorder = `2vw solid ${PortfolioColors.SectionDivider}`

    const SectionHeaders = styled('h2')(({ theme }) => ({

        textAlign:'start',

        marginTop:'2vw',


        
        
    }));
    
    
    const AboutText = styled('h6')(({ theme }) => ({
        textAlign:'start',

        
        
        color:PortfolioColors.SectionDivider
    }));


    const CollegeDurationDate = styled(AboutText)(({ theme }) => ({
        
        
        color:PortfolioColors.SubInfoColor
    }));





    

    
    return(
        <Stack

        spacing={6}

        
        sx={{
            width:'90vw',


            marginRight:'3vw',
            
           borderTop: 1,
            borderColor:PortfolioColors.SectionDivider,
            
            
            

            minWidth:'auto',

            marginBottom:'40vw'
        }}
        
        >
        
        
        
        <PageHeader>
        About
        </PageHeader>
        
            <AboutText>
            I’m a developer who’s passionate and enthusiastic about technology and finding solutions to problems. Whatever it may be, I’d probably be interested in it and learning more about it. I enjoy breaking things down and seeing how they work, how they go together, looking for improvements and faults, anything and everything. Then being able to discuss it further with others and expand on the idea. 
            </AboutText>
            
            <AboutText>
            I believe it’s these passions I have that lead me to strive to create better. Whenever I can, I’m always thinking of new ideas and ways to tackle challenges or to expand my horizons.
            </AboutText>
            
         



      


        <Box
            sx={{
                borderTop: 1,
                borderColor:PortfolioColors.SectionDivider,

      
            }}
        >
            <SectionHeaders>
                Education
            </SectionHeaders>
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