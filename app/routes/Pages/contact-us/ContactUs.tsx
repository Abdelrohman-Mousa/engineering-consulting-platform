import "./contactUs.scss";
import FormContact from "~/routes/Pages/contact-us/form-contact/FormContact";
import send from "/assets/icons/sent.svg";
import phone from "/assets/icons/phone.svg";
import email from "/assets/icons/email.svg";
import oclock from "/assets/icons/oclock.svg";
import MapComponent from "~/components/MapComponent";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import { db } from "~/../src/firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import PulseLoader from "~/components/loader/PulseLoader";
import toast from "react-hot-toast";

const ContactUs = () => {
    const { t } = useTranslation();

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    //Validate Email
    const isValidEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    //Validate Phone Number
    const isValidPhone = (phone: string) => {
        return /^[0-9]{10,15}$/.test(phone);
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (loading) return;

        // 👇 هنا تحطه
        const cleanedData = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
        };

        const { name, email, phone, subject, message } = cleanedData;

        if (!name || !email || !phone || !subject || !message) {
            toast.error("Please fill all fields");
            return;
        }

        if (!isValidEmail(email)) {
            toast.error("Invalid email");
            return;
        }

        if (!isValidPhone(phone)) {
            toast.error("Invalid phone number");
            return;
        }

        try {
            setLoading(true);

            const promise = addDoc(collection(db, "ContactMessages"), {
                ...cleanedData, // 👈 هنا كمان
                createdAt: serverTimestamp(),
                status: "new",
                isRead: false,
                replied: false,
                source: "contact_page"
            });

            await toast.promise(promise, {
                loading: "Sending message...",
                success: "Message sent successfully ✅",
                error: "Something went wrong ❌",
            });

            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            });

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contactUs">
            <div className="contactUs-head">
                <h5>{t("contact-us.contact")}</h5>
                <h1>{t("contact-us.contact-title")}</h1>
                <p>{t("contact-us.pra")}</p>
            </div>

            <div className="contactUs-container">
                <div className="contactUs-form">
                   <form onSubmit={handleSubmit} >
                       <FormContact
                           formData={formData}
                           handleChange={handleChange}
                       />

                      <button
                          type="submit"
                          className="contact-btn"
                          disabled={loading}
                      >
                          <div className="image">
                              <img src={send} alt="Send Message" />
                          </div>
                          {loading ? <PulseLoader /> : t("contact-us.btn")}
                      </button>
                   </form>
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
                            <p>{t("contact-us.time")}</p>
                        </div>

                        <MapComponent/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs
