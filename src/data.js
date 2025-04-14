import NPicon from "./assets/NP_Logo.png"
import SSTicon from "./assets/SST_logo.png"
import Railtech1 from "./assets/Railtech1.jpg"
import Railtech2 from "./assets/Railtech2.jpg"
import Railtech3 from "./assets/Railtech3.png"
import Achievements from "./Achievements"
import Gdprogawardcert from "./assets/Gdprogawardcert.jpg"
import Railtechcert from "./assets/Railtechcert.jpg"
import Steamunitystage1 from "./assets/Steamunitystage1.jpg"
import Steamunitystage2 from "./assets/Steamunitystage2.jpg"
import olvlcert from "./assets/olvlcert.jpg"
import Progcert from "./assets/Progcert.jpg"
import rapidchemchallcert from "./assets/rapidchemchallcert.jpg"
import Roboroarzcert from "./assets/Roboroarzcert.jpg"
import SST3mcert from "./assets/SST3mcert.jpg"
import AMCcert from "./assets/AMCcert.jpg"
import Sasmocert from "./assets/Sasmocert.jpg"
import whitehackscert from "./assets/whitehackscert.jpg"
import YCEPcert from "./assets/YCEPcert.png"
import Eleccircuit from "./assets/Eleccircuit.jpg"
import Eleccircuitschematics from "./assets/Eleccircuitschematics.png"
import Eleccircuitblock from "./assets/Eleccircuitblock.png"
import ELeccircuitpt2 from "./assets/Eleccircuitpt2.png"
import balloonsatellitecover from "./assets/balloonsatellitecover.png"
import balloonsatellitehardware from "./assets/balloonsatellitehardware.png"
import balloonsatellitehardwarept2 from "./assets/balloonsatellitehardwarept2.png"
import Sjcho2023 from "./assets/Sjcho2023.png"
import Sjcho2022 from "./assets/Sjcho2022.png"
import Astrigue2023 from "./assets/Astrigue2023.png"
import Responsivewebdesign from "./assets/Responsivewebdesign.png"
import bizsafelvl2 from "./assets/BizSAFElvl2.png"
import mailIcon from "./assets/mailwhite.png"
import linkedinIcon from "./assets/linkedinwhite.png"
import githubIcon from "./assets/githubwhite.png"


