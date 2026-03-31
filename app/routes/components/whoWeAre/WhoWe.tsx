import "./whoWe.scss";
import {ShinyButton} from "~/components/ui/shiny-button";
import imgOne from "/assets/images/who-1.jpg";
import people1 from "/assets/images/people-1.jpg";
import people2 from "/assets/images/people-2.jpg";
import people3 from "/assets/images/people-3.jpg";
import imgThree from "/assets/images/who-3.jpg";
import HalfRating from "~/routes/components/material-ui/HalfRating";

const WhoWe = () => {
    return (
        <div className="who-we">
            <div className="left-who">
               <div className="who-we-are">
                   <h1>WHO WE ARE:</h1>
                   <p>
                       We are an engineering consultancy firm specialized in providing innovative
                       and comprehensive solutions in architectural, structural, electrical, and mechanical design.
                       Our goal is to transform our clients’ ideas into real projects that combine quality, precision,
                       and professionalism.
                   </p>
               </div>

                <div className="who-we-are what-we-do">
                    <h1>WHAT WE DO:</h1>
                    <p>
                        We offer our services starting from preparing drawings and designs,
                        through project supervision and management, and up to legal consultations and licensing.
                        Our team of engineers and experts works with a high level of experience to ensure the best results at every stage of the project.
                    </p>
                </div>
                    <ShinyButton style={{width: "fit-content"}}>
                <div className="who-we-btn">

                    <h3>Learn More About Us</h3>
                    <div className="arrow-who">
                        <img src="/assets/icons/right-arrow.png" alt="arrow" />
                    </div>
                </div>
                    </ShinyButton>
            </div>

            <div className="right-who">
                <div className="two-img">
                    <div className="img-1">
                        <img src={imgOne} alt="img-1" />
                    </div>
                    <div className="reviews">
                        <div className="img-people">
                            <img src={people1} alt="people-1" />
                            <img src={people2} alt="people-2" />
                            <img src={people3} alt="people-3" />
                            <HalfRating />
                        </div>
                        <div>
                            <p>50+ Positive Reviews We Achieved.</p>
                        </div>
                    </div>
                </div>

                <div className="oneImg">
                    <img src={imgThree} alt="img-3" />
                </div>
            </div>
        </div>
    )
}
export default WhoWe
