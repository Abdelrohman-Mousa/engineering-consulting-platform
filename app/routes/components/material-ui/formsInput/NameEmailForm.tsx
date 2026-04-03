import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './formInput.scss';
import {useTranslation} from "react-i18next";

export default function NameEmailForm() {
    const { t } = useTranslation();

    return (
        <Box
            component="form"
            className="name-email-form"
            noValidate
            autoComplete="off"
        >
            <TextField
                id="name"
                label={t("request.name")}
                variant="outlined"
                className="name-input"
            />

            <TextField
                id="email"
                label={t("request.email")}
                variant="outlined"
                className="email-input"
            />
        </Box>
    );
}
