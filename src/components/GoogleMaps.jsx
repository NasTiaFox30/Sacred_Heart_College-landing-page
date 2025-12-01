import '../styles/GoogleMaps.css'

// Info
import { schoolInfo } from '../data/schoolInfo'

const GoogleMaps = () => {
  return (
    <section id="map" className="map-section">
      <div className="container">
        <h2 className="section-title">Find Us</h2>
        <p className="section-subtitle">Visit our {schoolInfo.typeofSchool} by your own!</p>
      </div>
      
      <div className="map-container">
        <iframe
          src={schoolInfo.GoogleMapsEmbedLink}
          width="100%"
          height="500"
          style={{border: 0} }
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location"
        ></iframe>
       </div>
    </section>
  )
}

export default GoogleMaps