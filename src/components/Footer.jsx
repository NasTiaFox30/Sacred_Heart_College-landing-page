import '../styles/Footer.css'
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

// Info
import { schoolInfo } from '../data/schoolInfo'

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div>
              <h5>{schoolInfo.name}</h5>
              <p>{schoolInfo.about.footerText}</p>
              <div className="social-links">
                {schoolInfo.socials.facebook ? (
                  <a href={schoolInfo.socials.facebook}><i><FaFacebook /></i></a>
                ) : null}
                {schoolInfo.socials.instagram ? (
                  <a href={schoolInfo.socials.instagram}><i><FaInstagram /></i></a>
                ) : null}
                {schoolInfo.socials.linkedin ? (
                  <a href={schoolInfo.socials.linkedin}><i><FaLinkedin /></i></a>
                ) : null}
                {schoolInfo.socials.youtube ? (
                  <a href={schoolInfo.socials.youtube}><i><FaYoutube /></i></a>
                ) : null}
              </div>
            </div>

            <div className='logo-container'>
              <img className='logo-fotter' src={schoolInfo.logo} alt="" />
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>{schoolInfo.name} - {schoolInfo.contacts.country}</p>
            <p id="info_firm">&copy; 2025 Stworzone przez GLP</p>
            {/* Creator: Anastasiia Bzova 2025 */}
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer