//Skills Object: 
//SkillName
import { DetailsPageData } from './details-pages-data';



export const SkillsData = [

    //Notable Skills are made with small capsules that highlight when activated

    //Notables skills include {name, link}

    {
        skillset:'Development',

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
            'iOS - SwiftUI & Storyboards',
            'Android - Jetpack Compose & Views',
            'Multi-Platform Coding',
            'Kotlin Multi Platform',
            'Flutter',
            'Python',
            'C++',
            'C#',
            'Data Structures',
            'CRUD Applications',
            'Algorithms',
            'Dart',

            'JavaScript',
            'Java',


            'VBA',

        ]
    },

    {
        skillset:'Back End',

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
            'SQL',
            'MySQL',
            'SQLite',
            'NoSQL',
            'Json',
            'Cloud Services',
            'Firebase',
            'Google Cloud',
            'Apache',
            'Database Management, Entry, & Creation',
            'APIs',
            'Command Line Interfaces'
        ]
    },

    {
        skillset:'Front End',

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
            'HTML, CSS, JavaScript',
            'UI/UX',
            'Lottie Animations',
            'Wordpress',
            'Adobe',
            'Prototyping',
            'Material Design 3',
            'Communicating and translating design to code'
        ]
    },



    
    {
        skillset:'Project Management',

        notableSkills:[
            {
                nSkillTitle:'Trello & Kanban',
                route:DetailsPageData.Trello.pageId
            },
        ],

        skills:[
            'Agile Workflow',
            'Sprints',
            'Documentation',
            'Competently handle changes to project and project parameters',
            'Office Products',
            'IT',
        ]
    },

    {
        skillset:'GitHub',

        notableSkills:[

        ],


        skills:[
            'Git',
            'Collaboration', 
            'Pull Requests',
            'Merging',
            'Branching',
        ]
    },


    

   

    

    
    

];