import "./teamSection.scss";
import {ShinyButton} from "~/components/ui/shiny-button";
import {NumberTicker} from "~/components/ui/number-ticker";
import team from "/assets/images/team.jpg";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {Link} from "react-router";


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


const TeamSection = () => {
    const { t } = useTranslation();

    return (
        <div className="teamSection">
            <div className="hero-bg-lines">
                <svg viewBox="0 0 1000 600" preserveAspectRatio="none">
                    <path d="M0 100 Q 300 200 600 100 T 1000 150" />
                    <path d="M0 200 Q 300 300 600 200 T 1000 250" />
                    <path d="M0 300 Q 300 400 600 300 T 1000 350" />
                </svg>
            </div>
            <motion.div
                className="teamSection-left"
                variants={listVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h1>{t("Team.title-1")}</h1>
                <p>{t("Team.desc-1")}</p>
                <div className="teamSection-counter">
                    <div className="teamSection-export">
                        <p> <NumberTicker value={30} />+ </p>
                        <h2>{t("Team.client-1")}</h2>
                    </div>
                    <div className="teamSection-export">
                        <p> <NumberTicker value={3000} />+ </p>
                        <h2>{t("Team.client-2")}</h2>
                    </div>
                </div>
                <div className="teamSection-btn">
                    <Link to="/consultationRequest">
                      <ShinyButton>
                         <h3 className="teamSection-button">{t("Team.btn-1")}</h3>
                      </ShinyButton>
                    </Link>
                    <Link to="/contactUs">
                      <ShinyButton>
                          <h3 className="teamSection-button">{t("Team.btn-2")}</h3>
                      </ShinyButton>
                    </Link>
                </div>
            </motion.div>

            <motion.div
                className="teamSection-center"
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
            >
                <img src={team} alt="team" />
            </motion.div>

            <motion.div
                className="teamSection-reight"
                variants={listVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h1>{t("Team.title-2")}</h1>
                <p>{t("Team.big-desc")}</p>
            </motion.div>
        </div>
    )
}
export default TeamSection
