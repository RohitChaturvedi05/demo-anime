import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { Container } from './styles';

export default function BasicTabs() {
    const location = useLocation();
    const pathname = location.pathname;
    const value =
        pathname === '/goals/dashboard/' ? '/goals/dashboard/home' : pathname;

    return (
        <Container sx={{ width: '100%' }}>
            <Container sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} aria-label="basic tabs example">
                    <Tab
                        label={routes.home.label}
                        component={Link}
                        to="/goals/dashboard/home"
                        value="/goals/dashboard/home"
                        // value={routes.home.path}
                    />
                    <Tab
                        label={routes.about.label}
                        component={Link}
                        to="/goals/dashboard/about"
                        value="/goals/dashboard/about"
                        // value={routes.about.path}
                    />
                </Tabs>
            </Container>
        </Container>
    );
}
