

import { DetailsPageData } from '../data/details-pages-data';


//Icons (imported in components to allow for the icon to be swapped on.)

//Imported EasyEats Icon (from mat UI, not actuall EE)
import FlatwareIcon from '@mui/icons-material/Flatware';

//Cloud Database icon
import FilterDramaIcon from '@mui/icons-material/FilterDrama';






export function DetailsIconLoader( {detailsIcon} ){
    console.log("Item is:", detailsIcon)

    switch(detailsIcon){

        case(DetailsPageData.CloudDatabases.pageId):

            return(
                <FilterDramaIcon sx={{color:'white'}} />
            );

    }

}