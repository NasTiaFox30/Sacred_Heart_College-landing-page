import '../styles/About.css'

// Info
import { schoolInfo } from '../data/schoolInfo'

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="about-content">
          
          <div className="about-text">
            <h2>About {schoolInfo.name }</h2>
            <p>Welcome to {schoolInfo.name}, {schoolInfo.about.welcomeText} </p>
          </div>
          <div className="about-image">
            {schoolInfo.mainVideo ? (
              <iframe width="560" height="350" src={schoolInfo.mainVideo} title="Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            ) : (
              <img src={schoolInfo.mainImage} alt="College" />
            )}
          </div>
        </div>
        <div className="about-history">
            <h3>Our History</h3>
            <p>{schoolInfo.about.historyText}</p>
        </div>
      </div>
    </section>
  )
}

export default About