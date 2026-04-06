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
                <h1>ADVANCE</h1>
            </div>

            <div className="signIn-form">
                <div className="signIn-content">
                    <div className="image">
                        <img src={signIn} alt="signin"/>
                    </div>

                    <div className="text">
                        <h1>Sign in with email</h1>
                        <p>Make a new doc to bring your words, data, and teams together. For free.</p>
                    </div>

                    <form className="signIn-form-content">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">
                            Sign in
                        </button>
                    </form>

                    <div className="divider">
                        <span>---------  Or sign in with --------- </span>
                    </div>

                    <div className="signIn-social-media">
                        <button className="signIn-google">
                            <img src={google} alt="google" />
                            <span>Sign in with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn
