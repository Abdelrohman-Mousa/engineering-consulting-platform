import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import "./formInput.scss";

export default function CountrySelect() {
    const [emirate, setEmirate] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setEmirate(event.target.value as string);
    };

    return (
        <Box className="consultation-type">
            <FormControl fullWidth className="select-input">
                <InputLabel id="emirate-select-label">Select Emirate</InputLabel>
                <Select
                    labelId="emirate-select-label"
                    id="emirate-select"
                    value={emirate}
                    label="Select Emirate"
                    onChange={handleChange}
                >
                    <MenuItem value="Abu Dhabi">Abu Dhabi</MenuItem>
                    <MenuItem value="Dubai">Dubai</MenuItem>
                    <MenuItem value="Sharjah">Sharjah</MenuItem>
                    <MenuItem value="Ajman">Ajman</MenuItem>
                    <MenuItem value="Umm Al Quwain">Umm Al Quwain</MenuItem>
                    <MenuItem value="Ras Al Khaimah">Ras Al Khaimah</MenuItem>
                    <MenuItem value="Fujairah">Fujairah</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}