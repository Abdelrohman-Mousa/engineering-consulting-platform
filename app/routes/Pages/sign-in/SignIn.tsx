import "./signIn.scss";
import signIn from "/assets/icons/signIn-icon.png";
import google from "/assets/icons/google.png";
import {useTranslation} from "react-i18next";

const SignIn = () => {
    const { t } = useTranslation();

    return (
        <div className="signInPage">
            <div className="signIn-logo">
                <img src="/assets/icons/logoProjects.png" alt="logo" />
                <h1>{t("navbar.logo")}</h1>
            </div>

            <div className="signIn-form">
                <div className="signIn-content">
                    <div className="image">
                        <img src={signIn} alt="signin"/>
                    </div>

                    <div className="text">
                        <h1>{t("signIn.title")}</h1>
                        <p>{t("signIn.pra")}</p>
                    </div>

                    <form className="signIn-form-content">
                        <input type="email" placeholder={t("signIn.email")} />
                        <input type="password" placeholder={t("signIn.pass")} />
                        <button type="submit">
                            {t("signIn.btn")}
                        </button>
                    </form>

                    <div className="divider">
                        <span>--------- {t("signIn.or")} --------- </span>
                    </div>

                    <div className="signIn-social-media">
                        <button className="signIn-google">
                            <img src={google} alt="google" />
                            <span>{t("signIn.google")}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn
