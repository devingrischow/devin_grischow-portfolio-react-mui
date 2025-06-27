

import { DetailsPageData } from '../data/details-pages-data';


//Icons (imported in components to allow for the icon to be swapped on.)

//Imported EasyEats Icon (from mat UI, not actuall EE)
import FlatwareIcon from '@mui/icons-material/Flatware';

//Cloud Database icon
import FilterDramaIcon from '@mui/icons-material/FilterDrama';



//Figma Design Icon 
import DesignServicesIcon from '@mui/icons-material/DesignServices';



//Trello / Agile Project mangement icon 
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';


//Problem Solving Icon 
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';



//Ai / Auto awesome icon 
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';




export function DetailsIconLoader( {detailsIcon, iconSize='1.5rem'} ){
    console.log("Item is:", detailsIcon)

    const iconSx = {
        color:'white',

        width:iconSize,
        height:iconSize, 


    }

    switch(detailsIcon){

        case(DetailsPageData.CloudDatabases.pageId):

        return(
            <FilterDramaIcon sx={iconSx} />
        );



        case(DetailsPageData.EasyEats.pageId):
        return(
            <FlatwareIcon sx={iconSx} />
        );


        case(DetailsPageData.FigmaDesign.pageId):
        return(<DesignServicesIcon sx={iconSx} />);


        case(DetailsPageData.Trello.pageId):
        return(<SpaceDashboardIcon sx={iconSx} />);

        case(DetailsPageData.ProblemSolving.pageId):
        return(<TipsAndUpdatesIcon sx={iconSx} />);


        case(DetailsPageData.AI.pageId):
        return(<AutoAwesomeIcon sx={iconSx} />)





    }

}