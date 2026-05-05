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

export default function ConsultationType({ value, setFormData }: Props) {
    const { t } = useTranslation();

    const handleChange = (event: SelectChangeEvent) => {
        const selectedValue = event.target.value as string;

        setFormData((prev: any) => ({
            ...prev,
            type: selectedValue,
        }));
    };

    return (
        <Box className="consultation-type">
            <FormControl fullWidth className="select-input">
                <InputLabel id="consultation-type-label">
                    {t("request.Consultation")}
                </InputLabel>

                <Select
                    labelId="consultation-type-label"
                    id="consultation-type"
                    value={value || ""}
                    label="Consultation Type"
                    onChange={handleChange}
                >
                    <MenuItem value="Architectural Design">{t("request.type-1")}</MenuItem>
                    <MenuItem value="Structural Design">{t("request.type-2")}</MenuItem>
                    <MenuItem value="Interior Design">{t("request.type-3")}</MenuItem>
                    <MenuItem value="Renovation and Redesign">{t("request.type-4")}</MenuItem>
                    <MenuItem value="Supervision of Implementation">{t("request.type-5")}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}