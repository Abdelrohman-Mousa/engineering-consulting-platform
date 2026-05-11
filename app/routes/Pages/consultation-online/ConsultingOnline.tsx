import "./consulting-online.scss";
import Lottie from "lottie-react";
import BuildingConstruction from "/src/animations/BuildingConstruction.json";
import {Link} from "react-router";

const ConsultingOnline = () => {

    const features = [
        {
            id: 1,
            title: "Real-time Updates",
            desc: "Track your consultation status instantly",
            img: "/assets/icons/flame.svg"
        },
        {
            id: 2,
            title: "Professional Engineers",
            desc: "Connect with certified experts in UAE",
            img: "/assets/icons/professional.svg"
        },
        {
            id: 3,
            title: "Secure System",
            desc: "Your data is fully protected",
            img: "/assets/icons/secure.svg"
        },
        {
            id: 4,
            title: "Fast Response",
            desc: "Get answers within minutes.",
            img: "/assets/icons/dialog.svg"
        },
    ];

    return (
        <div className="consultation-online">
          <div className="container-consultation-online">
            <div className="consultation-online-left">
                <div className="title">
                    <h1>Get Expert Engineering Consultation Online in Minutes</h1>
                    <p>Manage your engineering requests through a smart digital platform with real-time updates and professional support from UAE engineers.</p>
                </div>

                <div className="consultation-online-features">
                    {features.map((feature, index) => (
                     <div className="feature-item" key={feature.id}>
                         <div className="icon-title">
                             <img src={feature.img} alt={feature.title}/>
                             <h2>{feature.title}</h2>
                         </div>
                         <p>{feature.desc}</p>
                     </div>
                    ))}
                </div>

                <div className="consultation-online-btn">
                   <Link to="/consultationRequest">
                    <button className="primary-btn">
                        Book Consultation Now
                        <img
                            src="/assets/icons/right-arrow.png"
                            alt="Go to consultation request page"/>
                    </button>
                   </Link>
                </div>
            </div>

              <div className="consultation-online-right">
                  <Lottie
                      animationData={BuildingConstruction}
                      loop={true}
                      className="no-data-search"
                  />
              </div>
          </div>
        </div>
    )
}
export default ConsultingOnline
