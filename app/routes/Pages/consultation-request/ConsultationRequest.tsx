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
import {useState} from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "src/firebase/firebaseConfig";

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

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: "",
        priority: "",
        description: "",
        country: "",
        files: []
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        // ✅ validation بسيط
        if (
            !formData.name ||
            !formData.email ||
            !formData.type ||
            !formData.priority ||
            !formData.description ||
            !formData.country
        ) {
            alert("من فضلك املى كل البيانات");
            return;
        }

        try {
            setLoading(true);

            await addDoc(collection(db, "consultations"), {
                ...formData,
                status: "pending",
                createdAt: serverTimestamp(),
            });

            alert("تم إرسال الطلب بنجاح ✅");

            // 🔄 reset الفورم
            setFormData({
                name: "",
                email: "",
                type: "",
                priority: "",
                description: "",
                country: "",
                files: []
            });

        } catch (error) {
            console.error(error);
            alert("حصل خطأ ❌");
        } finally {
            setLoading(false);
        }
    };

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
                        <NameEmailForm setFormData={setFormData} />
                    </div>
                    <div className="type-level">
                         <ConsultationType setFormData={setFormData}/>
                        <PriorityLevel setFormData={setFormData}/>
                    </div>
                    <div className="description">
                        <Description setFormData={setFormData}/>
                    </div>
                    <div className="dropped-file-country">
                        <DropzoneUI />
                        <CountrySelect setFormData={setFormData}/>
                    </div>

                    <div
                        className="btn-submit"
                        onClick={!loading ? handleSubmit : undefined}
                        style={{ opacity: loading ? 0.5 : 1, pointerEvents: loading ? "none" : "auto" }}
                    >                         <div className="btn-submit-image">
                            <img src={sent} alt="send" />
                         </div>
                        <h3>{loading ? "Loading..." : t("request.btn")}</h3>
                    </div>

                </motion.div>
            </div>

        </div>
    )
}
export default ConsultationRequest
