import './clientFeedback.scss';
import client1 from "/assets/images/man.png";
import client2 from "/assets/images/woman.png";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import HalfRating from "~/routes/components/material-ui/HalfRating";


const textVariants = {
    initial: {
        x: 0,
        y: -20,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

const ClientFeedback = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="client-feedback">
                <div className="title-feedback">
                    <h2>Client Feedback</h2>
                    <p>We’re proud to see our clients’ satisfaction reflected in their feedback. Their words inspire us to keep delivering excellence in every project.</p>
                </div>

                <motion.div
                    className="feedback-cards"
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="feedback-card">
                        <p>"Collaborating with this engineering team exceeded my expectations. Their precision, creativity, and dedication turned our vision into a remarkable project! I truly appreciate their professionalism and commitment from start to finish."</p>
                        <HalfRating />

                        <div className="client-info">
                            <img src={client2} alt="client-1" />
                            <div>
                                <h4>Sara Ali</h4>
                                <span>Senior Architect</span>
                            </div>
                        </div>
                    </div>

                    <div className="feedback-card">
                        <p>"Working with this team was an outstanding experience. Their professionalism, attention to detail, and innovative approach made the entire process smooth and successful. I highly recommend them for anyone looking for reliable and creative engineering solutions."</p>
                        <HalfRating />

                        <div className="client-info">
                            <img src={client1} alt="client-2" />
                            <div>
                                <h4>Abdelrohman Marei</h4>
                                <span>Project Owner</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default ClientFeedback