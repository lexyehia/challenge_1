import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { NavBar } from '../components/NavBar';

export const DashboardPage = () => (
    <div className="App">
        <NavBar />
        <p>
            <Link to="/admin/workflows">
                <Button>
                    Start Workflows
                </Button>
            </Link>
        </p>
    </div>
);
