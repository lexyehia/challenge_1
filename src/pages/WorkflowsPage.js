import React from 'react';
import { Button } from 'react-bootstrap';
import { NavBar } from '../components/NavBar';

export class WorkflowsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className='App'>
                <NavBar />
                <div>
                </div>
                <div>
                    <Button
                        style={{ margin: 10 }}
                        bsStyle="success"
                    >
                        Save
                    </Button>
                    <Button
                        style={{ margin: 10 }}

                        bsStyle="warning"
                    >
                        Reset
                    </Button>
                </div>
            </div>
        )
    }
}