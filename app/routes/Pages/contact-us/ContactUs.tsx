import "./contactUs.scss";
import FormContact from "~/routes/Pages/contact-us/form-contact/FormContact";
import send from "/assets/icons/sent.svg";
import phone from "/assets/icons/phone.svg";
import email from "/assets/icons/email.svg";
import oclock from "/assets/icons/oclock.svg";
import MapComponent from "~/components/MapComponent";
import {useTranslation} from "react-i18next";

const ContactUs = () => {
    const { t } = useTranslation();

    return (
        <div className="contactUs">
            <div className="contactUs-head">
                <h5>{t("contact-us.contact")}</h5>
                <h1>{t("contact-us.contact-title")}</h1>
                <p>{t("contact-us.pra")}</p>
            </div>

            <div className="contactUs-container">
                <div className="contactUs-form">
                    <FormContact />

                    <div className="contact-btn">
                        <div className="image">
                            <img src={send} alt="Send Message" />
                        </div>
                      <h1>{t("contact-us.btn")}</h1>
                    </div>
                </div>

                <div className="contact-map">
                    <div className="contact-text">
                        <h1>{t("contact-us.pra1")}</h1>

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
