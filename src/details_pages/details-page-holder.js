import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';




import { useParams } from "react-router";



import { DetailsPageData } from '../data/details-pages-data';




import { DetailsComponentTypes } from "./components/component-types";

import { DetailsHeader, DetailsBodyText, BigImageSection } from './components/details-components';



import { DetailsPageTheme } from './components/details-components';





export function DetailsPageHolder() {
    //Based on the details Type, fetch the object to load in, and load in the components from it 
    //The details type are built from the inner array of map components
    
    //Loop through the details type given 

    
    //Get access to the routes parameters
    let detailsPageDataParams = useParams();

    console.log("Details Page parameters: ", detailsPageDataParams)

    //reference the details type 
    let detailType = detailsPageDataParams.detailType
    console.log("Details Type: ", detailType)


    let detailsBody = DetailsPageData[detailType].detailsBody

    let detailsBodyCount = detailsBody.length;


    console.log("Details Body: ", detailsBodyCount)





    


    const detailItems = detailsBody.map( detailItem => 
        
        {
            const detailType = detailItem.type
            console.log("Body Element Type: ", detailType)

            switch(detailType){

                case DetailsComponentTypes.Header: 
                    const headerText = detailItem.text;

                    return (<DetailsHeader key={detailItem} text={headerText} />);
                    

                case DetailsComponentTypes.BodyText:
                    const bodyText = detailItem.text;


                    return (<DetailsBodyText key={detailItem} text={bodyText} />);


                //Image Components
                case DetailsComponentTypes.BigImage:

                    const image = detailItem.image

                    return ( <BigImageSection imageSection={image} /> );

            }
        }
        
        // <div>
        //     {
        //         const detailType = detailItem.type

        //         console.log("Details Type: ", detailType)

        //         const detailsText = detailItem.text


        //     }

        //     <DetailsHeader text={detailsText} />
        
        // </div>

    )





    


    return(
        //Provide Theme to the details page 
            <ThemeProvider theme={DetailsPageTheme}>
                <DetailsPortfolioNavigationNavBar />


                <Stack>



                    
                    { detailItems }

                    



                </Stack>


            </ThemeProvider>
    );

}









const  DetailsPortfolioNavigationNavBar = () => {
  return (

    <AppBar position="static"
      sx={{
        bgcolor:'black',

        borderBottom:1,

        position:'sticky',
        top:0,

        zIndex:10
        
      }}
    >
      <Toolbar
        sx={{
          justifyContent:'space-between'
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

            





        <Button color="inherit">Back</Button>


      </Toolbar>
    </AppBar>

  );
}