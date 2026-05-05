import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./formInput.scss";
import {useTranslation} from "react-i18next";
import * as React from "react";

type Props = {
    setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Description({ setFormData }: Props) {
    const { t } = useTranslation();

    return (
        <Box
            component="form"
            className="description"
            noValidate
            autoComplete="off"
        >
            <TextField
                id="description"
                label={t("request.DescriptionProject")}
                variant="outlined"
                className="description-input"
                multiline
                rows={4}
                onChange={(e) =>
                    setFormData((prev: any) => ({
                        ...prev,
                        description: e.target.value,
                    }))
                }
            />
        </Box>
    );
}
