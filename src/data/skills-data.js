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
            
            'Linux, Mac & Windows terminal comprehension'
        ]
    },

    {
        skillset:'Front End Skills',

        notableSkills:[

        ],

        skills:[
            'Material 3',
            'Adobe',
            
        ]
    },



    
    {
        skillset:'Project Management',

        notableSkills:[

        ],

        skills:[
            'Agile Workflow',
            'Sprints',
            'Competently handle adaptations to project and project parameters '
        ]
    },

    {
        skillset:'GitHub',

        notableSkills:[

        ],


        skills:[
            'Repository Collaboration', 
            'Git',
            'Pull Requests & Merging'
        ]
    },


    {
        skillset:'Development Skills',

        notableSkills:[

        ],


        skills:[
            'Microsoft & Google Office Products'
        ]
    },

    

    
    

];