import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./formInput.scss";
import {useTranslation} from "react-i18next";

export default function Description() {
    const { t } = useTranslation();

    return (
        <Box
            component="form"
            className="description"
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label={t("request.DescriptionProject")}
                variant="outlined"
                className="description-input"
                multiline
                rows={4}/>
        </Box>
    );
}
