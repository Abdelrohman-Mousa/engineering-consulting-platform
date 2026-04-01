import "./heroSection.scss";
import arrow from "/assets/icons/right-arrow.png";
import video from "/assets/video/video-build.mp4"
import {ShinyButton} from "~/components/ui/shiny-button";
import {Link} from "react-router";
import Marquee from "~/components/marquee/Marquee";
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


const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <div className="hero-section">
            <div className="hero-bg-lines">
                <svg viewBox="0 0 1000 600" preserveAspectRatio="none">
                    <path d="M0 100 Q 300 200 600 100 T 1000 150" />
                    <path d="M0 200 Q 300 300 600 200 T 1000 250" />
                    <path d="M0 300 Q 300 400 600 300 T 1000 350" />
                </svg>
            </div>
           <div className="container-hero-section">
               <motion.div
                   className="hero-section-left"
                   variants={listVariants}
                   initial="initial"
                   whileInView="animate"
                   viewport={{ once: true, amount: 0.3 }}
               >
                   <motion.div
                       className="hero-section-logo"
                       variants={textVariants}
                       initial="initial"
                       whileInView="animate"
                       viewport={{ once: true, amount: 0.3 }}
                   >
                       <img src="/assets/icons/logoProjects.png" alt="logo" className="logo-hero-section"/>
                       <h2>{t("navbar.logo")}</h2>
                       <h3>{t("HeroSection.title")}</h3>
                       <h5>-----{t("HeroSection.since")}-----</h5>
                   </motion.div>
                   <div className="hero-section-text">
                       <div className="title-hero-section">
                         <h2>{t("HeroSection.text-1")}</h2>
                         <h1>{t("HeroSection.text-2")}</h1>
                         <h2>{t("HeroSection.text-3")}</h2>
                       </div>
                       <div className="description-hero-section">
                           <p>{t("HeroSection.para")}</p>
                       </div>
                       <Link to="/contactUs">
                           <ShinyButton>
                             <div className="buttons-hero-section">
                                 <h3>{t("HeroSection.btn")}</h3>
                                 <div className="arrow-hero-section">
                                     <img src={arrow} alt="arrow" />
                                 </div>
                             </div>
                           </ShinyButton>
                       </Link>
                   </div>
               </motion.div>

               <motion.div
                   className="hero-section-right"
                   variants={textVariants}
                   initial="initial"
                   whileInView="animate"
                   viewport={{ once: true, amount: 0.3 }}
               >
                   <video
                       autoPlay
                       loop
                       muted
                       playsInline
                       className="video-hero-section"
                   >
                       <source src={video} type="video/mp4"/>
                   </video>

                   <div className="description">
                       <h3>{t("HeroSection.desc")}</h3>
                       <hr style={{height: "2px", backgroundColor: "rgba(7,7,7,0.11)", margin: "5px 0"}}/>
                       <h4 className="happy-client">
                           <div>
                               <span>10K</span> {t("HeroSection.client")}
                           </div>
                           <p>{t("HeroSection.dream")}</p>
                       </h4>
                   </div>
               </motion.div>
           </div>
            <div className="hero-section-Marquee">
                <Marquee />
            </div>
        </div>
    )
}
export default HeroSection

