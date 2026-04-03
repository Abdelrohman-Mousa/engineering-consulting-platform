import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./formInput.scss";

export default function Description() {
    return (
        <Box
            component="form"
            className="description"
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="Description Project"
                variant="outlined"
                className="description-input"
                multiline
                rows={4}/>
        </Box>
    );
}
