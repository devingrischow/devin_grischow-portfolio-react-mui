import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import { styled } from '@mui/material/styles';

import { PortfolioColors } from '../ui/colors'


import { useState } from 'react';






export const GlobalFooter = () => {
    //Used for all instances of hovering
    const hoveredOverFontSize = '5.5vmin'

    const heightLightedWeight = '800'
    const normalFontWeight = '500'



    const [isOverTopJump, setIsOverTopJump] = useState(false);
    


    const jumpToTopAction = () => {
    
        window.scrollTo({
          top: 0,
    
          behavior:'smooth'
    
        })
    
    }



    const CopyRightText = styled('h3')(({ theme }) => ({
          
  
        textTransform:'none',
    
        color:PortfolioColors.SubInfoColor,
    
    
    
        minWidth:'fit-content',


        
        fontSize: '4vmin',

  

        marginBottom:'8vmin',

        marginLeft:'3vw',


        textAlign:'start'
  
          
  
         
  
    }));





    const JumpToToText = styled(Button)(({ theme }) => ({
          
  
        textTransform:'none',
    
        color:PortfolioColors.SubInfoColor,
    
    
    
        width:'100%',
        minWidth:'fit-content',


        
        fontSize: isOverTopJump ? hoveredOverFontSize : '4vmin',

        fontWeight: isOverTopJump ? heightLightedWeight : normalFontWeight,
  

        marginBottom:'8vmin',


        textAlign:'center'
  
          
  
         
  
    }));


    return(

        <Stack>
            <JumpToToText

                onClick={jumpToTopAction}

                onMouseEnter={() => setIsOverTopJump(true)}
                onMouseLeave={() => setIsOverTopJump(false)}



            >
                Top
            </JumpToToText>

            <CopyRightText>
                ©Devin Grischow 2025
            </CopyRightText>

        </Stack>
        
    );
}