import '../../styles/Information.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk, FaBusinessTime  } from "react-icons/fa";

// Info
import { schoolInfo } from '../../data/schoolInfo'

const Information = () => {
  return (        
    <div className="contact-info">
        <h4>Contact Information</h4>
        <div className="contact-item">
            <i><FaMapMarkerAlt /></i>
            <div>
            <strong>Address:</strong><br />
                {schoolInfo.contacts.address}
            </div>
        </div>
        <div className="contact-item">
            <i><FaPhoneAlt /></i>
            <div>
            <strong>Phone:</strong><br />
                Main: {schoolInfo.contacts.phoneMain}<br/>
                Addition: {schoolInfo.contacts.phoneAdditional}<br />
            </div>
        </div>
        <div className="contact-item">
            <i><FaMailBulk /></i>
            <div>
            <strong>Email:</strong><br />
                {schoolInfo.contacts.email}
            </div>
        </div>
        <div className="contact-item">
            <i><FaBusinessTime /></i>
            <div>
            <strong>Business Hours:</strong><br />
                {schoolInfo.contacts.businessHours.weekdays}<br />
                {schoolInfo.contacts.businessHours.saturday}
            </div>
        </div>
    </div>
  )
}

export default Information