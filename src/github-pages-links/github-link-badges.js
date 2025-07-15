
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import Paper from '@mui/material/Paper';
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';



import React, { useState } from 'react';




import GitHubIcon from '@mui/icons-material/GitHub';




//Badge to use to display for github
//Can Hold parameters for size, and gitlogo color

//Make badge same as skill tag, hover over makes the elent active to be selected
export function GithubLinks(badgeLink, badgeText, badgeColor, badgeHoverOverColor ,cellHeight = '50vmin', cellWidth = '34vw'){
    const [isHovered, setIsHovered] = useState(false);
    







    const GitHubBadgeItem = styled(Paper)(({ theme }) => ({
        cursor: 'pointer',

        borderColor:'white',

        borderRadius:'4vw',






        backgroundColor: isHovered ? '#fff' : 'black',
        




        // wordBreak: 'break-word',

        display:'flex',
        flexDirection:'column',

        alignContent:'center',
        alignItems:'center',
        justifyContent:'space-evenly',


        padding:'5px',


        // height:'100%',

        width:cellWidth,
        height:cellHeight,



        


        minHeight:'fit-content',
       

     


        textAlign: 'center',




        // minWidth:'5vw',


        wordBreak: 'break-word',




        marginBottom:'30vmin'






        

        

       

    }));

    const GithubBadgeTitleText = styled('h4')(({ theme }) => ({
        

        ...theme.typography.body2,

        fontSize:'2.5vw',



        color:isHovered ? 'black' : '#fff',


        wordBreak: 'break-word',


        

       

    }));


    const onClickAction  = () => {
        window.open(badgeLink)
    }





    return(
        <GitHubBadgeItem
            variant="outlined"
            
            onClick={
                onClickAction
            }


            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            
          

                {
                //Github Logo
                }
            
           

                <GitHubIcon 


                    sx={{
                        color: isHovered ?  badgeHoverOverColor : badgeColor ,


                        width:'50%',
                        height:'50%'
                    }}
                />
               
                




                

                <GithubBadgeTitleText>
                    {
                        //Text
                        badgeText
                    }
                </GithubBadgeTitleText>   

                




            
            
                

        </GitHubBadgeItem>
        
    );

}

