
import { DetailsComponentTypes } from '../details_pages/components/component-types'




//** EasyEats Page Images */


//What is EE Carousel Images
import iOSMain from '../images/easyeats_details_page_images/what_is_easyeats/showcase_images_carousel/EE-Top-Start-iOS.png';
import AndroidMain from '../images/easyeats_details_page_images/what_is_easyeats/showcase_images_carousel/EE-Center-ANDROID.png';
import iOSVideoPlayer from '../images/easyeats_details_page_images/what_is_easyeats/showcase_images_carousel/EE-iOS-VideoPlayer.png';
import AndroidEatingFoodLandscape from '../images/easyeats_details_page_images/what_is_easyeats/showcase_images_carousel/EE-Eating-Sideways-Android.png';
import AndroidScrollingPastAD from '../images/easyeats_details_page_images/what_is_easyeats/showcase_images_carousel/EE-Scrolling-Past-GPT-Ad-Android.png';



//What does it do section
import iOSEatingFood from '../images/easyeats_details_page_images/what_does_it_do_woven/EE-Eating-iOS.png';
import GroceryListCheckingAndrioid from '../images/easyeats_details_page_images/what_does_it_do_woven/EE-GroceryList-Check-Android.png';
import FoodJournaliOSChecking from '../images/easyeats_details_page_images/what_does_it_do_woven/EE-Food-Journal-Check-iOS.png';




//How does it Do it dash player Woven
import iOSMacroDashboard from '../images/easyeats_details_page_images/how_does_it_do_it_woven/dashboard_player_woven/EE-iOS-MacroDashboard.png';
import HorizontalVideoPlayer from '../images/easyeats_details_page_images/how_does_it_do_it_woven/dashboard_player_woven/EE-Android-Horizontal-Player.png';



//How does it Do it Curate showoff Big Img
import EEiOSCurationCodeWhileLoop from '../images/easyeats_details_page_images/how_does_it_do_it_woven/curate_code_big_img/EE-iOS-While-Looo-Curate-Code.png';


//How does it Do it Woven of Admin Panel & Software woven
import EEAdminPanelPic from '../images/easyeats_details_page_images/how_does_it_do_it_woven/admin-software-woven/Admin Panel for Adding food.png';
import EECustomEditingSoftwarePic from '../images/easyeats_details_page_images/how_does_it_do_it_woven/admin-software-woven/Batch Editor Software Start Screen.png';

