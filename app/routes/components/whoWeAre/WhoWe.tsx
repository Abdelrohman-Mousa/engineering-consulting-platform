import "./whoWe.scss";
import {ShinyButton} from "~/components/ui/shiny-button";
import imgOne from "/assets/images/who-1.jpg";
import people1 from "/assets/images/people-1.jpg";
import people2 from "/assets/images/people-2.jpg";
import people3 from "/assets/images/people-3.jpg";
import imgThree from "/assets/images/who-3.jpg";
import HalfRating from "~/routes/components/material-ui/HalfRating";
import {useTranslation} from "react-i18next";

const WhoWe = () => {
    const { t } = useTranslation();

    return (
        <div className="who-we">
            <div className="left-who">
               <div className="who-we-are">
                   <h1>{t("WhoWe.title-1")}</h1>
                   <p>{t("WhoWe.desc-1")}</p>
               </div>

                <div className="who-we-are what-we-do">
                    <h1>{t("WhoWe.title-2")}</h1>
                    <p>{t("WhoWe.desc-2")}</p>
                </div>
                    <ShinyButton style={{width: "fit-content"}}>
                <div className="who-we-btn">

                    <h3>{t("WhoWe.btn")}</h3>
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
                            <p>{t("WhoWe.star")}</p>
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
