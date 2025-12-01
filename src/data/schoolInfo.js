// IMPORT IMAGES
import mainPhoto from "../assets/images/photos/example1.jpg";

import slide1 from "../assets/images/slider1.jpg";
import slide2 from "../assets/images/slider2.jpg";
import slide3 from "../assets/images/slider3.jpg";

export const schoolInfo = {
    name: "Mount Carmel High School",
    shortName: "MCHS",
    typeofSchool: "High School",
    logo: "logo.jpg",
    mainImage: mainPhoto, 
    mainVideo: "https://www.youtube.com/embed/kyzTLwwn0NI?si=57hxmRArZEUVSJh_",
    GoogleMapsEmbedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476.7498959691009!2d-89.13529147824399!3d17.072693400694412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5e431efdad6eb3%3A0x83d2ad616b1fbe2f!2sOur%20Lady%20Of%20Mount%20Carmel%20High%20School!5e0!3m2!1suk!2spl!4v1764543808406!5m2!1suk!2spl",
    
    about: {
        welcomeText: "where we are committed to providing rigorous intellectual, spiritual, and physical formation within the Catholic Tradition, nurturing students to their full potential.",
        historyText: "Mount Carmel High School (MCHS) was founded in 1990 to serve the youth of Our Lady of Mount Carmel Parish (OLMC), especially those who are underprivileged. Since its inception, MCHS has been dedicated to instilling Catholic Tradition and fostering the potential of students to become fruitful citizens and active members of the Church.",
        footerText: "MCHS is focused on serving our community by ensuring a supportive environment that promotes academic rigor, spiritual growth, and the development of the whole person."
    },
    contacts: {
        country: "Belize",
        address: "Corner Jose Marti Street & Mount Carmel Lane, Benque Viejo del Carmen Town",
        phoneMain: "(+501) 670 2535",
        phoneAdditional: "(+501) 823 2535",
        email: "secretary@mchs.edu.bz",
        businessHours: {
            weekdays: "Mon-Fri: 8:00 AM - 4:00 PM",
            // saturday: "Saturday: 10:00 AM - 12:00 AM"
        }
    },
    socials: {
        facebook: "https://www.facebook.com/mountcarmelrecruitment16/",
        instagram: "",
        linkedin: "",
        youtube: "",
    },

    heroSlider: [
        {
            title: "INTELLECTUAL, SPIRITUAL, PHYSICAL",
            subtitle: "Providing rigorous formation within the Catholic Tradition to nurture every student's potential.",
            buttonText: "View Our Campus",
            buttonLink: "#gallery",
            image: slide1
        },
        {
            title: "SERVING OUR COMMUNITY",
            subtitle: "Dedicated to supporting the youth of OLMC Parish, especially the underprivileged, since 1990.",
            buttonText: "Our History",
            buttonLink: "#about",
            image: slide2
        },
        {
            title: "FUTURE CITIZENS AND CHURCH MEMBERS",
            subtitle: "Preparing students to lead fruitful lives and actively contribute to both society and the Church.",
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