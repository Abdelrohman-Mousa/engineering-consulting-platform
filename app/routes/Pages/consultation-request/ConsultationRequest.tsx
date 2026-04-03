import "./consultationRequest.scss";
import EnterpriseStars from "~/components/EnterpriseStars";
import NameEmailForm from "~/routes/components/material-ui/formsInput/NameEmailForm";
import ConsultationType from "~/routes/components/material-ui/formsInput/ConsultationType";
import PriorityLevel from "~/routes/components/material-ui/formsInput/PriorityLevel";
import Description from "~/routes/components/material-ui/formsInput/Description";
import DropzoneUI from "~/routes/components/material-ui/formsInput/DropzoneUI";
import CountrySelect from "~/routes/components/material-ui/formsInput/CountrySelect";
import sent from "/assets/icons/sent.svg";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

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


const ConsultationRequest = () => {
    const { t } = useTranslation();

    return (
        <div className="consultationRequest">
            <div className="consultationRequest-head">
                <EnterpriseStars />
                <h1>{t("request.title")}</h1>
                <p>{t("request.pra")}</p>
            </div>

            <div className="request-form">
                <motion.div
                    className="form-container"
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="Name-Email">
                        <NameEmailForm />
                    </div>
                    <div className="type-level">
                         <ConsultationType />
                        <PriorityLevel />
                    </div>
                    <div className="description">
                        <Description />
                    </div>
                    <div className="dropped-file-country">
                        <DropzoneUI />
                        <CountrySelect />
                    </div>

                    <div className="btn-submit">
                         <div className="btn-submit-image">
                            <img src={sent} alt="send" />
                         </div>
                        <h3>{t("request.btn")}</h3>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}
export default ConsultationRequest
