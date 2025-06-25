import { DetailsPageData } from './details-pages-data';





//This list of menu info stores info for both the Menu Header, and Menu Links
//All Built from objects
export const MenuData = [
    {
        headerText:"Home"
        //No Link needed for home, reloads page 
    },

    {
        headerText:"Work Experience"
        //All OTHER experiences get loaded from name
    },

    {
        headerText:"Showcase"
        //No Link needed for home, reloads page 
    },


    {
        detailsText:DetailsPageData.EasyEats.menuLabel,
        routeTo:DetailsPageData.EasyEats.pageId
    },





    {
        headerText:"Skills"    
        //No Link needed for home, reloads page 
    },

    {
        detailsText:DetailsPageData.CloudDatabases.menuLabel,
        routeTo:DetailsPageData.CloudDatabases.pageId
    },


    {
        headerText:"GitHub"
        //No Link needed for home, reloads page 
    },

]