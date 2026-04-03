import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import "./formInput.scss";
import {useTranslation} from "react-i18next";

export default function ConsultationType() {
    const { t } = useTranslation();

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box className="consultation-type">
            <FormControl
                fullWidth
                className="select-input"
            >
                <InputLabel id="demo-simple-select-label">{t("request.Consultation")}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Consultation Type"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>{t("request.type-1")}</MenuItem>
                    <MenuItem value={20}>{t("request.type-2")}</MenuItem>
                    <MenuItem value={30}>{t("request.type-3")}</MenuItem>
                    <MenuItem value={40}>{t("request.type-4")}</MenuItem>
                    <MenuItem value={50}>{t("request.type-5")}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
