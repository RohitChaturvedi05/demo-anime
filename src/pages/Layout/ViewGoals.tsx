import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './styles';

export function Layout() {
    return (
        <Container>
            View Goals Layout
            <Outlet />
        </Container>
    );
}

export default Layout;
