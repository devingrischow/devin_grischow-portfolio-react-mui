import { DetailsHeader } from '../details_pages/components/details-components';




import { DetailsComponentTypes } from '../details_pages/components/component-types'




//Imported Images used on pages.

import CloudDataShowcase from '../images/cloud-data-showcase.png';



export const DetailsPageData = {

   EasyEats: {

        pageId:'easyeats',

        pageTitle:"Devin G | EasyEats",


        detailsBody:[
            //Header on top
            {
                type:DetailsComponentTypes.Header,
                text:"EasyEats"
            }, 

            // {

            // }


            // <DetailsHeader text={'hebo'} />,



        ]


   },



   FigmaDesign: {

   },



   CloudDatabases:{

        pageId:'clouddatabase',

        pageTitle:"Devin G | Cloud DataBases",


        detailsBody:[
           //Header on top
            {
                type:DetailsComponentTypes.Header,
                text:"Cloud Databases"
            }, 


            // {
            //     type:DetailsComponentTypes.BigImage,
            //     image:CloudDataShowcase
            // },


            {
                type:DetailsComponentTypes.BodyText,
                text:"Started learning cloud databases when my college class was begining to build higher level apps but not finalizing for the app store yet, there was still one more class before all that and learning cloud databases. My app needed a way to share data between all users, but also allow them to create personalized accounts, and be able to update the data from anywhere. Quickly I learned I would need the cloud, and started integrating it into my iOS app, before even knowing we would need it."
            }, 

            // {

            // }



        ]


   },



   


   
    


};







// [

//     {
//         id:"EasyEats"
//     },


//     {
//         id:"FigmaDesign"
//     },


//     {
//         id:"VBA Production Work"
//     },



//     {
//         id:"Trello"
//     },



//     {
//         id:"ProblemSolving"
//     },



//     {
//         id:"AI"
//     }


// ];