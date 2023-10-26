import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const useAuthentication = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error] = useState<Error>();

    useEffect(() => {
        setAuthenticated(true);
        setLoading(false);
    }, [loading, setAuthenticated, setLoading]);

    return {
        isAuthenticated,
        loading,
        error,
    };
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { isAuthenticated, loading } = useAuthentication();

    if (loading) {
        return <h3>loading....</h3>;
    }
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;
