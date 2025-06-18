import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


import { styled } from '@mui/material/styles';


import { PortfolioColors } from '../ui/colors';
import { ShowcaseContainer } from './showcase-container';



import useMediaQuery from '@mui/material/useMediaQuery';





//Cell uses standard container, but with items provided inside 



import EasyEatsiOSPreview from '../images/easyeats_previews/ios_ee_preview_adjusted.png';
import EasyEatsAndroidPreview from '../images/easyeats_previews/android-ee-preview_adjusted.png';


import EasyEatsAndroidCodePreview from '../images/easyeats_previews/android-ee-code_adjusted.png';


import EasyEatsiOSCodePreview from '../images/easyeats_previews/ios-code-preview_adjusted.png';




//Array of EasyEats Images 
const EEPreviewImages = [
    
    
    {
        img:EasyEatsAndroidCodePreview,
        alt:"Some code for EasyEats on Android, showing off the kotlin code for the food carousel curation."
    },
    
    {
        img:EasyEatsAndroidPreview,
        alt:"Preview of EasyEats on Android showing the grocery screen."
    },
    
    {
        img:EasyEatsiOSCodePreview,
        alt:"Small snippet of EasyEats Code, showing off the native ad card for the food carousel."
    },

    {
        img: EasyEatsiOSPreview,
        alt: "Preview of EasyEats on IOS showing a club sandwich in the scrollable section."
    },
    
    
];







//EasyEats Special Cell
export function EasyEatsShowCaseCell(){
    const matchesSmallScreenQuery = useMediaQuery('(min-width:600px)');


    const horizontalMargin = '10vw'



    const ShowcaseTitle = styled('h1')(({ theme }) => ({
        marginTop:'2vmin',
        marginLeft:'3vw',
        
        textAlign:'start',
        
        wordBreak: 'break-word',
        
        zIndex:2,

        fontSize: 'calc(10px + 2vmin)',
    
    
    
    
    }));



    
    
    const ImageBackground = styled(ImageList)(({ theme }) => ({
        marginTop:'2vmin',
        marginLeft:'3vw',
        
        textAlign:'start',
        
        wordBreak: 'break-word',
        
        
        
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
        
        
        
        sx={{
            
            minHeight:'50vmin',

            
            position:'relative',
            
            height:'max-content',
            
            
            zIndex:1,
            
            marginRight:horizontalMargin,
            marginLeft:horizontalMargin,
            
            // minHeight:'50vmin',
            
            //Border Radius on BG Image list 

            border: 2.5,

            borderColor:PortfolioColors.SectionDivider,
    
            borderRadius:'2vw',
            
            
            
            
            
            
            
            
            overflow:'none',
            
        }}
        >
        
        

<ImageList
// variant="quilted"
cols={4}



sx={ {


    
    
    height:'100%',



    
    // width:'auto',
    
   
    overflow:'hidden',
    
    
    
    position:'absolute',

    borderRadius:'2vw',
    
    
    
    
    
} }
>
{EEPreviewImages.map( (imageItem) =>  (
    <ImageListItem
    sx={{
        transform: 'rotate(20deg)',
        scale:2,

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



        
        
        
        <Stack
        sx={{
            minHeight:'max-content',
            
        }}
        >
        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>
        
        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>

        




        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>


        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>

        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>

        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>


        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>

        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>


        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>


        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>

        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>
        

        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>


        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>


        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>

        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>

        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>


        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>


        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>

        <ShowcaseTitle>
            EasyEats: Eating Made Easy
        </ShowcaseTitle>

        
        
        
        </Stack>
        
        
        </Box>
        
        
        
    )
}






// <Box sx={ { 



//     display:'flex',

//     height:'50vmin',

//     borderRadius:'2vw',




//     border: 1,

//     borderColor:PortfolioColors.SectionDivider,

//     marginRight:horizontalMargin,
//     marginLeft:horizontalMargin,







//  } }
//  >








// </Box>



// {
//                 //Place the image list in here,
//                 //but keep its position relative to this component. making it ignored by everything else.
//             }

//             <ImageList
//                 sx={{
//                     position:'absolute',    
//                     height:'inherit',
//                     width:'inherit',

//                     overflow:'hidden',
//                 }}
//             >
//                 {EEPreviewImages.map( (imageItem) =>  (
    //                     <ImageListItem
//                         sx={{
//                         }}
//                     >
//                         <img 
//                         src={`${imageItem.img}`}
//                         alt={imageItem.alt} 
//                         />
//                     </ImageListItem>
//                 ))

//                 }

//             </ImageList>









        <Stack
            direction="row"
            sx={ {
                position:'absolute',
                minHeight:'50vmin',

            } }
        >
        {
            //Use a Stack of Images and resize them to fit 
            
            EEPreviewImages.map( (imageItem) =>  (

                <img src={`${imageItem.img}`} alt={imageItem.alt}

                style={ {
                    objectFit:'cover',
                    minHeight:'inherit'
                } }
                
                />

                // <ImageListItem
                // sx={{

                // }}
                // >
                // <img 
                // src={`${imageItem.img}`}
                // alt={imageItem.alt} 
                // />
                // </ImageListItem>
            )
        )
            
        }
        
        </Stack>