export function meta() {
    const url =
        "https://engineering-consulting-platform.vercel.app/consultation-request";

    const image =
        "https://engineering-consulting-platform.vercel.app/og-image.jpg";

    return [
        {
            title:
                "Request Engineering Consultation | Advance Engineering Consultancy UAE",
        },
        {
            name: "description",
            content:
                "Submit your engineering consultation request online. Get professional architectural, structural engineering, and project management support from experienced engineers across the UAE.",
        },
        {
            name: "keywords",
            content:
                "engineering consultation UAE, consultation request, engineering services UAE, architecture consultation, structural engineering",
        },
        {
            name: "robots",
            content: "index, follow",
        },

        // Open Graph
        {
            property: "og:title",
            content:
                "Request Engineering Consultation | Advance Engineering Consultancy",
        },
        {
            property: "og:description",
            content:
                "Submit your engineering consultation online and receive professional engineering support across the UAE.",
        },
        {
            property: "og:type",
            content: "website",
        },
        {
            property: "og:url",
            content: url,
        },
        {
            property: "og:image",
            content: image,
        },
        {
            property: "og:image:alt",
            content: "Advance Engineering Consultancy",
        },
        {
            property: "og:site_name",
            content: "Advance Engineering Consultancy",
        },
        {
            property: "og:locale",
            content: "en_US",
        },

        // Twitter
        {
            name: "twitter:card",
            content: "summary_large_image",
        },
        {
            name: "twitter:title",
            content:
                "Request Engineering Consultation | Advance Engineering Consultancy",
        },
        {
            name: "twitter:description",
            content:
                "Submit your engineering consultation request online in the UAE.",
        },
        {
            name: "twitter:image",
            content: image,
        },
        {
            name: "twitter:image:alt",
            content: "Advance Engineering Consultancy",
        },
    ];
}

export function links() {
    return [
        {
            rel: "canonical",
            href: "https://engineering-consulting-platform.vercel.app/consultation-request",
        },
    ];
}

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
import PulseLoader from "~/components/loader/PulseLoader";
import toast from "react-hot-toast";


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

    const validateForm = () => {
        if (!formData.name.trim()) {
            toast.error(t("alerts.name"));
            return false;
        }

        if (!formData.email.trim()) {
            toast.error(t("alerts.email"));
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            toast.error(t("alerts.noEmail"));
            return false;
        }

        if (!formData.type) {
            toast.error(t("alerts.type"));
            return false;
        }

        if (!formData.priority) {
            toast.error(t("alerts.priority"));
            return false;
        }

        if (!formData.description.trim()) {
            toast.error(t("alerts.desc"));
            return false;
        }

        if (!formData.country) {
            toast.error(t("alerts.emirate"));
            return false;
        }

        return true;
    };

    const uploadToCloudinary = async (file: File) => {
        const formData = new FormData();

        formData.append("file", file);
        formData.append("upload_preset", "Advance"); // 👈 من Cloudinary

        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dztxccrnl/upload",
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await res.json();
        return data.secure_url; // 👈 ده المهم
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        try {
            setLoading(true);

            let uploadedFiles: string[] = [];

            if (formData.files.length > 0) {
                for (const file of formData.files) {
                    const url = await uploadToCloudinary(file);
                    uploadedFiles.push(url);
                }
            }

            const promise = addDoc(collection(db, "consultations"), {
                ...formData,
                files: uploadedFiles, // 👈 URLs مش Files
                status: "pending",
                createdAt: serverTimestamp(),
            });

            toast.promise(promise, {
                loading: (t("alerts.loading")),
                success: (t("alerts.success")),
                error: (t("alerts.error")),
            });

            await promise;

            setFormData({
                name: "",
                email: "",
                type: "",
                priority: "",
                description: "",
                country: "",
                files: []
            });

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
                        <NameEmailForm
                            setFormData={setFormData}
                            formData={formData}
                        />
                    </div>
                    <div className="type-level">
                        <ConsultationType
                            setFormData={setFormData}
                            value={formData.type}
                        />
                        <PriorityLevel
                            setFormData={setFormData}
                            value={formData.priority}
                        />
                    </div>
                    <div className="description">
                        <Description
                            setFormData={setFormData}
                            formData={formData}
                        />
                    </div>
                    <div className="dropped-file-country">
                        <DropzoneUI
                            key={formData.files.length === 0 ? "empty" : "filled"}
                            files={formData.files}
                            setFormData={setFormData}
                        />

                        <CountrySelect
                            setFormData={setFormData}
                            value={formData.country}
                        />
                    </div>

                    <button
                        className="btn-submit"
                        onClick={!loading ? handleSubmit : undefined}
                        style={{ opacity: loading ? 0.5 : 1, pointerEvents: loading ? "none" : "auto" }}
                    >

                        <div className="btn-submit-image">
                            <img
                                src={sent}
                                alt=""
                                aria-hidden="true"
                            />
                         </div>
                        <span>{loading ? <PulseLoader /> : t("request.btn")}</span>
                    </button>
                </motion.div>
            </div>

        </div>
    )
}
export default ConsultationRequest
