import "./navbar.scss";
import logo from "/assets/icons/logoProjects.png";
import dashboard from "/assets/icons/dashboard.png";
import darkMode from "/assets/icons/dark-mode.svg";
import lightMode from "/assets/icons/light-mode.svg";
import {Link, useLocation} from "react-router";
import LanguagesMenu from "~/routes/components/material-ui/LanguagesMenu";
import {ShinyButton} from "~/components/ui/shiny-button";
import {useTranslation} from "react-i18next";
import SidebarMobile from "~/components/sidebar-mobile/SidebarMobile";
import {useAuth} from "../../../../src/firebase/AuthContext";
import AccountMenu from "~/routes/components/material-ui/AccountMenu";
import {useDarkMode} from "~/components/useDarkMode";


const Navbar = () => {
    const { t } = useTranslation();

    const { user, role } = useAuth();

    const location = useLocation(); // ← عشان نعرف الصفحة الحالية

    const { isDark, toggleTheme } = useDarkMode();

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
                    {!user ? (
                        <Link to="/signIn">
                            <div className="signIn">
                                <ShinyButton>
                                    <h3>{t("navbar.signIn")}</h3>
                                </ShinyButton>
                            </div>
                        </Link>
                    ): (
                        <div className="user-dropdown">
                            <AccountMenu />
                        </div>
                    )}

                  <SidebarMobile />
                </div>
            </div>
           </div>
        </div>
    )
}
export default Navbar
