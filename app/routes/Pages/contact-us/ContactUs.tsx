import "./contactUs.scss";
import FormContact from "~/routes/Pages/contact-us/form-contact/FormContact";
import send from "/assets/icons/sent.svg";
import phone from "/assets/icons/phone.svg";
import email from "/assets/icons/email.svg";
import oclock from "/assets/icons/oclock.svg";
import MapComponent from "~/components/MapComponent";

const ContactUs = () => {
    return (
        <div className="contactUs">
            <div className="contactUs-head">
                <h5>Contact us</h5>
                <h1>Get in Touch with Our Team</h1>
                <p>We’re here to answer your inquiries, discuss your project, and help you find the best engineering solutions that meet your needs. Reach out to us, and let’s start creating something remarkable that turns your vision into a tangible reality.</p>
            </div>

            <div className="contactUs-container">
                <div className="contactUs-form">
                    <FormContact />

                    <div className="contact-btn">
                        <div className="image">
                            <img src={send} alt="Send Message" />
                        </div>
                      <h1>Send Message</h1>
                    </div>
                </div>

                <div className="contact-map">
                    <div className="contact-text">
                        <h1>Prefer a Direct Approach?</h1>

                        <div className="contact-phone-icon">
                            <div className="icon-phone">
                                <img src={phone} alt="phone" />
                            </div>
                            <p>+ 050-37 0 27 59</p>
                        </div>
                        <div className="contact-phone-icon">
                            <div className="icon-phone">
                                <img src={email} alt="phone" />
                            </div>
                            <p>advance.consultant@yahoo.com</p>
                        </div>
                        <div className="contact-phone-icon">
                            <div className="icon-phone">
                                <img src={oclock} alt="phone" />
                            </div>
                            <p>Monday to Friday, 9 AM – 6 PM (GMT)</p>
                        </div>

                        <MapComponent/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs
