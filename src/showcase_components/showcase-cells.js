import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


import { styled } from '@mui/material/styles';


import { PortfolioColors } from '../ui/colors';
import Paper from '@mui/material/Paper';


import { useState } from 'react';



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
    
    
    const horizontalMargin = '10vw'
    const borderRadius = '2vw'

    //og size: 2.5
    const normalBorderSize = 2.5
    const HoveredBorderSize = 5
    const borderSize = isOverShowCase ? HoveredBorderSize : normalBorderSize
    
    
    
    const ShowcaseTitle = styled('h1')(({ theme }) => ({
        marginTop:'2vmin',
        marginLeft:'3vw',
        
        textAlign:'start',
        
        wordBreak: 'break-word',
        
        zIndex:2,
        
        fontSize: 'calc(10px + 4vmin)',
        
        
        
        
    }));
    
    
    const ShowcaseDescription = styled('h2')(({ theme }) => ({
        marginTop:'2vmin',
        marginLeft:'4.3vw',
        
        textAlign:'start',
        
        wordBreak: 'break-word',
        
        zIndex:2,
        
        fontSize: 'calc(2px + 1.5vmin)',
        
        
        
        
    }));
    

    

     
    
    
    
    

    
    
    
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
        
        onMouseEnter={() => setIsOverShowCase(true)}
        onMouseLeave={() => setIsOverShowCase(false)}
        
        sx={{
            
            minHeight:'50vmin',
            
            
            position:'relative',
            
            height:'max-content',
            
            
            
            marginRight:horizontalMargin,
            marginLeft:horizontalMargin,
            
            // minHeight:'50vmin',
            
            //Border Radius on BG Image list 
            
            outline: borderSize,
            
            borderColor:PortfolioColors.SectionDivider,
            
            borderRadius:borderRadius,
            
            boxSizing:'border-box',
            
            transition:'outline-width 0.2s',

            
            
            
            
            
            overflow:'hidden',

            //Margin spacing from bottom of last cell
            marginBottom:'50px'
            
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
            
            // borderRadius:borderRadius,
            
            
            
            
            
        } }
        >
        {showcaseObject.backgroundInfo.backgroundImages.map( (imageItem) =>  (
            <ImageListItem
            key={imageItem}
            sx={{
                transform: 'rotate(20deg)',
                scale:4,
                
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

        //Border Radius Applied to the Box
        // borderRadius:borderRadius,

        
    } }
    >
        
    </Box>

    
    
    
    <Stack
    useFlexGap
    
    sx={{
        minHeight:'max-content',
        alignContent:'end',


        
        
    }}
    >
    
   
    
    <ShowcaseTitle>
        {showcaseObject.showcaseTitle}
    </ShowcaseTitle>
    
    <ShowcaseDescription>
        {showcaseObject.showcaseDescription}
    </ShowcaseDescription>
    
    
    { 
        //Call for badge showcase. 
        //If badges are present then the cell handles and presents them from here.
        ShowcaseBadges(showcaseObject)

    }
    
    
    
    
    </Stack>
    
    
    </Box>
    
    
    
)
}



function ShowcaseBadges(showcaseObject){




    const BadgesLabel = styled('h3')(({ theme }) => ({
       
        textAlign:'start',
        
        wordBreak: 'break-word',

        fontSize:'2vmin',

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
                marginLeft:'4.3vw',
                marginRight:'5vw',

                


                //Small amount of margin spacing 
                marginTop:'6vmin',

                marginBottom:'8vmin'


            } }
        >
            <BadgesLabel>
                { showcaseObject.badgeShowcase.badgesTitle }
            </BadgesLabel>

            <Stack
                spacing={4}

                direction={'row'}
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

    


    const matchesSmallScreenQuery = useMediaQuery('(min-width:=800px)');


    console.log('Badge Color: ')

    const paddingValue = '15px'
    const paddingVerticalValue = '25px'

    const BadgeTitle = styled('h4')(({ theme }) => ({
       
        
        textAlign:'center',
        
        wordBreak: 'break-word',



        fontSize:matchesSmallScreenQuery ? '2vmin' : '1vmin',

        color:'white',
    
        width:'100%',
        height:'fit-content',

        margin:'1vmin'
        
        
    }));



    return (
        <Paper 

           
            key={ `${text}-${color}` }
            sx={ {
                bgcolor:`${color}`, 


                display:'flex',
                alignItems:'center',

                width:'20%',


                height:'10vmin',


                zIndex:4,

            } }
    >
        <BadgeTitle
            sx={ {
                

                marginTop:paddingVerticalValue,
                marginBottom:paddingVerticalValue,

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