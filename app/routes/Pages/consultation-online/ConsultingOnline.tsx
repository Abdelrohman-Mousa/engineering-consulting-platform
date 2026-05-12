import "./consulting-online.scss";
import Lottie from "lottie-react";
import BuildingConstruction from "/src/animations/BuildingConstruction.json";
import {Link} from "react-router";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

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

const listVariants = {
    initial: {
        x: -20,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
            ease: "easeOut",
        },
    },
};

const ConsultingOnline = () => {
    const { t } = useTranslation();

    const features = [
        {
            id: 1,
            title: t("online.title-1"),
            desc: t("online.desc-1"),
            img: "/assets/icons/flame.svg"
        },
        {
            id: 2,
            title: t("online.title-2"),
            desc: t("online.desc-2"),
            img: "/assets/icons/professional.svg"
        },
        {
            id: 3,
            title: t("online.title-3"),
            desc: t("online.desc-3"),
            img: "/assets/icons/secure.svg"
        },
        {
            id: 4,
            title: t("online.title-4"),
            desc: t("online.desc-4"),
            img: "/assets/icons/dialog.svg"
        },
    ];

    return (
        <div className="consultation-online">
          <div className="container-consultation-online">
            <div className="consultation-online-left">
                <motion.div
                    className="title"
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h1>{t("online.address")}</h1>
                    <p>{t("online.pre")}</p>
                </motion.div>

                <motion.div
                    className="consultation-online-features"
                    variants={listVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {features.map((feature, index) => (
                     <div className="feature-item" key={feature.id}>
                         <div className="icon-title">
                             <img src={feature.img} alt={feature.title}/>
                             <h2>{feature.title}</h2>
                         </div>
                         <p>{feature.desc}</p>
                     </div>
                    ))}
                </motion.div>

                <motion.div
                    className="consultation-online-btn"
                    variants={listVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                   <Link to="/consultationRequest">
                    <button className="primary-btn">
                        {t("online.btn")}
                        <img
                            src="/assets/icons/right-arrow.png"
                            alt="Go to consultation request page"/>
                    </button>
                   </Link>
                </motion.div>
            </div>

              <div className="consultation-online-right">
                  <Lottie
                      animationData={BuildingConstruction}
                      loop={true}
                      className="no-data-search"
                  />
              </div>
          </div>
        </div>
    )
}
export default ConsultingOnline
