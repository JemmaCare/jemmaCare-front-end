import { CircleUserIcon, LayoutDashboard, RadioReceiver, Theater, User, UserCheckIcon } from "lucide-react"

const K = {
    NAVLINKS: [

        {
            name: "Home",
            path: "/"
        },
        {
            name: "Services",
            path: "/services"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Support Groups",
            path: "/supportform"
        },
        {
            name: "Articles",
            path: "/articles"
        },
        {
            name: "Testimonials",
            path: "/testimonials"
        },
       
    ],
    OVERVIEW: [
        {
            icon: < LayoutDashboard />,
            text: "Overview",
            total: 5,
        },
        {
            icon: <CircleUserIcon />,
            text: "Articles",
            total: 5,
        },
        {
            icon: <Theater />,
            text: "Therapists",
            total: 5,
        },
        {
            icon: <UserCheckIcon />,
            text: "Support",
            total: 5,
        },
        {
            icon: <RadioReceiver />,
            text: "Testimonials",
            total: 5,
        },
        {
            icon: <User />,
            text: "User",
            total: 5,
        },

    ],

    TESTIMONIALS: [
        {
            name: "Mawuena",
            description: "Jemma Care is the greatest tool I have encountered so far",
        },
        {
            name: "Mawuko",
            description: "Jemma Care is the greatest tool I have encountered so far",
        },
        {
            name: "Mawunyo",
            description: "Jemma Care is the greatest tool I have encountered so far",
        },
        
    ],

    SUPPORT: [
        {
            group: 'Group A',
            location: 'Adenta',
            started: 'July 2023',
            description: 'We are a great team on survicors',
        },
        {
            group: 'Group B',
            location: 'Paga',
            started: 'July 2023',
            description: 'We are a great team on survicors',
        },
        {
            group: 'Group C',
            location: 'Kumasi',
            started: 'July 2023',
            description: 'We are a great team on survicors',
        },

    ],

    THERAPISTS: [
        {
            name: 'Esther Agbozo',
            overview: 'Esther, a dedicated medical officer, has spent the last five years immersed in the field of mental health. Her journey began with a strong desire to address the stigma surrounding mental health issues in her community. Through her work in various healthcare settings, Esther has developed a deep understanding of the challenges faced by individuals struggling with mental health conditions',
            profilePicture: 'img',
            institution: 'Weija-Gbawe Municipal',
            experience: '5 years',
            expertise: 'Medical Officer',
            nationality:'Ghanaian',
            phone:'+233547978203',
            gender:'female',

          },
          {
            name: 'Joshua Agbozo',
            overview: 'Esther, a dedicated medical officer, has spent the last five years immersed in the field of mental health. Her journey began with a strong desire to address the stigma surrounding mental health issues in her community. Through her work in various healthcare settings, Esther has developed a deep understanding of the challenges faced by individuals struggling with mental health conditions',
            profilePicture: 'img',
            institution: 'Ridge Hospital',
            experience: '5 years',
            expertise: 'Peer Counsellor',
            nationality:'Ghanaian',
            phone:'+233549615878',
            gender:'male',

          },
         
          
    ],

    ARTICLES: [
        {
            program: 'Esther Agbozo',
            institution: 'Weija-Gbawe Municipal',
            location: 'Accra',
            qualification: 'Certificate',
            publishDate: 'January 2023',
            link: 'www.bighealth.org',
          },
          {
            program: 'Esther Agbozo',
            institution: 'Weija-Gbawe Municipal',
            location: 'Accra',
            qualification: 'Certificate',
            publishDate: 'January 2023',
            link: 'www.bighealth.org',
          },
          {
            program: 'Esther Agbozo',
            institution: 'Weija-Gbawe Municipal',
            location: 'Accra',
            qualification: 'Certificate',
            publishDate: 'January 2023',
            link: 'www.bighealth.org',
          },
    ]
}




export default K