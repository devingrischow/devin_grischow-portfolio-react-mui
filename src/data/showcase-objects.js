//Reason for Js file rather than json: 
//Js files and vs code intelisense have better intelisense + use of color objects 

import { DetailsPageData } from './details-pages-data';

import { PortfolioColors } from '../ui/colors';


//***** EasyEats Images *****/
import EasyEatsiOSPreview from '../images/showcase-previews/easyeats_previews/ios_ee_preview_adjusted.png';
import EasyEatsAndroidPreview from '../images/showcase-previews/easyeats_previews/android-ee-preview_adjusted.png';


import EasyEatsAndroidCodePreview from '../images/showcase-previews/easyeats_previews/android-ee-code_adjusted.png';
import EasyEatsiOSCodePreview from '../images/showcase-previews/easyeats_previews/ios-code-preview_adjusted.png';


/**
* Invoice VBA Images
*/

import VBAInvoicePreview from '../images/showcase-previews/vba_invoice_previews/VBA-invoice.png';
import VBAPricesPreview from '../images/showcase-previews/vba_invoice_previews/VBA-Prices & Info.png';
import VBAWorkbookPreview from '../images/showcase-previews/vba_invoice_previews/VBA-Workbook.png';
import VBAInvPricesPreview from '../images/showcase-previews/vba_invoice_previews/VBA-Prices & Info.png';


/**
* Compose Custom Tab Bar
*/

import ATBFilesPreview from '../images/showcase-previews/compose_custom_anim_nav_bar-preview/CATB - Files.png';
import ATBShapePathPreview from '../images/showcase-previews/compose_custom_anim_nav_bar-preview/CATB - Custom Shape Code Showcase.png';
import ATBTabTwoPreview from '../images/showcase-previews/compose_custom_anim_nav_bar-preview/CATB-Tab 2.png';
import ATBAnimationFile from '../images/showcase-previews/compose_custom_anim_nav_bar-preview/CATB - Custom Animation File.png';




/**
 * Figma Images
 */
import PortfolioZoomOutPreview from '../images/showcase-previews/figma_design_previews/Figma-Portfolio-zoom-out.png';
import EasyEatsZoomInPreview from '../images/showcase-previews/figma_design_previews/Fig-EE-big-zoom.png';
import PortfolioZoomInPreview from '../images/showcase-previews/figma_design_previews/Figma-Portfolio-zoom-in.png';
import EasyEatsZoomOutPreview from '../images/showcase-previews/figma_design_previews/Fig-EE-out-in.png'





/**
 * Array of data objects that determine what the showcase cells look like and behave like.
 * 
 * They can have either nav destinations, links, or badge tags that showcase more.
 */
export const ShowcaseObjects = [


    //EasyEats App Showcase
    {
        showcaseTitle:"EasyEats: Eating Made Easy",
        showcaseDescription:"A multi-platform recipe dieting app I created and published on iOS and Android. Features personalized food recommendations & recipes, tailored macro calculations, smart grocery lists, and more.",
        
        dateLabel:"iOS - April, 2024 | Android - Jun, 2025",

        //When clicked on showcase takes to EasyEats page 
        navDestination:`/details/${DetailsPageData.EasyEats.pageId}`,


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


            rotation:'rotate(16deg)',

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
                    badgeTitle:"OpenCV Based Batch Video Compressor",
                    badgeColor:PortfolioColors.CustomVideoEditorColor
                },

                






            ]

        }
    },





    //Workbook Invoicer VBA App Showcase
    {
        showcaseTitle:"Invoice & Excel Workflow Enhancer with VBA",
        showcaseDescription:"An Excel implementation designed for a client to speed up an existing workflow and to help handle the workbook, creating invoices, managing inventory and prices, and more.",
        
        dateLabel:"May, 2025",

        //Array of preview images to reference and use 
        //Background color for gradient cover

        link:'https://github.com/devingrischow/VBA-Excel-Invoicing-Workbook-System',

        
        backgroundInfo:{
            backgroundImages: [
                {
                    img:VBAInvoicePreview,
                    alt:"Preview of an invoice before being printed out."
                },
        
                {
                    img:VBAPricesPreview,
                    alt:"Smart List of Prices fir clients."
                },
        
                {
                    img:VBAWorkbookPreview,
                    alt:"Showcase of the smart work order book spread sheet."
                },
                
                {
                    img: VBAInvPricesPreview,
                    alt: "Smart List of the inventory and also part prices."
                },
            ],


            backgroundColorInfo:'linear-gradient(162deg,rgb(39, 136, 35) 10%, rgba(87, 199, 133, 0) 100%)',
        },



        

        
    },





    //Android Customizable animated tab bar 
    {
        showcaseTitle:"Android Compose Customizable Animated Tab Bar ",
        showcaseDescription:`Fork of an animated nav bar, adapted to handle more in depth bar animations. Allowing for indent curves to be animated differently at any desired point.`,
        
        //Array of preview images to reference and use 
        //Background color for gradient cover

        link:'https://github.com/devingrischow/AndroidComposeAnimatedTabBarCustomizableShape',

        
        backgroundInfo:{
            backgroundImages: [
                {
                    img:ATBFilesPreview,
                    alt:"All the files that make up The Tab bar showcase."
                },
        
                {
                    img:ATBShapePathPreview,
                    alt:"Preview of the shape path code."
                },
        
                {
                    img:ATBTabTwoPreview,
                    alt:"Preview of the Tab bar selected on tab 2"
                },
                
                {
                    img: ATBAnimationFile,
                    alt: "Preview of the animation file for the tab bars."
                },
            ],

            scale:1.8,
            rotation:'rotate(10deg)',


            backgroundColorInfo:'linear-gradient(162deg,rgb(33, 27, 219) 10%, rgba(87, 199, 133, 0) 100%)',
        },



        

        
    },






    //Figma Design showcase (same link as the figma skill)
    {
        showcaseTitle:"Figma Design",
        showcaseDescription:`Showcase of various UI/UX projects Ive worked on in Figma and a demonstration of Figma’s importance for software development.`,
        

        navDestination:`/details/${DetailsPageData.FigmaDesign.pageId}`,


        //Array of preview images to reference and use 
        //Background color for gradient cover

        
        backgroundInfo:{
            backgroundImages: [
                {
                    img:PortfolioZoomOutPreview,
                    alt:"Preview of This sites Zoomed out Figma"
                },
        
                {
                    img:EasyEatsZoomInPreview,
                    alt:"Preview of EasyEats zoomed In"
                },
        
                {
                    img:PortfolioZoomInPreview,
                    alt:"Preview of this site zoomed in"
                },
                
                {
                    img: EasyEatsZoomOutPreview,
                    alt: "Preview of EasyEats Figma Zoomed Out"
                },
            ],

            rotation:'rotate(5deg)',
            scale:2,


            backgroundColorInfo:'linear-gradient(162deg,#A259FF 10%, rgba(87, 199, 133, 0) 100%)',
        },



        

        
    },








    


    

];