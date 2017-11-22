import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import { NavBar } from '../components/NavBar';
import { WorkflowsList } from '../components/WorkflowsList';
import { ActionsList } from "../components/ActionsList";

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

    componentDidMount() {
        this._organizeWorkflow();
    }

    render() {
        return (
            <div className='App'>
                <NavBar />
                <div>
                    <WorkflowsList
                        workflows={this.state.workflows}
                        addWorkflow={this._addNewWorkflow}
                    />
                    <br />
                    <ActionsList actions={this.state.actions}/>
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

    _organizeWorkflow = () => {
        const { workflows } = this.state;
        const arr = [];
        const first = _.find(workflows, 'isStart');
        arr.push(first);

        findNextInChain(workflows, arr, first);

        this.setState({
            workflows: arr,
        })
    }

    _addNewWorkflow = (action, targetId) => {
        const id = this.state.workflows.length + 1;
        const targetIndex = _.findIndex(this.state.workflows, ['id', targetId]);

        const obj = {
            id,
            action,
        };

        const arr = [...this.state.workflows];
        arr.splice(targetIndex, 0, obj);

        arr.forEach((e, i) => {
            if (i === 0) {
                e.isStart = true;
                e.prevStage = null;
                e.nextStage = arr[i+1].id;
            } else if (i === arr.length - 1) {
                e.isStart = false;
                e.prevStage = arr[i-1].id;
                e.nextStage = null;
            } else {
                e.isStart = false;
                e.prevStage = arr[i-1].id;
                e.nextStage = arr[i+1].id;
            }
        });

        this.setState({
            workflows: arr,
        })
    }
}

function findNextInChain(originalArr, newArr, item) {
    if (item.nextStage) {
        const next = _.find(originalArr, ['id', item.nextStage]);
        newArr.push(next);
        return findNextInChain(originalArr, newArr, next);
    }
}
