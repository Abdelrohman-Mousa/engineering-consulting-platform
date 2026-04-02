import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router'; // استخدام الراوتر الجديد
import menuIcon from "/assets/icons/menu.png";
import {ShinyButton} from "~/components/ui/shiny-button";
import "./sidebarMobile.scss";

export default function SidebarMobile() {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = React.useState(false);

    // تحديد الاتجاه بناءً على اللغة
    const isRtl = i18n.language === 'ar';

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    // اللينكات الأساسية للمشروع
    const menuItems = [
        { text: t('navbar.home'), path: '/' },
        { text: t('navbar.about'), path: '/about' },
        { text: t('navbar.request'), path: "/consultationRequest" },
        { text: t('navbar.projects'), path: '/projects' },
        { text: t('navbar.contact'), path: '/contactUs' },
    ];

    const DrawerList = (
        <Box
            sx={{ width: 280 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            // عشان يتماشى مع الـ Dark Mode بتاعنا
            className="box-sidebar bg-background text-foreground h-full"
        >
            <div className="logo-sidebar">
                <img src="/assets/icons/logoProjects.png" className="w-16 h-9" alt="logo" />
                <span className="text-logo-sidebar">{t("navbar.logo")}</span>
            </div>
            <Divider />

            <div className="signIn-sidebar">
                    <Link to="/signIn" >
                       <ShinyButton>
                        <h3>{t("navbar.signIn")}</h3>
                       </ShinyButton>
                    </Link>
            </div>
            <Divider />


            <List className="sidebar-list">
                {menuItems.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton component={Link} to={item.path}>
                            <ListItemText
                                primary={item.text}
                                sx={{ textAlign: isRtl ? 'right' : 'left' }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <div className="sidebar-menu lg:hidden"> {/* يظهر في الموبايل فقط */}
            <Button onClick={toggleDrawer(true)} className="button-menu p-0 min-w-0">
                <img src={menuIcon} alt="menu" className="size-9 dark:invert" />
            </Button>

            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                // 🚀 أهم حتة: الاتجاه يتغير مع اللغة
                anchor={isRtl ? 'right' : 'left'}
            >
                {DrawerList}
            </Drawer>
        </div>
    );
}