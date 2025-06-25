


export const menuLabels = {
    Home:"Home", 


    WorkExperience:"Work Experience",


    Showcase:"Showcase",
    //Linked Showcases
    EasyEats:"EasyEats",



    Skills:"Skills",
    //Linked Skills:
    CloudDatabases:"Cloud Databases",


    GitHub:"GitHub"
}



//This list of menu info stores info for both the Menu Header, and Menu Links
//All Built from objects
export const MenuData = [
    {
        headerText:menuLabels.Home
        //No Link needed for home, reloads page 
    },

    {
        headerText:menuLabels.WorkExperience
        //All OTHER experiences get loaded from name
    },

    {
        headerText:menuLabels.Showcase
        //No Link needed for home, reloads page 
    },


    {
        detailsText:menuLabels.EasyEats,
        icon:"",
        routeTo:"tt"
    },





    {
        headerText:menuLabels.Skills    
        //No Link needed for home, reloads page 
    },

    {
        detailsText:menuLabels.CloudDatabases,
        icon:"",
        routeTo:"tt"
    },


    {
        headerText:menuLabels.GitHub   
        //No Link needed for home, reloads page 
    },

]