//Skills Object: 
//SkillName
import { DetailsPageData } from './details-pages-data';



export const SkillsData = [

    //Notable Skills are made with small capsules that highlight when activated

    //Notables skills include {name, link}

    {
        skillset:'Back End Skills',

        notableSkills:[

            {
                nSkillTitle:'Cloud Databases',
                route:DetailsPageData.CloudDatabases.pageId
            },

            {
                nSkillTitle:'Php',
                pageLink:`https://github.com/devingrischow/AirSearch`
            },
            
            
        ],

        skills:[
            'Python',
            'C++',
            'Json',
            'SQL',
            'MyPhp',
            'NoSQL',
            'Cloud Services',
            'Database Management',
            'Command Line Interfaces (CLI’s)'
        ]
    },

    {
        skillset:'Front End Skills',

        notableSkills:[
            {
                nSkillTitle:'Figma',
                route:DetailsPageData.FigmaDesign.pageId
            },
            {
                nSkillTitle:'React',
                pageLink:`https://github.com/devingrischow/devin_grischow-portfolio-react-mui`
            }

        ],

        skills:[
            'Material Design 3',
            'HTML, CSS, JavaScript',
            'Wordpress',
            'Adobe',
            'UI/UX',
            'Lottie Animations',
            'Communicating and translating design to code'
        ]
    },



    
    {
        skillset:'Project Management',

        notableSkills:[
            {
                nSkillTitle:'Trello',
                route:DetailsPageData.Trello.pageId
            },
        ],

        skills:[
            'Agile Workflow',
            'Sprints',
            'Competently handle changes to project and project parameters'
        ]
    },

    {
        skillset:'GitHub',

        notableSkills:[

        ],


        skills:[
            'Git',
            'Collaboration', 
            'Pull Requests & Merging',
        ]
    },


    {
        skillset:'Development Skills',

        notableSkills:[
            {
                nSkillTitle:'Problem Solving',
                route:DetailsPageData.ProblemSolving.pageId
            },

            {
                nSkillTitle:'AI',
                route:DetailsPageData.AI.pageId
            },

        ],


        skills:[
            'iOS SwiftUI & Storyboards',
            'Android Jetpack Compose & Views',
            'Data Structures',
            'Microsoft & Google Office Products',
            'VBA'
        ]
    },

    

    
    

];