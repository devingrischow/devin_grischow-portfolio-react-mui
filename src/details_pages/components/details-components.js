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

  width:'100%',

//   margin:'4vw'
  


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
                           alignItems:'center',
                           
                        }}
                    >

                        <img 
                        src={imageObject.image}
                        alt={imageObject.caption}

                        style={{

                            width: '100%',
                            maxWidth: '400px',
                            height: 'auto',
                            

                            objectFit: 'contain',

                            borderRadius:'2vw'

                            

                        }}
                        />

                        <ImageListItemBar position="below" title={imageObject.caption} />

                    </ImageListItem>

                ) )



            }



        </ImageList>
    );


}





export function DetailsImagesCarousel({carouselImages ,carouselID}){




    const CarouselImageCell = ({imageObject}) => {
        console.log("Image Obj: ", imageObject.caption)
        return(
            <Stack
            sx={{
                marginBottom:'5vmin'
            }}
            >
                <img class="mx-auto d-block" style={{
                    maxHeight:'30vw',
                    minHeight:'30vw',

                    maxWidth:'60%',


                    objectFit:'contain'
                }} src={imageObject.image} alt="Slide"
                />

                <div class="">
                    <p>{imageObject.caption}</p>
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
            return(<button type="button" data-bs-target={`#${carouselID}`} data-bs-slide-to="0" class="active" aria-current="true" aria-label={slideLabel}></button>);


        }else{
            return(<button type="button" data-bs-target={`#${carouselID}`} data-bs-slide-to={index} aria-label={slideLabel}></button>);
        }
        

    }
  


    return(
        <div id={carouselID} class="carousel slide" data-bs-ride="carousel">
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

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target={`#${carouselID}`} data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target={`#${carouselID}`} data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )

    
    
    
}



export function DetailsGitHubRepoLink({repoTitle, repoAuthor, repoLink}){

    


    const repoShowcaseLink = `https://github-readme-stats.vercel.app/api/pin/?username=${repoAuthor}&repo=${repoTitle}`

    const onClickToRepo  = () => {
        window.open(repoLink)
    }

    return(
        <img 
            src={repoShowcaseLink}

             onClick={onClickToRepo}

            width="100%"
            height="200vw"
        

            style={{
                marginTop:'4vmin',

                cursor:'pointer'

            }}
        
        />
        

    )
}

