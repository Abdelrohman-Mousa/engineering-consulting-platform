import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import "./formInput.scss";
import {useTranslation} from "react-i18next";

export default function CountrySelect() {
    const { t } = useTranslation();

    const [emirate, setEmirate] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setEmirate(event.target.value as string);
    };

    return (
        <Box className="consultation-type">
            <FormControl fullWidth className="select-input">
                <InputLabel id="emirate-select-label">{t("request.SelectEmirate")}</InputLabel>
                <Select
                    labelId="emirate-select-label"
                    id="emirate-select"
                    value={emirate}
                    label="Select Emirate"
                    onChange={handleChange}
                >
                    <MenuItem value="Abu Dhabi">{t("request.country-1")}</MenuItem>
                    <MenuItem value="Dubai">{t("request.country-2")}</MenuItem>
                    <MenuItem value="Sharjah">{t("request.country-3")}</MenuItem>
                    <MenuItem value="Ajman">{t("request.country-4")}</MenuItem>
                    <MenuItem value="Umm Al Quwain">{t("request.country-5")}</MenuItem>
                    <MenuItem value="Ras Al Khaimah">{t("request.country-6")}</MenuItem>
                    <MenuItem value="Fujairah">{t("request.country-7")}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}