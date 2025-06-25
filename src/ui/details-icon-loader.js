

import { menuLabels } from '../data/menu-data';


//Icons (imported in components to allow for the icon to be swapped on.)

//Imported EasyEats Icon (from mat UI, not actuall EE)
import FlatwareIcon from '@mui/icons-material/Flatware';

//Cloud Database icon
import FilterDramaIcon from '@mui/icons-material/FilterDrama';






export function DetailsIconLoader( {detailsIcon} ){
    console.log("Item is:", detailsIcon)

    switch(detailsIcon){

        case(menuLabels.CloudDatabases):

            return(
                <FilterDramaIcon sx={{color:'white'}} />
            );

    }

}