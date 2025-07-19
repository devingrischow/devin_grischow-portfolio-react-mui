import { DetailsPageData } from './details-pages-data';





//This list of menu info stores info for both the Menu Header, and Menu Links
//All Built from objects
export const MenuData = [
    {
        headerText:"Home"
        //No Link needed for home, reloads page 
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
        detailsText:DetailsPageData.FigmaDesign.menuLabel,
        routeTo:DetailsPageData.FigmaDesign.pageId
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
        detailsText:DetailsPageData.Trello.menuLabel,
        routeTo:DetailsPageData.Trello.pageId
    },
    {
        detailsText:DetailsPageData.ProblemSolving.menuLabel,
        routeTo:DetailsPageData.ProblemSolving.pageId
    },
    {
        detailsText:DetailsPageData.AI.menuLabel,
        routeTo:DetailsPageData.AI.pageId
    },






    

    {
        headerText:"Work Experience"
        //All OTHER experiences get loaded from name
    },

    










    {
        headerText:"Contacts & GitHub"
        //No Link needed for home, reloads page 
    },

]