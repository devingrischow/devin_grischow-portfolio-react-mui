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
            'JSON',
            'SQL',
            'MyPhp',
            'NoSQL',
            'Database management',
            
            'Linux, Mac & Windows terminal comprehension'
        ]
    },

    {
        skillset:'Front End Skills',

        notableSkills:[
            {
                nSkillTitle:'Figma',
                route:DetailsPageData.FigmaDesign.pageId
            },

        ],

        skills:[
            'Material Design 3',
            'Javascript / React / Html & CSS Libraries',
            'Adobe Suite',
            'Communicating and Translating Design to Code', 


            
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
            'Github Desktop App & Website',

        ]
    },


    {
        skillset:'Development Skills',

        notableSkills:[
            {
                nSkillTitle:'Problem Solving',
                route:DetailsPageData.Trello.pageId
            },

            {
                nSkillTitle:'AI',
                route:DetailsPageData.Trello.pageId
            },

        ],


        skills:[
            'Microsoft & Google Office Products'
        ]
    },

    

    
    

];