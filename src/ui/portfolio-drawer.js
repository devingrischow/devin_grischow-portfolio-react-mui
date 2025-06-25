import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { bgcolor } from '@mui/system';


import { MenuData, menuLabels } from '../data/menu-data';





export function PortfolioDrawer({
  isDrawerOpen, 
  closeLandingDrawer, 


  workExperienceRef,
  showcaseRef,
  skillsRef,
  gitHubRef
}){


    const drawerSectionTitleHeader = styled('h2')(({ theme }) => ({
        

        
        textAlign:'center',

        alignContent:'center',


        color:'purple',

        width:'100%',


        display:'block',
        fontWeight:'600',
        paddingInlineEnd: '0.2em',
        
        
        fontSize:'0.7rem',
        
        wordBreak: 'break-word',
        
        
      fontFamily:'roboto'
    }));



    const DrawerList = (
    <Box 
        sx={{ 
            width: 250,
            
         }}
        role="presentation"
        onClick={closeLandingDrawer}
    >
        
     

       

      <List>

         {
            //Map through the data of menu options, and place them 
            MenuData.map( menuItem =>
            {
              if('headerText' in menuItem){
                return(
                  <ListItem key={menuItem} sx={{
                    borderBottom:2,
                    borderColor:'white'
                  }} >

                    <ListItemButton onClick={ () => {
                      //On click switches destination/target depending on needs
                      
                        switch(menuItem.headerText){
                          case(menuLabels.WorkExperience):
                            //Take User Home
                            workExperienceRef.current?.scrollIntoView({ behavior: 'smooth' });

                          case(menuLabels.Showcase):
                            showcaseRef.current?.scrollIntoView({ behavior: 'smooth' });

                          case(menuLabels.Skills):
                            skillsRef.current?.scrollIntoView({ behavior: 'smooth' });

                          case(menuLabels.GitHub):
                            gitHubRef.current?.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                    }>
                      <h1 style={{
                      fontWeight:'600',
                      fontSize:'2em'

                    }}>{menuItem.headerText}</h1>

                    </ListItemButton>
                    


                    
                    
                  </ListItem>

                  
                )
              }
              
            }
                
                // {
                //     if('headerText' in menuItem){

                //         <ListItem key={menuItem} sx={{
                //             fontWeight:'600'
                //         }} >
                            
                //             <ListItemText primary={menuItem.headerText} />


                //             <Divider />

                //         </ListItem>


                //     }

                    
                    
                // }
                
            )
         }
        
        






        
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>

              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />

            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}


      </List>
    </Box>
);




    return(
        <Drawer
            open={isDrawerOpen} onClose={closeLandingDrawer}
            
            //From https://mui.com/material-ui/api/drawer/
            //Used Slot Props since no good modern examples for drawer in 7, gotten from docs
            slotProps={{
                paper:{
                    sx:{backgroundColor:'gray'}
                }
            }}





            sx={{
            }}
        >
            { DrawerList }
        </Drawer>
    );
}