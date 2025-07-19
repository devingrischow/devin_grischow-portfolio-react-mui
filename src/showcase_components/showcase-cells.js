import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';


import { styled } from '@mui/material/styles';


import { PortfolioColors } from '../ui/colors';
import Paper from '@mui/material/Paper';


import { useState } from 'react';

import { useNavigate } from "react-router";


import useMediaQuery from '@mui/material/useMediaQuery';








//Cell uses standard container, but with items provided inside 











//EasyEats Special Cell
//Cell Data Values: 
//Title,
//Description,
//Badges? - {BadgeTitle, badges:[ {badgename, color},... ]
export function ShowCaseCell(showcaseObject){
    const [isOverShowCase, setIsOverShowCase] = useState(false);



    const matchesSmallScreenQuery = useMediaQuery('(min-width:600px)');
    
    
    const horizontalMargin = '17vw'


    const borderRadius = '2vw'

    //og size: 2.5
    const normalBorderSize = 2.5
    const HoveredBorderSize = 5
    // const borderSize = isOverShowCase ? HoveredBorderSize : normalBorderSize

    const isBadgesPresent = shouldBadgesBeShowcased(showcaseObject)
    
    
    
    const ShowcaseTitle = styled('h1')(({ theme }) => ({
        marginTop:'2vmin',
        marginLeft:'3vw',
        
        textAlign:'start',
        
        wordBreak: 'break-word',
        
        zIndex:2,
        
        fontSize: 'calc(2rem + 0.6vw)',
        
        
        
        
    }));
    
    const ShowcaseDate = styled('h2')(({ theme }) => ({
        // marginTop:isBadgesPresent ? '1.6vw' : '4vw',
        
        marginLeft:'3vw',
        
        textAlign:'start',
        
        wordBreak: 'break-word',
        
        zIndex:2,
        
        fontSize: 'calc(1rem + 0.2vw)',
        
        
        
        
    }));
    
    const ShowcaseDescription = styled('h2')(({ theme }) => ({
        marginTop:isBadgesPresent ? '1.6vw' : '4vw',
        
        margin:'2.3vw',
        
        textAlign:'start',
        
        wordBreak: 'break-word',
        
        zIndex:2,
        
        fontSize: 'calc(1rem + 0.4vw)',
        
        
        
        
    }));

    //Text to be used as a button to show the view more button 
    const ViewMoreAction = styled(Button)(({ theme }) => ({
        marginTop:isBadgesPresent ? '1.6vw' : '4vw',

        width:'fit-content',

        color:'white',
        
        margin:'2.3vw',
        
        textAlign:'start',
        
        wordBreak: 'break-word',
        
        zIndex:2,
        
        fontSize: 'calc(1rem + 0.4vw)',
        
        
        //Underlined Text 
        textDecoration: 'underline dashed white 2px',
        textUnderlineOffset:'5px',

        transition: 'text-decoration 0.8s ease, text-underline-offset 0.8s ease',

        '&:hover':{
            transition: 'text-decoration 0.8s ease, text-underline-offset 0.8s ease',

            textDecoration: 'underline white 2px',
            textUnderlineOffset:'9px',
        }
        
        
    }));




    let navigate = useNavigate();



    const DateLabelIfPresent = () => {

        if('dateLabel' in showcaseObject){
            return(<ShowcaseDate>
                {showcaseObject.dateLabel}
            </ShowcaseDate>);
        }

        //if the label is not found, then nothing is returned

    }
    

    

    //Handles what to do when clicking on one of the showcase cells. 
    //Each cell can either be a nav destionation link to a different page, or its just a direct link to another page.
    const clickOnShowcaseAction = () => {

        

        //Check the showcase object for each nav handler type, and what it should do 
        if('navDestination' in showcaseObject){
            const navigationRoute = showcaseObject.navDestination 
            //Showcase Object to take user to a page from the Site

            //Use react-routes navigation 
            navigate(navigationRoute);
            
            //Ensure when arriving to the page position will be at the top
            window.scrollTo({
                top: 0,
                behavior:'instant'
            });
            
            //ensure when arriving at the page only the latest and what should be there is there
            window.location.reload();

        }else if ('link' in showcaseObject){
            const linkToGoTo = showcaseObject.link

            //Showcase Object to just go to normal LINK
            window.open(linkToGoTo);
        }

    }
    
    
    
    
    const showcaseCellImagesScale = showcaseObject.backgroundInfo.scale || 2.8
    const showcaseCellImagesRotation = showcaseObject.backgroundInfo.rotation || 'rotate(20deg)'
    
    
    
    return (
        
        /**
        * Box{
        *  ImageList 
        * 
        *  Stack
        * }
        */
        
        <Box

        
        
        key={showcaseObject}
        
  


        
        
        sx={{
            
            minHeight:'50vmin',
            
            
            position:'relative',
            
            height:'max-content',
            
            
            
            marginRight:horizontalMargin,
            marginLeft:horizontalMargin,
            
            // minHeight:'50vmin',
            
            //Border Radius on BG Image list 
            
            outline: normalBorderSize,


            
            borderColor:PortfolioColors.SectionDivider,
            
            borderRadius:borderRadius,
            
            boxSizing:'border-box',
            
            transition:'outline-width 0.2s',

            
            
            
            
            overflow:'hidden',

            //Margin spacing from bottom of last cell
            marginBottom:'80px',

            
            
        }}
        >
        
        
        
        <ImageList
        // variant="quilted"
        cols={4}
        
        
        
        sx={ {
            
            zIndex:1,

            
            
            
            height:'100%',
            
            
            
            
            // width:'auto',
            
            
            overflow:'hidden',
            
            
            
            position:'absolute',
            
            
            
            
            
            
        } }
        >
        {showcaseObject.backgroundInfo.backgroundImages.map( (imageItem) =>  (
            <ImageListItem
            key={imageItem}
            sx={{
                transform: showcaseCellImagesRotation,
                scale:showcaseCellImagesScale,
                
            }}
            >
            <img 
            src={`${imageItem.img}`}
            alt={imageItem.alt} 
            style={ {
                // objectFit:'scale-down'
                
            } }
            />
            </ImageListItem>
        ))   
    }
    
    
    </ImageList>
    
    
    
    <Box 
    sx={ {

        width:'100%',
        height:'100%',
    
        //Box Level above the images, so the gradient appears 
        //over the images and makes the text more readable.
        zIndex:2,

        position:'absolute',


        
        background:showcaseObject.backgroundInfo.backgroundColorInfo,


        
    } }
    >
        
    </Box>

    
    
    
    <Stack
    // useFlexGap
    
    sx={{
        minHeight:'inherit',
        alignContent:'end',
        justifyContent:'space-between'


        
        
    }}
    >
    
   
    <Stack>
    <ShowcaseTitle>
        {showcaseObject.showcaseTitle}
    </ShowcaseTitle>

    <DateLabelIfPresent />

    
    <ShowcaseDescription>
        {showcaseObject.showcaseDescription}
    </ShowcaseDescription>
    
    
    { 
        //Call for badge showcase. 
        //If badges are present then the cell handles and presents them from here.
        ShowcaseBadges(showcaseObject)

    }
    </Stack>


    <ViewMoreAction
        onClick={clickOnShowcaseAction}
    >
        View More
    </ViewMoreAction>
    
    
    
    
    </Stack>
    
    
    </Box>
    
    
    
)
}



