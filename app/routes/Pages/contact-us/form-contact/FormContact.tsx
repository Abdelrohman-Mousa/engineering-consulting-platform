import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./formContact.scss";
import {useTranslation} from "react-i18next";

export default function FormContact({ formData, handleChange }: any) {
    const { t } = useTranslation();

    return (
        <Box
            className="form-contact"
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField
                className="name-input"
                id="name"
                value={formData.name}
                onChange={handleChange}
                label={t("contact-us.name")}
                variant="outlined"
            />

            <TextField
                className="email-input"
                id="email"
                value={formData.email}
                onChange={handleChange}
                label={t("contact-us.email")}
                variant="outlined"
            />

            <TextField
                className="phone-input"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                type="number"
                label={t("contact-us.phone")}
                variant="outlined"
            />

            <TextField
                className="subject-input"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                label={t("contact-us.subject")}
                variant="outlined"
            />

            <TextField
                className="message-input"
                id="message"
                value={formData.message}
                onChange={handleChange}
                label={t("contact-us.message")}
                variant="outlined"
                multiline
                rows={4}
            />
        </Box>
    );
}
