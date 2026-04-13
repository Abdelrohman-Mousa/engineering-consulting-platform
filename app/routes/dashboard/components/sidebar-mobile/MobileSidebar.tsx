// import { Link } from "react-router";
//
// const MobileSidebar = () => {
//     return (
//         <div className="mobile-sidebar wrapper">
//              <header>
//                  <Link to="/dashboard">
//                      <img
//                          src="/assets/icons/logoProjects.png"
//                           alt="logo"
//                           className="size-[60px] "/>
//                  </Link>
//              </header>
//         </div>
//     )
// }
// export default MobileSidebar


import { Link } from "react-router";
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";
import "./mobile-sidebar.scss";
import NavItems from "~/routes/dashboard/components/navitems-dashboard/NavItems";
// import NavItems from "~/components/sidebar-admin-dashboard/NavItems";

const MobileSidebar = () => {
    let sidebar: SidebarComponent;

    const toggleSidebar = () => {
        sidebar.toggle();
    }

    return (
        <div className="mobile-sidebar">
            <header className="mobile-header">
                <Link to="/dashboard" className="logo-mobile-sidebar">
                    <img
                        src="/assets/icons/logoProjects.png"
                        alt="logo"
                    />
                    <h1>Advance</h1>
                </Link>

                <button onClick={toggleSidebar}>
                    <img
                        src="/assets/icons/menu.png"
                         className="size-8"
                    />
                </button>
            </header>

            <SidebarComponent
                width={270}
                ref={(Sidebar) => sidebar = Sidebar}
                created={() => sidebar.hide()}
                closeOnDocumentClick={true}
                showBackdrop={true}
                type="over"
                className="nav-sidebar-container"
            >
                <NavItems handleClick={toggleSidebar} />
            </SidebarComponent>
        </div>
    )
}
export default MobileSidebar
