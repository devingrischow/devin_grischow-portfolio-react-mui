
import KayakImage from '../images/hobbies-images/Kayaking.png';
import CampingImage from '../images/hobbies-images/camping.png';
import CreativeWorks from '../images/hobbies-images/Creative Works.png';
import PetProjects from '../images/hobbies-images/iOS - focus garden.png';



//Icons 
import KayakingIcon from '@mui/icons-material/Kayaking';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PaletteIcon from '@mui/icons-material/Palette';
import DesignServicesIcon from '@mui/icons-material/DesignServices';


export const ContactInfo = {
    quickAboutMe:"I'm a Software Developer enthusiastic about technology, always excited to learn something new, problem solve, understand and improve anything I can.",

    email:"devingrischow@outlook.com",
    phoneNum:"(708)-227-4381",
    linkedIn_link:"https://www.linkedin.com/in/devin-grischow-11b281258/", 


    hobbyImages:[
        {
            image:KayakImage,
            icon:KayakingIcon,
            text:"Kayaking",

        },


        {
            image:CampingImage,
            icon:LocalFireDepartmentIcon,
            text:'Camping'
        },


        {
            image:CreativeWorks,
            icon:PaletteIcon,
            text:'Creative Work'
        }, 


        {
            image:PetProjects,
            icon:DesignServicesIcon,
            text:'Pet Projects'
        }




    ]
};



export const ContactType = {
    email:'email',
    phoneNumber:'phoneNum',
    linkedIn:'linkinLink'
}