import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import "./formInput.scss";

export default function ConsultationType() {
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
                <InputLabel id="demo-simple-select-label">Consultation Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Consultation Type"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Architectural Design</MenuItem>
                    <MenuItem value={20}>Structural Design</MenuItem>
                    <MenuItem value={30}>Interior Design</MenuItem>
                    <MenuItem value={40}>Renovation and Redesign</MenuItem>
                    <MenuItem value={50}>Supervision of Implementation</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
