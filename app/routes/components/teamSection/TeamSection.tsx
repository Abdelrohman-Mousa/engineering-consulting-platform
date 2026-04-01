import "./teamSection.scss";
import {ShinyButton} from "~/components/ui/shiny-button";
import {NumberTicker} from "~/components/ui/number-ticker";
import team from "public/assets/images/team.jpg";
import {useTranslation} from "react-i18next";

const TeamSection = () => {
    const { t } = useTranslation();

    return (
        <div className="teamSection">
            <div className="hero-bg-lines">
                <svg viewBox="0 0 1000 600" preserveAspectRatio="none">
                    <path d="M0 100 Q 300 200 600 100 T 1000 150" />
                    <path d="M0 200 Q 300 300 600 200 T 1000 250" />
                    <path d="M0 300 Q 300 400 600 300 T 1000 350" />
                </svg>
            </div>
            <div className="teamSection-left">
                <h1>{t("Team.title-1")}</h1>
                <p>{t("Team.desc-1")}</p>
                <div className="teamSection-counter">
                    <div className="teamSection-export">
                        <p> <NumberTicker value={30} />+ </p>
                        <h2>{t("Team.client-1")}</h2>
                    </div>
                    <div className="teamSection-export">
                        <p> <NumberTicker value={3000} />+ </p>
                        <h2>{t("Team.client-2")}</h2>
                    </div>
                </div>
                <div className="teamSection-btn">
                    <ShinyButton>
                       <h3 className="teamSection-button">{t("Team.btn-1")}</h3>
                    </ShinyButton>
                    <ShinyButton>
                        <h3 className="teamSection-button">{t("Team.btn-2")}</h3>
                    </ShinyButton>
                </div>
            </div>

            <div className="teamSection-center">
                <img src={team} alt="team" />
            </div>

            <div className="teamSection-reight">
                <h1>{t("Team.title-2")}</h1>
                <p>{t("Team.big-desc")}</p>
            </div>
        </div>
    )
}
export default TeamSection