const data = { 
    navItems:["Education","Competitions","Achievements", "Contact"],
    scroll:["Y2 Engineering Science Student", "Aspiring Engineer", "Loves Web Development","Likes Computers"],
    Educationinfo:[
        {
            id:"1",
            logo:SSTicon,
            school:"School of Science and Technology, Singapore(SST)",
            title:"School of Science and Technology, Singapore(SST)",
            date:"2020-2023",
            Grade:"L1R5: 10(net 8), ELR2B2: 8(net 6)",
            Activities:["Astronomy Club", "Class Chairperson(2023)"],
            Achievements:["MOE good progress award(2022)", "Singapore Junior Chemistry Olympiad(2022 & 2023)","Astrigue(2023)", "Singapore and Asian Math Olympiad(SASMO)(2023)"],
        },
        {
            id:"2",
            logo:NPicon,
            school:"Ngee Ann Polytechnic",
            title:"Diploma in Engineering Science ",
            date:"2023-2027",
            Grade:"cGPA: 4.0",
            Activities:["Engineering Science Academic Club(ESAC) Subcommitee", "Engineering Interest Group(EIG)", "Badminton Club", "Bowling club"],
            Achievements:["LTA Railtech Grand Innovation Challenge(TOP 5)(2024)","Module prize for programming(38PROG)", "Roboroarz(2025)","Whitehacks CTF(2025)", ],
        }
    ],
        
    Projectinfo:[
        {
            index:0,
            title:"Portfolio Website",
            shortdescription:"My first web development project using tailwind css and react native to create a responsive portfolio website",
            popupdescription:"link to Github repo",
            longdescription:"This was my first time using tailwind css and react native to create a responsive portfolio website. I used tailwind css to create a responsive layout and react native to create a mobile app version of the website. I also used react router to create a single page application. Creating this project allowed me to familiarise more with CSS stylings and understand more about react native and web development as a whole, such as good practices to take note of when creating a website.",
            link:"www.goooogle.com",
            images:[SSTicon,NPicon],
            tags:["Web Development" ,"Projects", "React", "Tailwind CSS"],

        },
        {
            index:1,
            title:"Railtech Grand Innovation Challenge Top 5",
            shortdescription:"Created an indoor positioning system using trilateration and RSSI to locate users in the underground tracks to ensure their safety while doing maintenance work ",
            popupdescription:"link to Github repo",
            longdescription: "The challenge we aim to address is the real-time monitoring of workers' movement on rail tracks to ensure their accountability and safety. The current system faces several key challenges: the Operations Control Centre (OCC) lacks real-time visibility of work parties, making it difficult to verify if workers are in the correct work zones after booking in. Additionally, there is heavy reliance on the Person in Charge (PIC) to manually track up to 20 workers, increasing the risk of human error, especially in recording the number of  personnel entering and exiting the work zone. To address these challenges, our solution is an Android app that utilises Received Signal Strength Indicator (RSSI) to estimate the distance from an Access Point (AP), followed by trilateration between three APs with known coordinates to determine the precise location of workers on the tracks. The Extended Kalman Filter is then planned to be applied to reduce noise and improve accuracy, achieving a location accuracy of up to 5 metres. The PIC would be able to visualise the workers' positions on a map, updating their coordinates approximately every 32 seconds. This solution enhances the PIC's ability to monitor workers remotely from a centralised screen, reducing the dependency on manual oversight. Additionally, the system streamlines the check-in and check-out process using QR codes, further improving efficiency and reducing the potential for human errors.",
            link:"https://github.com/AloneTotally/Railtech-server",
            images:[Railtech3],//Railtech1,Railtech2],
            tags:["Competitions","Engineering","Web Development","Kotlin","Research"],
        },
        {
            index:3,
            title:"C Project",
            shortdescription:"Programmed a randomise math quiz using C with data validation",
            popupdescription:"link to Github repo",
            longdescription:"This was my first ever programming project and my first time using C. I used C to create a randomise math quiz that randomises the questions given from a set of questions and the answers such that the answer location would be different and the answer value would always be different. I made use of different libraries such as the <time.h> to record how long the user took to complete the quiz and math.h to do complex math calculations. I also covered pointers in the project, which helped give me a better understanding on how data is being stored in a computer, and how to manipulate the data in a more efficient way. Data validation was implemented to ensure that the user input is valid and to prevent any errors from happening, which would have a error message if there was any error. This project helped me understand more about C and how to use it to create a program that is both efficient and user friendly. In the future I am planning to implement a graphical user interface (GUI) to make the program more user friendly and to make it easier for the user to use the program.",
            link:"https://github.com/Scxr-ch/C-project",
            images:[],
            tags:["Projects", "Programming", "C"],

        },
        {
            index:4,
            title:"Electronics Project",
            shortdescription:"Created a circuit for a probe to alert the chef based on the temperature of the food",
            popupdescription:"link to report",
            longdescription:"A electronics project that spanned across 6months to complete,make used Integrated Circuit(IC) Chips to implement the circuit.I implemented a circuit that would give different types of alerts when the food is at different temperatures, making use of the 555 timer IC astable and monostable configuration to achieve that. I used a series of logic gates and voltage comparators  to implement the circuit logic in order to achieve the desired output.An enhancement was added to add an additional alarm for a higher temperature, and a set of inputs for the user to choose which alarms they want to go off using SR-latches. This project has given me a better understanding about IC chips and their usage in real life scenarios, and how they could be used instead of programmable microcontrollers to achieve the same result. It allowed me to dive deeper into the world of electronics, sparking an interest in microelectronics in me.",
            link:"https://docs.google.com/document/d/1xQiDDQ3iMF-yojAMU6_NNuBuhpT5iTta6CYvc3h2ObQ/edit?usp=sharing",
            images:[Eleccircuit,Eleccircuitschematics,Eleccircuitblock,ELeccircuitpt2],
            tags:["Engineering","Projects","Electronics","Research"],
        },
        {
            index:5,
            title:"Ballon Satellite Programme",
            shortdescription:"built a satellite from scratch to collect data in the air and transmit it back",
            popupdescription:"link to Github repo",
            longdescription:"",
            link:"",
            images:[balloonsatellitecover,balloonsatellitehardware,balloonsatellitehardwarept2],
            tags:["Engineering","Projects","Electronics"],
        },
        
        
        
        
    ],
    achievementFilter:["All","2025","2024", "2023",">2022"],
    Achievements:[
        {
            date:"2024",
            title:"Railtech Grand Innovation Challenge Top 5",
            description:"Top 5 in Railtech Grand Open Innovation Challenge",
            Certificate:[Railtechcert],
            link: "https://idk.com",
        },
        {
            date:"2025",
            title:"Module Prize",
            description:"Awarded for the best performance in a programming module",
            Certificate:[Progcert],
            link: "https://idk.com",
        },
        {
            date:"2025",
            title:"Steamunity Junior Design Innovator(Advanced)",
            description:"Completed a 3week program to create STEAM solutions for the community ",
            Certificate:[Steamunitystage1,Steamunitystage2],
            link: "https://idk.com",
        },
        {
            date:"2025",
            title:"Roboroarz participation",
            description:"Participated in a line tracing robotics competition",
            Certificate:[Roboroarzcert],
        },
        {
            date:"2025",
            title:"Whitehacks CTF participation",
            description:"Participated in a cybersecurity CTF competition",
            Certificate:[whitehackscert],
        },
        {
            date:"2025",
            title:"YCEP CTF participation(top 16)",
            description:"Participated in a cybersecurity CTF competition organised by CSA",
            Certificate:[YCEPcert],
        },
        {
            date:"2024",
            title:"BizSAFE Level 2",
            description:"Completed the BizSAFE Level 2 training",
            Certificate:[bizsafelvl2],
        },
        {
            date:"2023",
            title:"Singapore Junior Chemistry Olympiad 2023",
            description:"Participated in the Singapore Junior Chemistry Olympiad",
            Certificate:[Sjcho2023],
        },
        {
            date:"2023",
            title:"Singapore and Asian Math Olympiad(SASMO)",
            description:"Participated in the Singapore and Asian Math Olympiad(SASMO)",
            Certificate:[Sasmocert],
        },
        {
            date:"2024",
            title:"Responsive Web Design Certification",
            description:"Completed the Responsive Web Design Certification from freeCodeCamp",
            Certificate:[Responsivewebdesign],
        },
        {
            date:"2023",
            title:"Astrigue 2023",
            description:"Participated in the astronomy competition organised by RI",
            Certificate:[Astrigue2023],
        },
        {
            date:"2023",
            title:"Rapid Chem Challenge",
            description:"Participated in a Chemistry quiz competition orgnised by NUS",
            Certificate:[rapidchemchallcert],
        },
        {
            date:"2023",
            title:"Certificate of Proficiency (Austrailian Math Competition)",
            description:"Awarded a certificate of proficiency",
            Certificate:[AMCcert],
        },
        {
            date:"2022",
            title:"Singapore Junior Chemistry Olympiad 2022",
            description:"Participated in the Singapore Junior Chemistry Olympiad",
            Certificate:[Sjcho2022],
        },
        {
            date:"2022",
            title:"MOE Good Progress Award",
            description:"Awarded for top 10% improvement in academic performance",
            Certificate:[Gdprogawardcert],
        },
        {
            date:"2020",
            title:"SST-3M Innoscience Challenge(Top-16)",
            description:"Achieved top 16 for a innovative competition ",
            Certificate:[SST3mcert],
        },

    ],
    contactInfo : [
        {   
            title:"LinkedIn",
            icon:linkedinIcon,
            link:"https://www.linkedin.com/in/isaac--chia",
            description:"www.linkedin.com/in/isaac--chia",
        },
        {
            title:"Github",
            icon:githubIcon,
            link:"https://github.com/Scxr-ch",
            description:"github.com/Scxr-ch",
        },
        {
            title:"Email(school)",
            icon:mailIcon,
            link:"S10266054@connect.np.edu.sg",
            description:"S10266054@connect.np.edu.sg"
        },
        {
            title:"Email(Personal)",
            icon:mailIcon,
            link:'Chia_isaac@yahoo.com',
            description:"Chia_isaac@yahoo.com",
        }

    ],
    

}

export default data