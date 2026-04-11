import "./navbar.scss";
import logo from "/assets/icons/logoProjects.png";
import dashboard from "/assets/icons/dashboard.png";
import darkMode from "/assets/icons/dark-mode.svg";
import lightMode from "/assets/icons/light-mode.svg";
import {Link, useLocation} from "react-router";
import LanguagesMenu from "~/routes/components/material-ui/LanguagesMenu";
import {ShinyButton} from "~/components/ui/shiny-button";
import {useState, useEffect} from "react";
import {useTranslation} from "react-i18next";
import SidebarMobile from "~/components/sidebar-mobile/SidebarMobile";


const Navbar = () => {
    const { t } = useTranslation();

    const location = useLocation(); // ← عشان نعرف الصفحة الحالية

    // 1. تعريف حالة الدارك مود (بناءً على تخزين المتصفح السابق)
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        }
    }, []); // مصفوفة فارغة عشان يشتغل مرة واحدة بس عند التحميل

// 2. دي وظيفتها تراقب أي تغيير يحصل لما تضغط على الزرار
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    const links = [
        { path: "/", label: t('navbar.home') },
        { path: "/about", label: t('navbar.about') },
        { path: "/projects", label: t('navbar.projects') },
        { path: "/consultationRequest", label: t('navbar.request') },
        { path: "/contactUs", label: t('navbar.contact')},
    ];

    return (
        <div className="navbar">
           <div className="container-navbar hidden lg:block ">
            <div className="logo-navbar">
               <img src={logo} alt="logo" />
                <div className="logo-text">
                  <h3>{t ("navbar.logo")}</h3>
                </div>
            </div>

            <div className="links-navbar">
                <ul>
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={location.pathname === link.path ? "active" : ""}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="buttons-navbar">
              <Link to="/dashboard">
                <div className="dashboard">
                    <img src={dashboard} alt="dashboard" />
                    <span className="badge">?</span>
                </div>
              </Link>

                <div className="languages">
                   <LanguagesMenu />
                </div>

                <div className="dark-mode" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
                    <img
                        src={isDark ? lightMode : darkMode} // لو دارك اعرض أيقونة الشمس (lightMode) والعكس
                        alt="toggle theme"
                        className="w-6 h-6 object-contain transition-transform duration-300 hover:scale-110"
                    />
                </div>

                <div className="flex items-center gap-0">
                    <Link to="/signIn">
                      <div className="signIn">
                        <ShinyButton>
                           <h3>{t("navbar.signIn")}</h3>
                        </ShinyButton>
                      </div>
                    </Link>
                  <SidebarMobile />
                </div>
            </div>
           </div>
        </div>
    )
}
export default Navbar