export const DetailsPageData = {
    
    EasyEats: {
        
        pageId:'EasyEats',
        
        pageTitle:"Devin G | EasyEats",
        
        menuLabel:"EasyEats",
        
        
        
        detailsBody:[
            //Header on top
            {
                type:DetailsComponentTypes.Header,
                text:"EasyEats: Eating Made Easy"
            }, 
            
            
            {
                type:DetailsComponentTypes.BodyTitle,
                text:'What is EasyEats?'
            },
            
            
            {
                type:DetailsComponentTypes.BodyText,
                text:"EasyEats is a multi-platform recipe dieting app I created and published on iOS and Android that I started back in college when learning to code in Swift. Starting from a final project consisting of some classes and function calls, to quickly outgrowing the curriculum of the second class, to now fully modern composition-based apps on both platforms."
            }, 


            {
                type:DetailsComponentTypes.CarouselImagesDisplay,
                imagesList:[
                    {
                        image:iOSMain,
                        caption:"Top of EasyEats on iOs"
                    },
                    {
                        image:AndroidMain,
                        caption:"Top of EasyEats on iOs"
                    },
                    {
                        image:iOSVideoPlayer,
                        caption:"Top of EasyEats on iOs"
                    },

                    {
                        image:AndroidEatingFoodLandscape,
                        caption:"Top of EasyEats on iOs"
                    },


                    {
                        image:AndroidScrollingPastAD,
                        caption:"Top of EasyEats on iOs"
                    },
                ]
            },
            
            
            {
                type:DetailsComponentTypes.BodyText,
                text:'It takes tons of elements all involved in managing and creating the app, including NoSQL cloud databases, custom-created software & admin panels, project management & protocols, and much more. All this while being free on the app stores and monetized with Google ads.'
            },
            
            
            {
                type:DetailsComponentTypes.BodyTitle,
                text:'What does it do?'
            },
            
            
            {
                type:DetailsComponentTypes.BodyText,
                text:'It takes on the modern challenge of dieting, by leveraging technologies creatively and intelligently to tackle all sides of a person’s eating diet. Users are able to swipe through curated foods based on the data from their macro profile, view recipe info and modify serving sizes, and even watch videos on every step for every meal. After that, they can view their macros and make new shopping lists automatically and adjust them to their needs. If they’re done with all that, they can even work on building their own food journals.'
            },

            {
                type:DetailsComponentTypes.WovenImagesDispaly,
                imagesList:[
                    {
                        image:iOSEatingFood,
                        caption:"Eating a Food On iOs"
                    },


                    {
                        image:FoodJournaliOSChecking,
                        caption:"Looking at the Food Journal on iOS"
                    },
                    

                    {
                        image:GroceryListCheckingAndrioid,
                        caption:"Grocery List Checking on Android"
                    },





                   


                    
                ]

            },
            
            
            
            {
                type:DetailsComponentTypes.BodyTitle,
                text:'How does it do it?'
            },
            
            {
                type:DetailsComponentTypes.BodyText,
                text:'EasyEats is built using both iOS and Android’s native compositional libraries, SwiftUI and Compose. Both platforms use libraries to help do various tasks like asynchronous image loading with KingFisher and Coil, Animation files with Lottie, and Cloud Database Storage & Authentication plus more using Firebase and Google Cloud. To try and provide users with the most accurate information about themselves, their macros are calculated using equations and data from scientifically accurate and trustworthy sources like the National Institutes of Health (NIH), Harvard Health, and even the CDC.'
            },


            {
                type:DetailsComponentTypes.WovenImagesDispaly,
                imagesList:[
                    {
                        image:iOSMacroDashboard,
                        caption:"Looking at Macro Dashboard on iOS"
                    },


                    {
                        image:HorizontalVideoPlayer,
                        caption:"Watching a horizontal video on Android"
                    },
                    
                ]

            },

            {
                type:DetailsComponentTypes.BodyText,
                text:"Meals are presented to the user in a card-swiping format. A common design adapted for a traditionally difficult-to-decide-on task: what to eat. With each swipe, meal recommendations adapt to what time it is, what foods the user likes to eat, and their past eating trends. Using a tags and values cache-based map system, with data fed into a custom meal curation AI, recommendations are more varied but still personalized to the users. Providing them with tailored and more normal, reasonable recommendations."
            },

            {//Woven of EE Curation Code
                type:DetailsComponentTypes.WovenImagesDispaly,
                imagesList:[
                    {
                        image:iOSMacroDashboard,
                        caption:"Looking at Macro Dashboard on iOS"
                    },


                    {
                        image:HorizontalVideoPlayer,
                        caption:"Watching a horizontal video on Android"
                    },
                    
                ]

            },


            {
                type:DetailsComponentTypes.BodyText,
                text:"Powering all of the Cloud features is Firebase, Firestore, and Media Storage. Firebase has been essential in allowing EasyEats to be possible, thanks to its easy integration into iOS and Android, and extensive array of testing tools and documentation. Making everything was simple, fast, but incredibly customizable and in-depth for all the projects’ needs. However, because of how in-depth some items were getting, I wanted to reduce the chances of human error and increase efficiency. So I made several tools to help, like an admin panel for adding items to Firebase, and an editing tool with Python to further reduce the file sizes of videos for step videos."
            }, 



            {//Woven of admin panel and custom software
                type:DetailsComponentTypes.WovenImagesDispaly,
                imagesList:[
                    {
                        image:EEAdminPanelPic,
                        caption:"Section from the EasyEats Admin Panel for adding new Foods"
                    },


                    {
                        image:EECustomEditingSoftwarePic,
                        caption:"Starting Screen for Batch Video Editing Software"
                    },
                    
                ]

            },


            //Link to EasyEats Github Code Snippets
            {
                type:DetailsComponentTypes.BodyTitle,
                text:'GitHub Links'
            },


            //Link to Editing project 
            {
                type:DetailsComponentTypes.GitHubLink,
                repoTitle:"EasyEatsBatchEditor",
                repoUser:"devingrischow",
                repoLink:"https://github.com/devingrischow/EasyEatsBatchEditor"
            },




            //Link to EasyEats Repo
            {
                type:DetailsComponentTypes.GitHubLink,
                repoTitle:"EasyEats-Code-Snippets",
                repoUser:"devingrischow",
                repoLink:"https://github.com/devingrischow/EasyEats-Code-Snippets"
            },


            


            
            
        ]
        
        
    },
    
    
    
    
    
    
    FigmaDesign: {
        pageId:'FigmaDesign',
        
        pageTitle:"Devin G | Figma",
        
        menuLabel:"Figma Design",
        
        detailsBody:[
            {
                type:DetailsComponentTypes.Header,
                text:"Figma Design & Prototyping"
            }, 
            
            {
                type:DetailsComponentTypes.BodyText,
                text:"I first started using Figma and learning professional design practices in college when taking a UI/UX class. It’s not my biggest or most often used skill, but prototyping and planning still play a big role in the entire process of app development."
            }, 


            {//Woven of Prototypes
                type:DetailsComponentTypes.WovenImagesDispaly,
                imagesList:[
                    {
                        image:iOSMacroDashboard,
                        caption:"Looking at Macro Dashboard on iOS"
                    },


                    {
                        image:HorizontalVideoPlayer,
                        caption:"Watching a horizontal video on Android"
                    },
                    
                ]

            },



            {
                type:DetailsComponentTypes.BodyText,
                text:"I’ve designed a few softwares, and almost anytime they get big, Figma starts to get involved for prototyping and designing a quality UI. Whether for prototyping features or designing entire ideas out, it’s super important to have a knowledge of the process. Then there’s the important part, being able to transfer details from the designs to an app. I find the more you understand about how to design, the more you can transfer down to the software. Most designers design within a pattern or style most likely to be the most popular for apps at the time."
            }, 


            {//Carousel of various figma screenshots amd esogms 
                type:DetailsComponentTypes.CarouselImagesDisplay,
                imagesList:[
                    {
                        image:iOSMain,
                        caption:"Top of EasyEats on iOs"
                    },
                    {
                        image:AndroidMain,
                        caption:"Top of EasyEats on iOs"
                    },
                    {
                        image:iOSVideoPlayer,
                        caption:"Top of EasyEats on iOs"
                    },

                    {
                        image:AndroidEatingFoodLandscape,
                        caption:"Top of EasyEats on iOs"
                    },


                    {
                        image:AndroidScrollingPastAD,
                        caption:"Top of EasyEats on iOs"
                    },
                ]
            },


            {
                type:DetailsComponentTypes.BodyText,
                text:"I found it’s easier to build the software when you understand how the UI/UX is designed; usually, the same design principles can be applied in code. For example, Android and Apple UI have similar design requirements for bottom tab bars. Being able to understand what designers are designing for allows you to potentially see if anyone has built kits or has standardized uses already made, like Material Design or other plugins."
            }, 



            {//Woven of This pages Prototypes
                type:DetailsComponentTypes.WovenImagesDispaly,
                imagesList:[
                    {
                        image:iOSMacroDashboard,
                        caption:"Looking at Macro Dashboard on iOS"
                    },


                    {
                        image:HorizontalVideoPlayer,
                        caption:"Watching a horizontal video on Android"
                    },
                    
                ]

            },


            {
                type:DetailsComponentTypes.BodyText,
                text:"Prototyping and designing play such a big role in the workflow that even this site is designed in Figma! Details and designs are important not only for the look but also for designing how the features should work. "
            }, 



        ]
    },
    
    
    
    
    
    
    CloudDatabases:{
        
        pageId:'CloudDatabases',
        
        pageTitle:"Devin G | Cloud DataBases",
        
        menuLabel:"Cloud Databases",
        
        
        
        detailsBody:[
            //Header on top
            {
                type:DetailsComponentTypes.Header,
                text:"Cloud Databases"
            }, 
            
        
            
            {
                type:DetailsComponentTypes.BodyText,
                text:"Cloud databases and services are versatile and often vital in modern-day software. I picked up learning Google Cloud Firebase before my classes required it because the app I was building required a way to store lots of data, be updated, and show information to users around the world. I couldn’t do it by bundling the data into the app, so I looked up what I’d need and started from there."
            }, 
            {
                type:DetailsComponentTypes.BodyText,
                text:"Fast forward, and I quickly found myself teaching and tutoring how to use cloud databases effectively and what the best practices are, how to use them and find documentation, and how to best use every part of a suite effectively."
            }, 

            {//Carousel of various firebase images to showcase
                type:DetailsComponentTypes.CarouselImagesDisplay,
                imagesList:[
                    {
                        image:iOSMain,
                        caption:"Top of EasyEats on iOs"
                    },
                    {
                        image:AndroidMain,
                        caption:"Top of EasyEats on iOs"
                    },
                    {
                        image:iOSVideoPlayer,
                        caption:"Top of EasyEats on iOs"
                    },

                    {
                        image:AndroidEatingFoodLandscape,
                        caption:"Top of EasyEats on iOs"
                    },


                    {
                        image:AndroidScrollingPastAD,
                        caption:"Top of EasyEats on iOs"
                    },
                ]
            },


            {
                type:DetailsComponentTypes.BodyTitle,
                text:"Services & Usage"
            }, 

            {
                type:DetailsComponentTypes.BodyText,
                text:"Firebase is where I started, but the principles I learned and taught can be applied to every and any cloud service. I’ve even compared and investigated a few other services like AWS and MongoDB for uses in other projects and services. One of the most important things I learned and made sure everyone understood about every cloud service was the importance of bandwidth and reducing the amount you call to the server."
            }, 
            {
                type:DetailsComponentTypes.BodyText,
                text:"It’s really easy to make and overuse functions that call to the server, so understanding how to make and use effective calls is vital. Not just for making effective software but also for making sure the bandwidth cost and database are stable at any scale."
            }, 
            
            
            
            
        ]
        
        
    },
    
    
    
    
    
    
    Trello:{
        pageId:'Trello',
        
        pageTitle:"Devin G | Trello",
        
        menuLabel:"Trello & Agile",
        
        detailsBody:[
            //Header on top
            {
                type:DetailsComponentTypes.Header,
                text:"Trello & Agile"
            }, 
            
            
            {
                type:DetailsComponentTypes.BodyText,
                text:"Concepts I was introduced to early on in my coding classes. However, once I started my iOS classes, we had to publish a full app. That’s when we really started to dive deep with Trello, Sprints, and every part of the workflow. After publishing 2 apps, I’ve had a lot of experience working with Trello & Agile. Along with learning and tutoring it in college, I also tutored it in some outside programs I did with Chicago where other students learned how to make apps and software as well. One of the big things I taught students was how to use Agile workflow and how to manage their time and tasks appropriately."
            }, 


            //Slideshow of Trello Pictures
            {
                type:DetailsComponentTypes.CarouselImagesDisplay,
                imagesList:[
                    {
                        image:iOSMain,
                        caption:"Top of EasyEats on iOs"
                    },
                    {
                        image:AndroidMain,
                        caption:"Top of EasyEats on iOs"
                    },
                    {
                        image:iOSVideoPlayer,
                        caption:"Top of EasyEats on iOs"
                    },

                    {
                        image:AndroidEatingFoodLandscape,
                        caption:"Top of EasyEats on iOs"
                    },


                    {
                        image:AndroidScrollingPastAD,
                        caption:"Top of EasyEats on iOs"
                    },
                ]
            },

            {
                type:DetailsComponentTypes.BodyText,
                text:"In classes when we were working on our apps, we would routinely have sprints to discuss our current progress, issues, how we planned to solve them, and what our strategy was moving forward to the next sprint. I’ve done sprints in classes and overseen them in other programs, and the point of doing them so often is to get constant feedback on the project and make sure everyone is on the same page about the project. Learning this early on in coding has made my workflow for myself and the clients much faster than it would have normally been."
            }, 
            
            
            
            
        ]
        
    },
    
    
    
    
    
    
    
    ProblemSolving:{
        
        pageId:'ProblemSolving',
        
        pageTitle:"Devin G | Problem Solving",
        
        menuLabel:"Problem Solving",
        
        
        detailsBody:[
            //Header on top
            {
                type:DetailsComponentTypes.Header,
                text:"Problem Solving & Solutions"
            }, 
            
            
            // {
            //     type:DetailsComponentTypes.BigImage,
            //     image:CloudDataShowcase
            // },
            
            
            {
                type:DetailsComponentTypes.BodyText,
                text:"Started learning cloud databases when my college class was begining to build higher level apps but not finalizing for the app store yet, there was still one more class before all that and learning cloud databases. My app needed a way to share data between all users, but also allow them to create personalized accounts, and be able to update the data from anywhere. Quickly I learned I would need the cloud, and started integrating it into my iOS app, before even knowing we would need it."
            }, 
            
            
            
            
        ]
        
    },
    
    
    
    
    
    
    
    
    
    AI:{
        
        pageId:'AI',
        
        pageTitle:"Devin G | AI - Use & Grasp",
        
        menuLabel:"AI - Use & Grasp",
        
        
        
        detailsBody:[
            //Header on top
            {
                type:DetailsComponentTypes.Header,
                text:"AI - Usage & Grasp"
            }, 
            
            
            // {
            //     type:DetailsComponentTypes.BigImage,
            //     image:CloudDataShowcase
            // },
            
            
            {
                type:DetailsComponentTypes.BodyText,
                text:"Started learning cloud databases when my college class was begining to build higher level apps but not finalizing for the app store yet, there was still one more class before all that and learning cloud databases. My app needed a way to share data between all users, but also allow them to create personalized accounts, and be able to update the data from anywhere. Quickly I learned I would need the cloud, and started integrating it into my iOS app, before even knowing we would need it."
            }
            
            
            
            
        ]
        
    }
    
    
    
    
    
    
    
    
    
};






