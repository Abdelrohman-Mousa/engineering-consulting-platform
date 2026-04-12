import { Outlet } from "react-router";
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";
import NavItems from "~/routes/dashboard/components/navitems-dashboard/NavItems";

const Index = () => {
    return (
        <div className="admin-layout">

            MobileSidebar

            <div className="flex">
                <aside className=" w-full max-w-[290px] hidden lg:block  ">
                    <SidebarComponent width={290} enableGestures={false}>
                        <NavItems />
                    </SidebarComponent>
                </aside>

                <aside className="children">
                    <Outlet />
                </aside>
            </div>
        </div>
    )
}
export default Index
