import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { FaChalkboardTeacher } from "react-icons/fa";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import '../styles/Teachers.css'

// Info
import { schoolInfo } from '../data/schoolInfo'

const Teachers = () => {
  const [isMobile, setIsMobile] = useState(false)

  const images = import.meta.glob('../assets/images/teachers/*.{jpg,jpeg,png}', { eager: true });

  const imageMap = Object.entries(images).reduce((acc, [path, module]) => {
    const fileName = path.split('/').pop(); 
    const key = fileName.replace(/\.[^/.]+$/, "");
    acc[key] = module.default;
    return acc;
  }, {});

  const teachers = Object.entries(schoolInfo.teachers).map(([key, details]) => {
    const formattedName = key.replace(/_/g, ' ');
    const image = imageMap[key]; 

    return {
      image: image || null, 
      name: formattedName,
      subject: details.subject || "",
      bio: details.bio || "Teacher",
      email: details.email || ""
    };
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const swiperParams = {
    modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
    spaceBetween: 50,
    slidesPerView: isMobile ? 1 : 3,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: isMobile ? false : true,
    pagination: {
      clickable: true,
      dynamicBullets: true
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
      slideShadows: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  }

  return (
    <section id="teachers" className="teachers section">
      <div className="container">
        <h2 className="section-title">Meet Our Teachers</h2>
        <p className="section-subtitle">
          Our dedicated faculty members are experienced educators committed to
          student success and lifelong learning.
        </p>
        
        <div className="teachers-slider-container">
          <Swiper {...swiperParams} className="teachers-slider">
            {teachers.map((teacher, index) => {
              const hasImage = !!teacher.image;
              return (
                <SwiperSlide key={index}>
                  <div className={`teacher-card ${!hasImage ? 'no-image-card' : ''}`}>
                    {hasImage ? (
                      <div className="teacher-image">
                        <img src={teacher.image} alt={teacher.name} />
                        <div className="teacher-overlay">
                          <div className="teacher-bio">
                            <p>{teacher.bio}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                        <div className="teacher-image-placeholder">
                            <i><FaChalkboardTeacher/></i>
                        </div>
                    )}
                      
                    <div className="teacher-info">
                      <h3>{teacher.name}</h3>
                      <p className="teacher-subject">{hasImage ? teacher.subject : teacher.bio}</p>
                      <div className="teacher-social">
                        <a href={`mailto:${teacher.email}`} aria-label="Send email">{teacher.email}</a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Teachers