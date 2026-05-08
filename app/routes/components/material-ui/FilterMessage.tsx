import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import type { MenuProps } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useTranslation} from "react-i18next";
import i18n from "i18next";

const isArabic = i18n.language === "ar";

const StyledMenu = styled((props: MenuProps) => (

    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: isArabic ? 'left' : 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: isArabic ? 'left' : 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: 'rgb(55, 65, 81)',
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
                ...theme.applyStyles('dark', {
                    color: 'inherit',
                }),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
        ...theme.applyStyles('dark', {
            color: theme.palette.grey[300],
        }),
    },
}));

type Props = {
    setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
};

export default function FilterMessage({ setStatusFilter }: Props) {
    const { t } = useTranslation();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="button-message-filter">
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                className="btn-message-filter"
                sx={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                }}
            >
                {t("dashboard.FilterMessages")}
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                slotProps={{
                    list: {
                        'aria-labelledby': 'demo-customized-button',
                    },
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => {
                        setStatusFilter("all");
                        handleClose();
                    }}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 1,
                    }}
                    disableRipple
                >
                    {t("dashboard.AllMessages")}
                    <div className="dots" style={{backgroundColor: "#4CAF50", right: "2px"}}/>
                    <div className="dots" style={{backgroundColor: "#026bef", right: "10px"}}/>
                    <div className="dots" style={{backgroundColor: "#404040", right: "20px"}}/>
                </MenuItem>

                <Divider sx={{ my: 0.5 }} />

                <MenuItem
                    onClick={() => {
                        setStatusFilter("new");
                        handleClose();
                    }}
                    disableRipple
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    {t("dashboard.New")}
                    <div className="dots" style={{backgroundColor: "#4CAF50"}}/>
                </MenuItem>

                <Divider sx={{ my: 0.5 }} />

                <MenuItem
                    onClick={() => {
                        setStatusFilter("read");
                        handleClose();
                    }}
                    disableRipple
                >
                    {t("dashboard.Read")}
                    <div className="dots" style={{backgroundColor: "#026bef"}}/>
                </MenuItem>

                <Divider sx={{ my: 0.5 }} />

                <MenuItem
                    onClick={() => {
                        setStatusFilter("closed");
                        handleClose();
                    }}
                    disableRipple
                >
                    {t("dashboard.Closed")}
                    <div className="dots" style={{backgroundColor: "#404040"}}/>
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
