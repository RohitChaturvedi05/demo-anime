import React from 'react';
import Tabs from '../../components/Tabs';
import { Outlet } from 'react-router-dom';
import { Container, InnerContainer } from './styles';

export function Layout() {
    return (
        <Container>
            <Tabs />
            <InnerContainer>
                <Outlet />
            </InnerContainer>
        </Container>
    );
}

export default Layout;
