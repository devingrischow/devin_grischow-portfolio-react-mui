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

import { DetailsIconLoader } from '../ui/details-icon-loader';



export function PortfolioDrawer({
  isDrawerOpen, 
  closeLandingDrawer, 



  handleGoToRef
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
                    borderColor:'white',
                    
                    color:'white',


                    '&:hover':{
                      backgroundColor:'gray'
                    } 



                  }} disablePadding >

                    <ListItemButton onClick={ () => {
                      //On click switches destination/target depending on needs
                        handleGoToRef(menuItem.headerText)
                        
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
              //Handle detecting Details items 
              //Since the menu array is the design of the output, theyl only ever be routes/proper items
              else if('detailsText' in menuItem){

                
                
                return(
                <ListItem key={menuItem} sx={{
                  color:'white',
                  '&:hover':{
                    backgroundColor:'gray'
                  }

                }} disablePadding >

                  <ListItemButton
                    sx={{
                      // justifyContent:'center',
                      alignContent:'center',
                      alignItems:'center',

                      
                    }}
                    onClick={ () => {
                      //On click takes user to destination/target depending on needs
                        // handleGoToRef(menuItem.headerText)
                        
                    }
                    }>

                    <ListItemIcon>
                      <DetailsIconLoader detailsIcon={menuItem.detailsText}  />    
                    </ListItemIcon>
                    

                    <ListItemText sx={{
                      fontSize:'1.1em',
                    }} primary={menuItem.detailsText} />

                    

                    </ListItemButton>

                </ListItem>  
                )
                
              }



              
            }
            
                
          )
         }
        
        






        


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
                    sx:{backgroundColor:'black'},

                    
                }
            }}





            sx={{
            }}
        >
            { DrawerList }
        </Drawer>
    );
}