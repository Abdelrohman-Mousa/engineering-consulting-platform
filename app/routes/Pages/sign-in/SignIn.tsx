import "./signIn.scss";
import signIn from "/assets/icons/signIn-icon.png";
import google from "/assets/icons/google.png";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {signup} from "../../../../src/firebase/authService";
import {loginWithGoogle} from "../../../../src/firebase/signInWithGoogle";
import {useNavigate} from "react-router";
import toast from "react-hot-toast";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../../../src/firebase/firebaseConfig";
import {Link} from "react-router";

const SignIn = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    // تسجيل الدخول ب الاميل و الباسورد
    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        if (loading) return; // تمنع الضغط المتكرر

        // ✅ حط الـ validation هنا
        if (!email.includes("@")) {
            toast.error("Invalid email");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        setLoading(true);
        const toastId = toast.loading("Creating account..."); // Sending toast

        try {
            await signup(email, password);
            toast.success("Account created successfully ✅", { id: toastId });
            navigate("/"); // الصفحة بعد تسجيل الدخول
        } catch (error: any) {

            switch (error.code) {

                case "auth/user-not-found":
                    toast.error("User not found ❌", { id: toastId });
                    break;

                case "auth/wrong-password":
                    toast.error("Incorrect password ❌", { id: toastId });
                    break;

                case "auth/email-already-in-use":
                    toast.error("Email already exists ❌", { id: toastId });
                    break;

                case "auth/invalid-email":
                    toast.error("Invalid email address ❌", { id: toastId });
                    break;

                case "auth/weak-password":
                    toast.error("Weak password ❌", { id: toastId });
                    break;

                default:
                    toast.error("Something went wrong ❌", { id: toastId });
            }

        } finally {
            setLoading(false);
        }
    };

    const handleGoogle = async () => {

        if (loading) return;

        setLoading(true);

        const toastId = toast.loading("Logging in...");

        try {
            const user = await loginWithGoogle();

            // Redirect حسب الدور (Admin أو User)
            const snap = await getDoc(doc(db, "users", user.uid));
            const role = snap.exists() ? snap.data().role : "user";

            if (role === "admin") {
                toast.success("Logged in successfully (Admin) ✅", { id: toastId });
                navigate("/dashboard");
            } else {
                toast.success("Logged in successfully ✅", { id: toastId });
                navigate("/"); // الصفحة الرئيسية للعملاء
            }
        } catch (error: any) {

            switch (error.code) {

                case "auth/user-not-found":
                    toast.error("User not found ❌", { id: toastId });
                    break;

                case "auth/wrong-password":
                    toast.error("Incorrect password ❌", { id: toastId });
                    break;

                case "auth/email-already-in-use":
                    toast.error("Email already exists ❌", { id: toastId });
                    break;

                case "auth/invalid-email":
                    toast.error("Invalid email address ❌", { id: toastId });
                    break;

                case "auth/weak-password":
                    toast.error("Weak password ❌", { id: toastId });
                    break;

                default:
                    toast.error("Something went wrong ❌", { id: toastId });
            }

        }
        finally {
            setLoading(false);
        }
    };


    return (
        <div className="signInPage">
            <Link to="/">
              <div className="signIn-logo">
                  <img src="/assets/icons/logoProjects.png" alt="logo" />
                  <h1>{t("navbar.logo")}</h1>
              </div>
            </Link>

            <div className="signIn-form">
                <div className="signIn-content">
                    <div className="image">
                        <img src={signIn} alt="signin"/>
                    </div>

                    <div className="text">
                        <h1>{t("signIn.title")}</h1>
                        <p>{t("signIn.pra")}</p>
                    </div>

                    <form
                        className="signIn-form-content"
                        onSubmit={handleSignup}
                    >
                        <input
                            type="email"
                            value={email}
                            placeholder={t("signIn.email")}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            value={password}
                            placeholder={t("signIn.pass")}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : t("signIn.btn")}
                        </button>
                    </form>

                    <div className="divider">
                        <span>--------- {t("signIn.or")} --------- </span>
                    </div>

                    <div className="signIn-social-media">
                        <button
                            className="signIn-google"
                            onClick={handleGoogle}
                            disabled={loading}
                        >
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
