import NPicon from "./assets/NP_Logo.png"
import SSTicon from "./assets/SST_logo.png"
import Railtech1 from "./assets/Railtech1.jpg"
import Railtech2 from "./assets/Railtech2.jpg"
import Railtech3 from "./assets/Railtech3.png"

const data = { 
    navItems:["Education","Projects", "Competitions", "About me"],
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
            longdescription:"This was my first time using tailwind css and react native to create a responsive portfolio website. I used tailwind css to create a responsive layout and react native to create a mobile app version of the website. I also used react router to create a single page application. Creating this project allowed me to familiarise more with CSS stylings and understand more about react native and web development as a whole, such as good practices to take note of when creating a website.",
            link:"www.goooogle.com",
            images:[SSTicon,NPicon],
            tags:["Web Development" ,"Projects", "React", "Tailwind CSS"],

        },
        {
            index:1,
            title:"Railtech Grand Innovation Challenge Top 5",
            shortdescription:"Created an indoor positioning system using trilateration and RSSI to locate users in the underground tracks to ensure their safety while doing maintenance work ",
            longdescription: "The challenge we aim to address is the real-time monitoring of workers' movement on rail tracks to ensure their accountability and safety. The current system faces several key challenges: the Operations Control Centre (OCC) lacks real-time visibility of work parties, making it difficult to verify if workers are in the correct work zones after booking in. Additionally, there is heavy reliance on the Person in Charge (PIC) to manually track up to 20 workers, increasing the risk of human error, especially in recording the number of  personnel entering and exiting the work zone. To address these challenges, our solution is an Android app that utilises Received Signal Strength Indicator (RSSI) to estimate the distance from an Access Point (AP), followed by trilateration between three APs with known coordinates to determine the precise location of workers on the tracks. The Extended Kalman Filter is then planned to be applied to reduce noise and improve accuracy, achieving a location accuracy of up to 5 metres. The PIC would be able to visualise the workers' positions on a map, updating their coordinates approximately every 32 seconds. This solution enhances the PIC's ability to monitor workers remotely from a centralised screen, reducing the dependency on manual oversight. Additionally, the system streamlines the check-in and check-out process using QR codes, further improving efficiency and reducing the potential for human errors.",
            link:"https://github.com/AloneTotally/Railtech-server",
            images:[Railtech1,Railtech3,Railtech2],
            tags:["Competitions","Engineering","Web Development", "Projects","Kotlin","Research"],
        },
        {
            index:2,
            title:"Portfolio Website",
            shortdescription:"My first web development project using tailwind css and react native to create a responsive portfolio website",
            longdescription:"This was my first time using tailwind css and react native to create a responsive portfolio website. I used tailwind css to create a responsive layout and react native to create a mobile app version of the website. I also used react router to create a single page application. Creating this project allowed me to familiarise more with CSS stylings and understand more about react native and web development as a whole, such as good practices to take note of when creating a website.",
            link:"www.goooogle.com",
            images:[SSTicon,NPicon],
            tags:["Web Development", "React", "Tailwind CSS","Projects"],

        },
        {
            index:3,
            title:"Railtech Grand Innovation Challenge Top 5",
            shortdescription:"Created an indoor positioning system using trilateration and RSSI to locate users in the underground tracks to ensure their safety while doing maintenance work ",
            longdescription:"Wor ",
            link:"www.google.com",
            images:[Railtech1],
            tags:["Competitions"]
        },
        
        
        
    ]
    

}

export default data