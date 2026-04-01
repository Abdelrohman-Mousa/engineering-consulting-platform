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
                    <h2>{t("feedback.title")}</h2>
                    <p>{t("feedback.pra")}</p>
                </div>

                <motion.div
                    className="feedback-cards"
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="feedback-card">
                        <p>{t("feedback.desc-1")}</p>
                        <HalfRating />

                        <div className="client-info">
                            <img src={client2} alt="client-1" />
                            <div>
                                <h4>{t("feedback.name-1")}</h4>
                                <span>{t("feedback.jop-1")}</span>
                            </div>
                        </div>
                    </div>

                    <div className="feedback-card">
                        <p>{t("feedback.desc-2")}</p>
                        <HalfRating />

                        <div className="client-info">
                            <img src={client1} alt="client-2" />
                            <div>
                                <h4>{t("feedback.name-2")}</h4>
                                <span>{t("feedback.jop-2")}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default ClientFeedback