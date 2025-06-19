import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { PortfolioColors } from '../ui/colors';



export function WorkExperienceCell(workTitleText, employerName ,workTime, workType) {
  
  const PositionNameText = styled('h3')(({ theme }) => ({
       textAlign:'start'
  }));
  
  //Txt for Place, Date, and work type (contact/remote/full/part)
  const SubInfoHeader = styled('h4')(({ theme }) => ({
    textAlign:'start',

    color:PortfolioColors.SubInfoColor
  }));
  
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
    
    <SubInfoHeader>
    {employerName}
    </SubInfoHeader>
    <SubInfoHeader>
    {workTime}
    </SubInfoHeader>
    <SubInfoHeader>
    {workType}
    </SubInfoHeader>
    
    
    
    </Stack>)
    
  
}
  