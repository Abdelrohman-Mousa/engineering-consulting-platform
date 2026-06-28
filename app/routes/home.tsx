import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        {
            title:
                "Engineering Consultancy UAE | Architecture, Construction & Project Management",
        },
        {
            name: "description",
            content:
                "Leading engineering consultancy in the UAE providing architectural design, structural engineering, project management, construction supervision, and online engineering consultation services.",
        },
        {
            name: "keywords",
            content:
                "engineering consultancy UAE, architecture UAE, construction company UAE, structural engineering, project management, engineering consultation, building design, engineering consultants, engineering services, civil engineering",
        },
        {
            name: "robots",
            content: "index, follow",
        },

        // Open Graph
        {
            property: "og:title",
            content:
                "Engineering Consultancy UAE | Architecture & Construction Solutions",
        },
        {
            property: "og:description",
            content:
                "Professional engineering consultancy delivering architecture, construction, structural engineering, and project management services across the UAE.",
        },
        {
            property: "og:type",
            content: "website",
        },
        {
            property: "og:url",
            content: "https://engineering-consulting-platform.vercel.app/",
        },
        {
            property: "og:image",
            content:
                "https://engineering-consulting-platform.vercel.app/og-image.jpg",
        },
        {
            property: "og:image:width",
            content: "1200",
        },
        {
            property: "og:image:height",
            content: "630",
        },
        {
            property: "og:image:alt",
            content: "Advance Engineering Consultancy",
        },
        {
            property: "og:site_name",
            content: "Advance Engineering Consultancy",
        },
        {
            property: "og:locale",
            content: "en_US",
        },

        // Twitter
        {
            name: "twitter:card",
            content: "summary_large_image",
        },
        {
            name: "twitter:title",
            content:
                "Engineering Consultancy UAE | Architecture & Construction",
        },
        {
            name: "twitter:description",
            content:
                "Professional engineering consultancy and construction services in the UAE.",
        },
        {
            name: "twitter:image",
            content:
                "https://engineering-consulting-platform.vercel.app/og-image.jpg",
        },
        {
            name: "twitter:image:alt",
            content: "Advance Engineering Consultancy",
        },
    ];
}

export function links() {
    return [
        {
            rel: "canonical",
            href: "https://engineering-consulting-platform.vercel.app/",
        },
    ];
}

import HeroSection from "~/routes/Pages/hero-section/HeroSection";
import ConsultingOnline from "~/routes/Pages/consultation-online/ConsultingOnline";
import WhoWe from "~/routes/components/whoWeAre/WhoWe";
import TeamSection from "~/routes/components/teamSection/TeamSection";
import ClientFeedback from "~/routes/components/clientFeeedback/ClientFeedback";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <ConsultingOnline />
            <WhoWe />
            <TeamSection />
            <ClientFeedback />
        </div>
    );
};

export default Home;