import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './formInput.scss';

export default function NameEmailForm() {
    return (
        <Box
            component="form"
            className="name-email-form"
            noValidate
            autoComplete="off"
        >
            <TextField
                id="name"
                label="Name"
                variant="outlined"
                className="name-input"
            />

            <TextField
                id="email"
                label="Email"
                variant="outlined"
                className="email-input"
            />
        </Box>
    );
}
