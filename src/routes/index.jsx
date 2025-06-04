import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import Events from '../Pages/Events/Events';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Teams from '../Pages/Teams/Teams';
import Registrations from '../Pages/Registrations/Registrations';
import Profile from '../Pages/Settings/Profile/Profile';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/registrations" element={<Registrations />} />
                <Route path="/settings/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;