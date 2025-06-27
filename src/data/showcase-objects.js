//Reason for Js file rather than json: 
//Js files and vs code intelisense have better intelisense + use of color objects 


import { PortfolioColors } from '../ui/colors';


//***** EasyEats Images *****/
import EasyEatsiOSPreview from '../images/easyeats_previews/ios_ee_preview_adjusted.png';
import EasyEatsAndroidPreview from '../images/easyeats_previews/android-ee-preview_adjusted.png';


import EasyEatsAndroidCodePreview from '../images/easyeats_previews/android-ee-code_adjusted.png';
import EasyEatsiOSCodePreview from '../images/easyeats_previews/ios-code-preview_adjusted.png';




export const ShowcaseObjects = [


    //EasyEats App Showcase
    {
        showcaseTitle:"EasyEats: Eating Made Easy",
        showcaseDescription:"A multiplatform recipe dieting app I started creating when first learning swift in college. Started from class and function calls, to being a fully featured app, being rewritten once or twice across both Android and iOS before the final versions put onto the app and play store. Featured with recipes, user personalized macro calculations & food recommendations, and more.",
        
        //Array of preview images to reference and use 
        //Background color for gradient cover

        
        backgroundInfo:{
            backgroundImages: [
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
            ],


            backgroundColorInfo:'linear-gradient(162deg,rgba(219, 60, 27, 1) 10%, rgba(87, 199, 133, 0) 100%)',
        },



        

        badgeShowcase: {
            badgesTitle: "EasyEats Development used:",

            badges:[
                {
                    badgeTitle:"Cloud backend",
                    badgeColor:PortfolioColors.CloudBackendColor
                },

                {
                    badgeTitle:"Admin Panel",
                    badgeColor:PortfolioColors.AdminPanelColor
                },


                {
                    badgeTitle:"Agile Workflow with Trello",
                    badgeColor:PortfolioColors.AgileWorkFlowTrelloColor
                },

                {
                    badgeTitle:"Custom Automated Video Editor for file size reduction",
                    badgeColor:PortfolioColors.CustomVideoEditorColor
                },

                






            ]

        }
    },












    //Android Customizable animated tab bar 
    {
        showcaseTitle:"Android Compose Customizable Animated Tab Bar ",
        showcaseDescription:`A fork build of a popular tab bar repository, modified to handle more animations on different tab bar elements.`,
        
        //Array of preview images to reference and use 
        //Background color for gradient cover

        
        backgroundInfo:{
            backgroundImages: [
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
            ],


            backgroundColorInfo:'linear-gradient(162deg,rgb(33, 27, 219) 10%, rgba(87, 199, 133, 0) 100%)',
        },



        

        
    },






    //Figma Design showcase (same link as the figma skill)







    //Excel Vba Invoice App




    


    

];