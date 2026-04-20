import { Outlet } from "react-router";
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";
import NavItems from "~/routes/dashboard/components/navitems-dashboard/NavItems";
import MobileSidebar from "~/routes/dashboard/components/sidebar-mobile/MobileSidebar";
import {useTranslation} from "react-i18next";

const Index = () => {

    const { i18n } = useTranslation();

    // التحقق مما إذا كانت اللغة الحالية هي العربية
    const isRtl = i18n.language === 'ar';

    return (
        <div className="admin-layout" dir={isRtl ? "rtl" : "ltr"}>

            <MobileSidebar />

            <div className="flex">
                <aside className=" w-full max-w-[290px] hidden lg:block  ">
                    <SidebarComponent
                        width={290}
                        enableGestures={false}
                        enableRtl={isRtl} // تفعيل الاتجاه من اليمين لليسار برمجياً
                        position={isRtl ? "Right" : "Left"} // تحديد جهة الظهور
                    >
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
