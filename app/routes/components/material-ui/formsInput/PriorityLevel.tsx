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

export default function PriorityLevel({ value, setFormData }: Props) {
    const { t } = useTranslation();

    const handleChange = (event: SelectChangeEvent) => {
        const selectedValue = event.target.value as string;

        setFormData((prev: any) => ({
            ...prev,
            priority: selectedValue,
        }));
    };

    return (
        <Box className="consultation-type">
            <FormControl fullWidth className="select-input">
                <InputLabel id="priority-label">
                    {t("request.Priority")}
                </InputLabel>

                <Select
                    labelId="priority-label"
                    id="priority"
                    value={value || ""}
                    label="Priority Level"
                    onChange={handleChange}
                >
                    <MenuItem value="low">{t("request.level-1")}</MenuItem>
                    <MenuItem value="medium">{t("request.level-2")}</MenuItem>
                    <MenuItem value="high">{t("request.level-3")}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}