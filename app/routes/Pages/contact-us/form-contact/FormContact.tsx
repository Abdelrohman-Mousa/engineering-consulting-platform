import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./formContact.scss";
import {useTranslation} from "react-i18next";

export default function FormContact() {
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
                label="Name"
                variant="outlined"
            />

            <TextField
                className="email-input"
                id="email"
                label="Email Address"
                variant="outlined"
            />

            <TextField
                className="phone-input"
                id="phone"
                label="Phone Number"
                variant="outlined"
            />

            <TextField
                className="subject-input"
                id="subject"
                label="Subject"
                variant="outlined"
            />

            <TextField
                className="message-input"
                id="message"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
            />
        </Box>
    );
}
