import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import SvgIcon from '@mui/material/SvgIcon';



import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';




import { DetailsIconLoader } from '../../ui/details-icon-loader';



import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { fontWeight, lineHeight, margin } from '@mui/system';























export const DetailsPageTheme = createTheme({

  typography: {


    bodyText: {
        fontSize: '1.4rem',

        textAlign:'start',

        margin:'2vw'


    },


    bodyTitle:{
        fontSize: '1.7rem',


        fontWeight:'500',


        textAlign:'start',

        marginLeft:'2vw', 

        marginTop:'6vmin'


    },


    headerText: {
        fontSize: '2.5rem',
        fontWeight:'600',

        textAlign:'start',


        marginLeft:'2%', 

        lineHeight:'2rem'
        


    },
    // body1: {
    //   fontWeight: 500,
    // },
    // button: {
    //   fontStyle: 'italic',
    // },


  },
});





//*********** Text Components ***********/


export function DetailsHeader({
    text,

    detailsIcon
}) {

    return(
        <Stack





            sx={{
                minHeight:'fit-content',

                wordBreak: 'break-word',

                alignItems:'center',

                marginTop:'4vmin',
                marginBottom:'2vmin'

            }}

            direction={'row'}
        >


            <DetailsIconLoader detailsIcon={detailsIcon} iconSize={'3rem'} />

            

            
            <Typography variant='headerText'>
                { text }
            </Typography>
            



        </Stack>
        
    );

}







export function DetailsBodyText({
    text,
}) {


    return (
        
        
        <Typography variant='bodyText' >
            { text }
        </Typography>
        

        
    );

}




export function DetailsBodyTitle({
    text
}){

    return(
        <Typography variant='bodyTitle' >
            { text }
        </Typography>
    );

}








//*********** Image Components ***********/

const BigImage = styled('img')(({ DetailsPageTheme }) => ({
  
  textAlign: 'start',
  


}));






export function BigImageSection({imageSection}) {

    return(

        <BigImage src={imageSection} />

    );

}







//**List Image Components */


// Requires not just a list of components, but a list of Objects with images + titles
// (simpler & quicker to load + design than using 2 lists)
export function WovenImagesDispaly({imageObjectList}){

    return(
        <ImageList


            // cols={3}
            gap={80}

            variant="woven"

            sx={{
                justifyContent:'center',
                alignContent:'center',
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}
        >


            {
                //Iterate through the image objects and display them, 
                //fit them in one block all on screen, 
                //(there should never be to much in a woven that its overwhelming)


                imageObjectList.map( (imageObject) => (

                    <ImageListItem key={imageObject.caption}
                        sx={{
                           display: 'flex',
                           width:'min-content',
                           flexDirection: 'column',
                           alignItems:'center'
                        }}
                    >

                        <img 
                        src={imageObject.image}
                        alt={imageObject.caption}

                        style={{
                            // width:'25%',
                            
                            borderRadius:'1rem'
                        }}
                        />

                        <ImageListItemBar position="below" title={imageObject.caption} />

                    </ImageListItem>

                ) )



            }



        </ImageList>
    );


}





export function DetailsImagesCarousel({carouselImages}){

    const CarouselImageCell = ({imageObject}) => {
        console.log("Image Obj: ", imageObject.caption)
        return(
            <Stack
            sx={{
                marginBottom:'5vmin'
            }}
            >
                <img class="mx-auto d-block" style={{
                    height:'60vmin',
                    borderRadius:'1rem',
                }} src={imageObject.image} alt="Slide"
                />

                <div class="">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </Stack>
        

        
        );
    }
    
    const CarouselHoldingCell = ({index, imageObject}) => {
        if(index === 0){
            return (
            <div class="carousel-item active">
                <CarouselImageCell imageObject={imageObject} />
            </div>
        );
        }else{

            return(
                <div class="carousel-item">
                    <CarouselImageCell imageObject={imageObject} />
                </div>
            );

            
        }
    }



    const CarouselIndicators = ({index}) => {
        
        const slideNum = index + 1

        const slideLabel = `Slide ${slideNum}`

        if(index === 0){
            //Inital starting item 
            return(<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label={slideLabel}></button>);


        }else{
            return(<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} aria-label={slideLabel}></button>);
        }
        

    }
  


    return(
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                {
                    carouselImages.map( (imageObject, index) => (
                        <CarouselIndicators index={index} />
                    ) )
                }
              
            </div>
            <div class="carousel-inner">

                {
                    carouselImages.map( (imageObject, index) => (
                        <CarouselHoldingCell index={index} imageObject={imageObject} />
                    ) )
                }
{/* 
                <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>


                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>


                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div> */}



            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )

    
    
    
}


// return(
    
//         <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//             <ol class="carousel-indicators">
//                 <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//                 <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//                 <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//             </ol>
//             <div class="carousel-inner">
//                 {
//                     //map over the carousel images to assign them to the bootstrap carousel cells

//                     //ensure index 0 is handled specially and made active 
//                     carouselImages.map( (imageObject, index) => (
//                         <CarouselHoldingCell index={index} imageObject={imageObject} />
//                     ) )



//                 }
//                 {/* <div class="carousel-item active">
//                 <img class="d-block w-100" src="..." alt="First slide"/>
//                 </div>

//                 <div class="carousel-item">
//                 <img class="d-block w-100" src="..." alt="Second slide"/>
//                 </div>

//                 <div class="carousel-item">
//                 <img class="d-block w-100" src="..." alt="Third slide"/>
//                 </div> */}


//             </div>
//             <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="sr-only">Previous</span>
//             </a>
//             <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="sr-only">Next</span>
//             </a>
//         </div>
       
//     );