import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './styles';

export function Layout() {
    return (
        <Container>
            Manager Layout
            <Outlet />
        </Container>
    );
}

export default Layout;
