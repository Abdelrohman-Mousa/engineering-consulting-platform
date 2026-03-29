import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    // الصفحة الرئيسية
    index("routes/home.tsx"),

    // باقي الصفحات
    route("about", "routes/Pages/about-us/AboutUs.tsx"),
    route("projects", "routes/Pages/our-projects/OurProjects.tsx"),
    route("consultationRequest", "routes/Pages/consultation-request/ConsultationRequest.tsx"),
    route("contactUs", "routes/Pages/contact-us/ContactUs.tsx"),
    route("signIn", "routes/Pages/sign-in/SignIn.tsx"),


] satisfies RouteConfig;
