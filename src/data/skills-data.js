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
            'Full Stack',
            '.Net',
            'Kotlin Multi Platform',
            'Python',
            'C++ & C#',
            'Flutter & Dart',
            'Java',
            'MVVM & MVC',
            'VBA',

        ]
    },

    {
        skillset:'Backend',

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
            'JavaScript, HTML, CSS',
            'Razor Pages',
            'WinForms',
            'UI/UX',
            'Lottie Animations',
            'Wordpress',
            'Adobe',
            'Prototyping',
            'Material Design 3',
            'Communicating and translating design to code',
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
        skillset:'DevOps',

        notableSkills:[

        ],


        skills:[
            'Git & GitHub',
            'Docker',
            'Azure',
            'Firebase & Google Cloud',
            'Branching, Merging & Pull Requests',
            'Code Collaboration', 
        ]
    },


    

   

    

    
    

];