import "./loader.scss";
import { motion } from "framer-motion";
import loader from "/assets/icons/logoProjects.png";
import {useTranslation} from "react-i18next";

const Loader = () => {

    const { t } = useTranslation();

    return (
        <div className="loader">

            <div className="loader-content">

                <motion.img
                    src={loader}
                    alt="Advance Engineering Consultancy"
                    className="logo"
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        y: 30
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1
                    }}
                />

                <motion.h1
                    initial={{
                        opacity: 0,
                        letterSpacing: "0.5rem"
                    }}
                    animate={{
                        opacity: 1,
                        letterSpacing: "0.15rem"
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 1
                    }}
                >
                    {t("navbar.logo")}
                </motion.h1>

                <motion.span
                    className="subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.4
                    }}
                >
                    {t("navbar.start-loader")}
                </motion.span>

                <div className="progress">
                    <motion.div
                        className="progress-line"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: 2,
                            repeat: Infinity
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Loader;
