import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import "./formInput.scss";
import {useTranslation} from "react-i18next";

type Props = {
    value: string;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function CountrySelect({ value, setFormData }: Props) {
    const { t } = useTranslation();

    const handleChange = (event: SelectChangeEvent) => {
        const selectedValue = event.target.value as string;

        setFormData((prev: any) => ({
            ...prev,
            country: selectedValue,
        }));
    };

    return (
        <Box className="consultation-type">
            <FormControl fullWidth className="select-input">
                <InputLabel id="emirate-select-label">
                    {t("request.SelectEmirate")}
                </InputLabel>

                <Select
                    labelId="emirate-select-label"
                    id="emirate-select"
                    value={value || ""}
                    label="Select Emirate"
                    onChange={handleChange}
                >
                    <MenuItem value="abu_dhabi">{t("request.country-1")}</MenuItem>
                    <MenuItem value="dubai">{t("request.country-2")}</MenuItem>
                    <MenuItem value="sharjah">{t("request.country-3")}</MenuItem>
                    <MenuItem value="ajman">{t("request.country-4")}</MenuItem>
                    <MenuItem value="umm_al_quwain">{t("request.country-5")}</MenuItem>
                    <MenuItem value="ras_al_khaimah">{t("request.country-6")}</MenuItem>
                    <MenuItem value="fujairah">{t("request.country-7")}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}