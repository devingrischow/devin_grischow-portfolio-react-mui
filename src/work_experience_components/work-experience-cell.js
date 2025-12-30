import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


import { styled } from '@mui/material/styles';
import { PortfolioColors } from '../ui/colors';


import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { color } from '@mui/system';

import React, { useState } from 'react';



export function WorkExperienceCell(workTitleText, employerName,employerSite=null ,workTime, workType, points) {
  const matchesSmallScreenQuery = useMediaQuery('(min-width:600px)');

  
  const PositionNameText = styled('h3')(({ theme }) => ({
       textAlign:'start', 

       paddingLeft:matchesSmallScreenQuery ? '0' : '2vw'
  }));
  
  //Txt for Place, Date, and work type (contact/remote/full/part)
  const SubInfoHeader = styled('h4')(({ theme }) => ({
    textAlign:'start',
    

    color:PortfolioColors.SubInfoColor, 

    paddingLeft:matchesSmallScreenQuery ? '0' : '2.5vw'

  }));


 

  const workPoints = points.map( pointText =>
    {
      return(
        <ListItem 
         sx={{
            '.MuiTypography-body1':{
              fontSize:'1.25rem'
            }
          }}
        >

          <ListItemText  primary={pointText} />
          

        </ListItem>
        );
    }
  )

  const onClickAuthorHeader  = () => {
        window.open();
  }

  const [isHoveredOverEmployer, setHover] = useState(false);

  const employerSiteLink = `${employerSite}`

  const LinkSwapEmployerName = () => {
    if  (employerSite != null){
      
      
      //NOT NULL, USE LINKER
      return (
        <SubInfoHeader>

          <a href={employerSiteLink}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}

            style={{
              color: isHoveredOverEmployer ? '#fff' : PortfolioColors.SubInfoColor, 
            }}
            target="_blank">{employerName}</a>

    
        </SubInfoHeader>
      )
    }else if (employerName != null){
      return (
        <SubInfoHeader>

      
      {employerName}
    
    </SubInfoHeader>
      )
    }
  }
  
  
  //Each Cell NEEDS line at the bottom 
  return (<Stack

    key={`${workTitleText}-${employerName}-${workTime}-${workType}`}

    spacing={2}
    sx={ { 

      // width: 'max-content',


      borderBottom: 1, 
      
      borderColor: PortfolioColors.InfoDivider,


    } }
    
    >
    
    
    
    <PositionNameText>
    { workTitleText}
    </PositionNameText>
    
    < LinkSwapEmployerName />
    
    <SubInfoHeader>
    {workTime}
    </SubInfoHeader>
    <SubInfoHeader>
    {workType}
    </SubInfoHeader>

    <List sx={{
      display:'flex',
      flexDirection:'column',
      color:'white',
      fontSize:'2rem',


      listStyleType: 'disc',
      pl: 'revert-layer',
      '& .MuiListItem-root': {
          justifyContent:'center',
          // pr: '3vw',
          fontSize:'1.5rem',
          display: 'list-item',
          pl:0 //Override Default Item Root Position
          // paddingRight:'6vw'
          // marginRight:'16x'
        },
        

        

    }} >
      {workPoints}
    </List>
    
    
    
    </Stack>)
    
  
}
  