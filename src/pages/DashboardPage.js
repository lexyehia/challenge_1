import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';

export const DashboardPage = () => (
    <div className="App">
        <NavBar />
        <p>
            <Link to="/admin/workflows">Start Workflows</Link>
        </p>
    </div>
);
