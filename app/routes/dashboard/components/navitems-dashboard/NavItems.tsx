import "./navitems.scss";
import {Link, NavLink} from "react-router";
import {useAuth} from "../../../../../src/firebase/AuthContext";

const NavItems = ({ handleClick }: { handleClick?: () => void}) => {

    const { user } = useAuth();


    const sidebarItems = [
        {
            id: 1,
            label: "OverView",
            href: "/dashboard",
            end: true,
        },
        {
            id: 2,
            label: "Users",
            href: "/dashboard/users",
        },
        {
            id: 3,
            label: "Contact Messages",
            href: "/dashboard/messages",
        },
        {
            id: 4,
            label: "Consultation Requests",
            href: "/dashboard/consultation",
        }
    ]

    return (
        <section className="nav-items">
            <Link to="/dashboard" className="link-logo">
                <img src="/assets/icons/logoProjects.png" alt="logo" className="w-full rounded-full "/>
            </Link>

            <div className="container-sidebar">
                <nav className="sidebar">
                    {sidebarItems.map((item) => (
                        <NavLink
                            to={item.href}
                            key={item.id}
                            end={item.end}
                            className={({ isActive }) =>
                                `nav-item ${isActive ? "active" : ""}`
                            } onClick={handleClick}>
                            <h1>{item.label}</h1>
                        </NavLink>
                    ))}
                </nav>
            </div>

            <footer className="nav-footer">
                {user.photoURL ? (
                    <img src={user.photoURL} alt="user" />
                ) : (
                    <span>{user.email[0].toUpperCase()}</span>
                )}

                <article>
                    <h2>Admin</h2>
                    <p>{user.email}</p>
                </article>
            </footer>


        </section>
    )
}
export default NavItems
