import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import type { MenuProps } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
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
            backgroundColor: '#1e293b', // لون خلفية المنيو في الدارك مود
        }),
    },
}));

export default function LanguagesMenu() {
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        // تغيير اتجاه الصفحة فوراً
        document.body.dir = lng === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lng;
        handleClose();
    };

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                // خليت الـ Label يتغير ديناميكياً حسب اللغة الحالية
                style={{
                    backgroundColor: "rgba(184,184,184,0.93)",
                    color: "#000000",
                    padding: "5px 12px",
                    fontSize: "14px",
                    fontWeight:"bold",
                    borderRadius: "8px"
                }}
            >
                {i18n.language === 'ar' ? 'AR' : 'EN'}
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {/* تم دمج الـ onClick في واحدة فقط لكل عنصر */}
                <MenuItem
                    onClick={() => changeLanguage('en')}
                    disableRipple
                    className="flex items-center gap-3 font-medium"
                >
                    <img src="/assets/icons/flag-us.svg" alt="English" className="w-6 h-4 object-cover rounded-sm" />
                    English
                </MenuItem>

                <MenuItem
                    onClick={() => changeLanguage('ar')}
                    disableRipple
                    className="flex items-center gap-3 font-medium"
                >
                    <img src="/assets/icons/flag-ar.svg" alt="Arabic" className="w-6 h-4 object-cover rounded-sm" />
                    العربية
                </MenuItem>
            </StyledMenu>
        </div>
    );
}