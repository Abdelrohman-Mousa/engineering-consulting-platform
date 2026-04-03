import "./consultationRequest.scss";
import EnterpriseStars from "~/components/EnterpriseStars";
import NameEmailForm from "~/routes/components/material-ui/formsInput/NameEmailForm";
import ConsultationType from "~/routes/components/material-ui/formsInput/ConsultationType";
import PriorityLevel from "~/routes/components/material-ui/formsInput/PriorityLevel";
import Description from "~/routes/components/material-ui/formsInput/Description";
import DropzoneUI from "~/routes/components/material-ui/formsInput/DropzoneUI";
import CountrySelect from "~/routes/components/material-ui/formsInput/CountrySelect";
import sent from "/assets/icons/sent.svg";
import {useTranslation} from "react-i18next";

const ConsultationRequest = () => {
    const { t } = useTranslation();

    return (
        <div className="consultationRequest">
            <div className="consultationRequest-head">
                <EnterpriseStars />
                <h1>{t("request.title")}</h1>
                <p>{t("request.pra")}</p>
            </div>

            <div className="request-form">
                <div className="form-container">
                    <div className="Name-Email">
                        <NameEmailForm />
                    </div>
                    <div className="type-level">
                         <ConsultationType />
                        <PriorityLevel />
                    </div>
                    <div className="description">
                        <Description />
                    </div>
                    <div className="dropped-file-country">
                        <DropzoneUI />
                        <CountrySelect />
                    </div>

                    <div className="btn-submit">
                         <div className="btn-submit-image">
                            <img src={sent} alt="send" />
                         </div>
                        <h3>{t("request.btn")}</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ConsultationRequest