function ShowcaseBadges(showcaseObject){




    const BadgesLabel = styled('h3')(({ theme }) => ({
       
        textAlign:'start',
        
        wordBreak: 'break-word',

        fontSize:'calc(1rem + 1.5vw)',

        color:'white'
        
        
        
    }));

    

    //First, return and do nothing if both: 
    //A. title is not empty/null
    //B. badge objects is not empty or null 

    if( shouldBadgesBeShowcased(showcaseObject) === false ){
        console.log("Return without badge creation")
       return;
    }
    console.log("Creating badges")

    //once passeed, create and return the showcase objects 


    //Create the needed badge cells 
    const showcaseBadge = showcaseObject.badgeShowcase.badges.map( badgeObj => 

        ShowcaseBadge(badgeObj.badgeTitle, badgeObj.badgeColor) 

    );


    //Object built with v stack, name and badges 
    return(
        <Stack


            sx={ {
                zIndex:3,


                //Margin Is the same as the description, being in line with it

                //Both the title & Badges start from the start of it 
                marginLeft:'5vw',
                marginRight:'5vw',

                


                //Small amount of margin spacing 
                marginTop:'6vmin',

                marginBottom:'8vmin',



                


            } }
        >
            <BadgesLabel>
                { showcaseObject.badgeShowcase.badgesTitle }
            </BadgesLabel>

            <Stack
                // spacing={2}

                direction={'row'}

                sx={{

                    justifyContent:'center',

                    flexWrap:'wrap',

                    justifyContent: 'space-around',


                    // height:''
                    minHeight:'fit-content',



                }}
            >
                {
                    //HStack of the badges 
                    showcaseBadge
                }
            </Stack>
            
        </Stack>
    );

    

}






















function ShowcaseBadge(text, color){

    


    const matchesSmallScreenQuery = useMediaQuery('(min-width:800px)');


    console.log('Badge Color: ')

    const paddingValue = '15px'
    const paddingVerticalValue = '25px'

    const BadgeTitle = styled('h4')(({ theme }) => ({
       
        
        textAlign:'center',
        
        // wordBreak: 'break-word',



        fontSize:'calc(1rem + 0.2vw)',

        color:'white',
    
        width:'fit-content',

        // width:'100%',
        height:'fit-content',

        // margin:'1vmin'

        marginBottom:"0",

        margin:'0.5vw'
        
        
    }));



    return (
        <Paper 

           
            key={ `${text}-${color}` }
            sx={ {
                bgcolor:`${color}`, 

                justifyContent: 'center',



                display:'flex',

                alignItems:'center',

                // width:'25%',
                width:matchesSmallScreenQuery ? '15vw' : '18vw',
                
                minWidth:'fit-content',

                height:"inherit",

                margin: '5px',

                height:'inherit',

                zIndex:4,

            } }
    >
        <BadgeTitle
            sx={ {
                

                // marginTop:paddingVerticalValue,
                // marginBottom:paddingVerticalValue,

            } }
        >
            { text }
        </BadgeTitle>
        

    </Paper>
    );
    
}









function shouldBadgesBeShowcased(showcaseObject){
   
    //dont show the badge IF 
    //the Object is null,
    //Title is Null or empty, 
    //badges are null or empty,
    
    //No need to check inner values, 
    //should ONLy be given valid badge showcase
    if(showcaseObject.hasOwnProperty('badgeShowcase') == false){
        console.log("Badge is invalid")
        return false;
    }

    


    console.log("Badge is Fine")
    return true
}

function hasWhitespace(str) {
    //Trims the white space from string and checks if the length is still 0,
    return str.trim().length === 0;
}