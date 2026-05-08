import React from "react";
import {useTranslation} from "react-i18next";

interface Message {
    name: string;
    email: string;
    subject: string;
    message: string;
    date?: string;
    status?: string;
}
interface ActionTemplateProps {
    rowData: Message;
    onView: (rowData: Message) => void;
}

const ActionTemplate: React.FC<ActionTemplateProps> = ({ rowData, onView }) => {
    const { t } = useTranslation();

    return (
        <div className="action-template">
            <button
                type="button"
                className="action-btn"
                onClick={() => {onView(rowData)}}
            >
                {t("dashboard.ViewDetails")}
            </button>
        </div>
    )
}
export default ActionTemplate