// IMPORT IMAGES
import mainPhoto from "../assets/images/photos/example1.jpg";

import slide1 from "../assets/images/slider1.jpg";
import slide2 from "../assets/images/slider2.jpg";
import slide3 from "../assets/images/slider3.jpg";

export const schoolInfo = {
    name: "Sacred Heart College",
    shortName: "SHC",
    typeofSchool: "College",
    logo: "logo.jpg",
    mainImage: mainPhoto, 
    mainVideo: "",
    GoogleMapsEmbedLink: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4457.464036456899!2d-89.075069!3d17.161738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5e67132da6e9cd%3A0x18407a606f65a1d0!2sSacred%20Heart%20College!5e1!3m2!1sen!2sbz!4v1764598136811!5m2!1sen!2sbz",
    
    about: {
        welcomeText: "where we are dedicated to providing a quality, grant-aided secondary education, owned and guided by the Roman Catholic Diocese of Belize and Belmopan.",
        historyText: "Sacred Heart College (SHC) was founded in 1960 by Monsignor Facundo Castillo. The institution operates as a grant-aided high school, owned and managed by the Roman Catholic Diocese of Belize and Belmopan. In 2007, the school was formally incorporated, and its corporate powers were invested in a Board of Governors.",
        footerText: "The Board of Governors is responsible for determining policies to ensure the efficient and responsible management of the institution, upholding the college's commitment to quality education and service."
    },
    contacts: {
        country: "San Ignacio, Belize",
        address: "Joseph Andrew Drive,PO Box 163, San Ignacio Town",
        phoneMain: "(+501) 824-2102",
        phoneAdditional: "(+501) 671-3325",
        email: "president@shc.edu.bz",
        businessHours: {
            weekdays: "Mon-Fri: 8:00 AM - 12:00 AM / 1:00 PM - 5:00 PM",
            // saturday: "Saturday: 12:00 AM - 4:00 AM"
        }
    },
    socials: {
        facebook: "https://www.facebook.com/p/Sacred-Heart-College-Belize-61552581955974/",
        instagram: "",
        linkedin: "https://ve.linkedin.com/company/sacred-heart-college",
        youtube: "",
    },

heroSlider: [
        {
            title: "A TRADITION OF EXCELLENCE SINCE 1960",
            subtitle: "Founded by Monsignor Facundo Castillo, providing quality Catholic education for over six decades.",
            buttonText: "View Our History",
            buttonLink: "#about",
            image: slide1
        },
        {
            title: "DIOCESAN LEADERSHIP",
            subtitle: "A grant-aided high school managed by the Roman Catholic Diocese of Belize and Belmopan.",
            buttonText: "Learn About Our Management",
            buttonLink: "#gallery",
            image: slide2
        },
        {
            title: "EFFICIENT AND RESPONSIBLE MANAGEMENT",
            subtitle: "Governed by a dedicated Board focused on upholding high standards and ensuring the future of our institution.",
            buttonText: "Admissions",
            buttonLink: "#contact",
            image: slide3
        }
    ],

    teachers: {
        // 'Barrette_Belisle': {
        //     subject: "",
        //     bio: "Principal",
        //     email: "ologh@ologh.edu.bz"
        // },
    },
    galleryCaptions: {
      0: 'Example text',
    },

    stats: [
        { number: 600, label: 'Active Students' },
        { number: 28, label: 'Expert Teachers' },
        { number: 5, label: 'Support Staff' }
    ] ,
};