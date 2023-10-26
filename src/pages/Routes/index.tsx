import React from 'react';
import { Routes, Route, useLocation, useParams } from 'react-router-dom';
import DashboardLayout from '../Layout/Dashboard';
import ManagerViewLayout from '../Layout/ManagerView';
import ViewGoalsLayout from '../Layout/ViewGoals';
import Home from '../Home';
import About from '../About';

const ViewGoals = () => {
    const { id } = useParams();
    return (
        <>
            <h1>View Goals</h1>
            {id && <h5>id : {id}</h5>}
        </>
    );
};
const CreateGoals = () => {
    return <h1>CreateGoals</h1>;
};

const ManagerGoals = () => {
    return <h1>ManagerGoals</h1>;
};
const ManagerGoalsView = () => {
    return <h1>ManagerGoals View</h1>;
};

const Error = () => {
    return <h1>404 Not found</h1>;
};

const AppRoutes = () => {
    const location = useLocation();
    console.log(location);

    return (
        <Routes>
            <Route path="/goals">
                <Route path="dashboard" element={<DashboardLayout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
                <Route path="view-goals" element={<ViewGoalsLayout />}>
                    <Route index element={<ViewGoals />} />
                    <Route path=":id" element={<ViewGoals />} />
                </Route>
                <Route path="create-goals" element={<CreateGoals />} />
            </Route>
            <Route path="/manager-goals" element={<ManagerViewLayout />}>
                <Route index element={<ManagerGoals />} />
                <Route path="view" element={<ManagerGoalsView />} />
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default AppRoutes;
