import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import React, { useState } from 'react';

import { useNavigate } from "react-router";



import { PortfolioColors } from '../ui/colors';







const SkillSetStack = styled(Stack)(({ theme }) => ({
  
  padding: theme.spacing(2),
  textAlign: 'start',
  


}));


const SkillSetTitle = styled('h3')(({ theme }) => ({
  
    color:PortfolioColors.SubInfoColor,

    wordBreak: 'break-word',

  


}));




export function SkillsCell(skillsItem) {

    return (
        <SkillSetStack spacing={2}
            sx={{

                marginRight:'5%',
                marginLeft:'5%'
            }}
        >
            <SkillSetTitle>
                { skillsItem.skillset }
            </SkillSetTitle> 


            {
                //Notable Skills Cells 
                //Cells with Examples, pages, anything deemed worthy of being showcased


                NotableSkillContainer(skillsItem.notableSkills)

            }



            <ul style={ {
                listStyle:'disc'
            } } >
    
                { 
                    skillsItem.skills.map( skill => 

                        <li
                            style={ {
                                textAlign:'start',

                                wordBreak: 'break-word',

                            } }
                        >
                            { skill }
                        </li>

                    )
                
                }

            </ul>

        </SkillSetStack>
    );
    
}






function NotableSkillContainer(notableSkills){

    const notableSkillsCount = notableSkills.length




    



    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ 
            justifyContent:'center'

         }} >
            {Array.from(Array(notableSkillsCount)).map((_, index) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}
                  sx={{
                    
                    
                    minWidth:'fit-content',

                    

                  }}
                >
                
                    { NotableSkillCell(notableSkills, index) }

                </Grid>
        ))}
    </Grid>
    );
}




function NotableSkillCell(notableSkills, index){
    const [isHovered, setIsHovered] = useState(false);

    //Inactive is black with white border'
    //active is white with white border

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: isHovered ? '#fff' : 'black',
        
        color:isHovered ? 'black' : '#fff',

        ...theme.typography.body2,

        borderColor:'white',


        // wordBreak: 'break-word',

        alignContent:'center',




        height:'100%',



       

     


        textAlign: 'center',

        padding:'5px'


        // minWidth:'5vw',



        

       

    }));



    let notableSkill = notableSkills[index]

    let navigate = useNavigate();



    const handleClickSkillEvent = () => {

        //Check the route type to use, and handle it 
        
        if ('pageLink' in notableSkill ){

            const linkToVisit = notableSkill.pageLink

            //open new page 
            console.log("Opening New Page: ", linkToVisit)


            window.open(linkToVisit)

        }


        if('route' in notableSkill) {
            console.log("Routing to page: ", notableSkill.route);


            navigate(`/details/${notableSkills[index].route}`);


        }




        
    }



  


    return (
        <Item key={notableSkill}
            variant="outlined"

            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}


            onClick={handleClickSkillEvent}


            sx={{
                
                cursor: 'pointer',

                // marginRight:'35px',
                // marginLeft:'35px',

                // paddingRight:'10px',
                // paddingLeft:'10px'





            }}
        >
            {notableSkills[index].nSkillTitle}
        </Item>
    );


}