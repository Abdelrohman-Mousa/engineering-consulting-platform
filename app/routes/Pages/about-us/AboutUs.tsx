import './aboutUs.scss';
import video from "/assets/video/about-2.mp4";
import office1 from "/assets/images/office.jpg";
import office2 from "/assets/images/office-2.jpg";
import service1 from "/assets/images/service-1.jpg";
import service2 from "/assets/images/service-2.jpg";
import service3 from "/assets/images/service-3.jpg";
import service4 from "/assets/images/servise-4.jpg";
import service5 from "/assets/images/service-5.jpg";
import {NumberTicker} from "~/components/ui/number-ticker";
import {useTranslation} from "react-i18next";

const services = [
    {
        id: 1,
        title: "Architectural Design",
        image: service1,
    },
    {
        id: 2,
        title: "Structural Design",
        image: service2,
    },
    {
        id: 3,
        title: "Interior Design",
        image: service3,
    },
    {
        id: 4,
        title: "Renovation and Redesign",
        image: service4,
    },
    {
        id: 5,
        title: "Supervision of Implementation",
        image: service5,
    }
]

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <div className="about">
            <div className="about-video">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="video-hero-section"
                >
                    <source src={video} type="video/mp4"/>
                </video>
            </div>

            <div className="about-cards">
                <div className="card">
                    <h3><NumberTicker value={20} />+</h3>
                    <p>Years of Experience</p>
                </div>
                <div className="card">
                    <h3><NumberTicker value={3000} />+</h3>
                    <p>Project Completed</p>
                </div>
                <div className="card">
                    <h3><NumberTicker value={30} />+</h3>
                    <p>Expert Engineers</p>
                </div>
                <div className="card">
                    <h3><NumberTicker value={1000} />+</h3>
                    <p>Satisfied Clients</p>
                </div>
            </div>

            <div className="about-text">
                <div className="about-left">
                   <div className="about-left-img-1">
                       <img src={office2} alt="office" />
                   </div>
                    <div className="about-left-img-2">
                       <img src={office1} alt="office" />
                    </div>
                </div>

                <div className="about-right">
                    <h1 className="about-title">About Us:</h1>
                    <div className="about-para">
                        <p>
                            We are a leading Architectural and Engineering Consultancy firm dedicated to delivering innovative, functional, and sustainable design solutions. Based in the UAE, we combine expertise in architecture, engineering, and interior design to create spaces that inspire and perform.
                        </p>
                        <p>
                            Our multidisciplinary team is committed to excellence, working closely with clients to transform ideas into reality through precision, creativity, and attention to detail. From concept to completion, we ensure every project reflects the highest standards of quality, efficiency, and modern design.
                        </p>
                        <p>We believe that great design is not only about aesthetics, but also about creating meaningful experiences that enhance everyday life.</p>
                    </div>
                    <div className="about-Why-Us">
                        <h1 className="about-title">Why Us:</h1>
                        <div className="about-para">
                            <p>We don’t start with what’s easy — we start with what’s right for you.</p>
                            <p>We focus on your vision, lifestyle, and long-term value, delivering designs that combine creativity, functionality, and sustainability.</p>
                            <p>With our integrated approach, we handle everything from design to approvals and execution, ensuring your project is seamless, compliant, and built to the highest standards</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-services">
                <div className="hero-bg-lines">
                    <svg viewBox="0 0 1000 600" preserveAspectRatio="none">
                        <path d="M0 100 Q 300 200 600 100 T 1000 150" />
                        <path d="M0 200 Q 300 300 600 200 T 1000 250" />
                        <path d="M0 300 Q 300 400 600 300 T 1000 350" />
                        <path d="M0 400 Q 300 500 600 400 T 1000 450" />
                    </svg>
                </div>
                <h1 className="services-title">Our Services</h1>

                <div className="about-services-container">
                    {services.map((service, index) => (
                        <div className="about-services-card" key={index}>
                            <div className="image-service">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <h3>{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default AboutUs;