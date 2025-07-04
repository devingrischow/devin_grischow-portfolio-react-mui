import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { PortfolioColors } from '../ui/colors';



import { workExperience } from '../data/work-experience-objects';


import { WorkExperienceCell } from '../work_experience_components/work-experience-cell';



import { LandingLocations } from '../landing_page/landing-components';


//Work Experience Container 
//wExperience Will Only ever be a Column, 
//Position may change, but colum stack layout will not.
export function WorkExperienceColumn({refs}) {
  
  //Rather than built buy hand, iterated over using for loops.
  //More Modular + Faster
  const workExperiences = workExperience.map( wE =>
    WorkExperienceCell(
      wE.workTitleText,
      
      wE.employerName,
      wE.workTime,
      wE.workType,
      wE.points
    )
  );
  
  
  //Work Experience Colum Gets Topped with a Dividing Bar 
  //This is mirrored on Contacts Info for another divder/seperator
  const WorkExperienceHeaderLabel = styled('h1')(({ theme }) => ({
  }));
  
  
  return (
    <Stack
    //started with 6
    spacing={12}

    ref={ (element) => (refs.current[LandingLocations.WorkExperience] = element) }
    
    //Border 
    sx={ {

      

      // width:'80vw',

      marginRight:'3vw',

      

      borderTop: 1,
      borderColor:PortfolioColors.SectionDivider,
      
      
      
      
      
    } }
    
    >
    
    
    
    <WorkExperienceHeaderLabel>
      Work Experience
    </WorkExperienceHeaderLabel>
    
    
    
    
    
    
    
    {workExperiences}
    
    
    
    
    
    
    
    
    
    </Stack>
  )
  
}
