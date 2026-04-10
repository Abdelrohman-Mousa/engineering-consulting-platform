import './footer.scss';
import arrow from "/assets/icons/right-arrow.png";
import phone from "/assets/icons/phone.svg";
import email from "/assets/icons/email.svg";
import location from "/assets/icons/location.svg";
import face from "/assets/icons/facebook.svg";
import insta from "/assets/icons/instagram.svg";
import snap from "/assets/icons/snapchat.svg";
import tiktok from "/assets/icons/tiktok.svg";
import {ShinyButton} from "~/components/ui/shiny-button";
import {Link} from "react-router";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <div className="image">
                        <img src="/assets/icons/logoProjects.png" alt="logo" />
                    </div>
                    <h2 className="pra">{t("footer.pra")}</h2>
                 <Link to="/consultationRequest" style={{width: "fit-content"}}>
                  <ShinyButton style={{width: "fit-content"}}>
                    <div className="btn">
                        <h3>{t("footer.btn")}</h3>
                        <div className="arrow">
                          <img src={arrow} alt="arrow" />
                        </div>
                    </div>
                  </ShinyButton>
                 </Link>
                </div>

                <div className="footer-quick-links">
                    <h1 className="title">{t("footer.links")}</h1>
                        <ul>
                            <Link to="/">
                               <li>{t("footer.link-1")}</li>
                            </Link>
                            <Link to="/about">
                                <li>{t("footer.link-2")}</li>
                            </Link>
                            <Link to="/consultationRequest">
                                <li>{t("footer.link-3")}</li>
                            </Link>
                            <Link to="/projects">
                                <li>{t("footer.link-4")}</li>
                            </Link>
                            <Link to="/contactUs">
                                <li>{t("footer.link-5")}</li>
                            </Link>
                        </ul>
                </div>

                <div className="footer-contact">
                    <h1 className="title">{t("footer.link-5")}</h1>
                    <div className="contact-info">
                        <div className="info">
                            <img src={phone} alt="phone" />
                            <p>+ 050-37 0 27 59</p>
                        </div>
                        <div className="info">
                            <img src={email} alt="email" />
                            <p>advance.consultant@yahoo.com</p>
                        </div>
                        <div className="info">
                            <img src={location} alt="phone" />
                            <p>{t("footer.location")}</p>
                        </div>
                    </div>
                </div>

                <div className="footer-social">
                    <h1 className="title">{t("footer.social")}</h1>
                    <div className="social-icons">
                        <a href="#"
                           target="_blank"
                           rel="noreferrer"
                           className="icon">
                            <img src={face} alt="facebook" />
                            <p>{t("footer.facebook")}</p>
                        </a>

                        <a href="#"
                           target="_blank"
                           rel="noreferrer"
                           className="icon">
                            <img src={insta} alt="instagram" />
                            <p>{t("footer.instagram")}</p>
                        </a>

                        <a href="#"
                           target="_blank"
                           rel="noreferrer"
                           className="icon">
                            <img src={snap} alt="snapchat" />
                            <p>{t("footer.snapchat")}</p>
                        </a>

                        <a href="#"
                           target="_blank"
                           rel="noreferrer"
                           className="icon">
                            <img src={tiktok} alt="TikTok" />
                            <p>{t("footer.tikTok")}</p>
                        </a>

                    </div>
                </div>
            <div className="copyRight">
                <p>
                    © {new Date().getFullYear()} {t("footer.copyRight")}
                </p>
            </div>
            </div>

        </div>
    )
}
export default Footer
