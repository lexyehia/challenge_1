import React from 'react';
import { Button } from 'react-bootstrap';
import { NavBar } from '../components/NavBar';
import { WorkflowsList } from '../components/WorkflowsList';

export class WorkflowsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            _id: "bU4rMI7fEeeqxlvy4NOyyA==",
            ProjectId: "bOd74o7fEeeqxlvy4NOyyA==",
            AcctId: "GVb1w0skuUKO+FfzgvG+JA==",
            actions: [
                "Import",
                "Export",
                "Sort",
                "Extract",
                "Split",
            ],
            workflows: [
                {
                    "id": 1,
                    "action": "Import",
                    "isStart": true,
                    "prevStage": null,
                    "nextStage": 2,
                },
                {
                    "id": 2,
                    "action": "Sort",
                    "isStart": false,
                    "prevStage": 1,
                    "nextStage": 3,
                },
                {
                    "id": 3,
                    "action": "Extract",
                    "isStart": false,
                    "prevStage": 2,
                    "nextStage": null,
                },
                {
                    "id": 4,
                    "action": "Export",
                    "isStart": false,
                    "prevStage": null,
                    "nextStage": null,
                }
            ]
        };
    }

    render() {
        return (
            <div className='App'>
                <NavBar />
                <div>
                    <WorkflowsList workflows={this.state.workflows}/>
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