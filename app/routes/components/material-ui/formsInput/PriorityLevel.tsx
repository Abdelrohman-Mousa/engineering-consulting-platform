import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import "./formInput.scss";

export default function PriorityLevel() {
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
                <InputLabel id="demo-simple-select-label">Priority Level</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Priority Level"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Low</MenuItem>
                    <MenuItem value={20}>Medium</MenuItem>
                    <MenuItem value={30}>High</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
