import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './formInput.scss';
import {useTranslation} from "react-i18next";

type Props = {
    setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function NameEmailForm({ setFormData }: Props) {
    const { t } = useTranslation();

    return (
        <Box
            component="form"
            className="name-email-form"
            noValidate
            autoComplete="off"
        >
            <TextField
                id="name"
                label={t("request.name")}
                variant="outlined"
                className="name-input"
                onChange={(e) =>
                    setFormData((prev: any) => ({
                        ...prev,
                        name: e.target.value,
                    }))
                }
            />

            <TextField
                id="email"
                label={t("request.email")}
                variant="outlined"
                className="email-input"
                onChange={(e) =>
                    setFormData((prev: any) => ({
                        ...prev,
                        email: e.target.value,
                    }))
                }
            />
        </Box>
    );
}
