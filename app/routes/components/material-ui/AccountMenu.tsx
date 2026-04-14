import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import {logout} from "../../../../src/firebase/authService";
import {Link, useNavigate} from "react-router";
import toast from "react-hot-toast";
import {useAuth} from "../../../../src/firebase/AuthContext";
import darkMode from "/assets/icons/dark-mode.svg";
import lightMode from "/assets/icons/light-mode.svg";
import {useDarkMode} from "~/components/useDarkMode";
import dashboard from "/assets/icons/dashboard.png";

export default function AccountMenu() {

    const {user, role} = useAuth();

    const { isDark, toggleTheme } = useDarkMode();

    const navigate = useNavigate();
    // logOut
    const handleLogout = async () => {
        try {
            await logout();
            toast.success("Logged out successfully");
            navigate("/signIn", { replace: true });
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        // sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>
                            {user.photoURL ? (
                                <img src={user.photoURL} alt="user" />
                            ) : (
                                <span>{user.email[0].toUpperCase()}</span>
                            )}
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <div className="lg:hidden">
                <MenuItem
                    onClick={toggleTheme}
                    className="flex items-center gap-2 cursor-pointer">
                    <img
                        src={isDark ? lightMode : darkMode}
                        alt="theme"
                        className="w-8 h-8"
                    />
                    <span>Toggle Theme</span>
                </MenuItem>
                </div>

                <Divider />

                <MenuItem onClick={handleClose}>
                    <Link to="/dashboard">
                        <div className="flex items-center gap-2">
                            <img src={dashboard} alt="dashboard" className="w-8 h-8" />
                            <span className="badge">Dashboard</span>
                        </div>
                    </Link>
                </MenuItem>
                <Divider />

                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" className="text-red-500"/>
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
