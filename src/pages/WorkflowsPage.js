import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import { getWorkflow, setWorkflow } from '../common/store';
import { findNextInChain } from '../common/helpers';
import { NavBar } from '../components/NavBar';
import { WorkflowsList } from '../components/WorkflowsList';
import { ActionsList } from '../components/ActionsList';

export class WorkflowsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            actions: [
                "Import",
                "Export",
                "Sort",
                "Extract",
                "Split",
            ],
            workflows: [],
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
                        onClick={this._save}
                        bsStyle='success'
                    >
                        Save
                    </Button>
                    <Button
                        style={{ margin: 10 }}
                        onClick={this._reset}
                        bsStyle='warning'
                    >
                        Reset
                    </Button>
                </div>
            </div>
        )
    }

    /**
     * Persist state's workflow to Store
     * @param e event
     * @private
     */
    _save = (e) => {
        e.preventDefault();

        setWorkflow(this.state.workflows);
    };

    /**
     * Reset state's workflow from Store data
     * @param e
     * @private
     */
    _reset = (e) => {
        e.preventDefault();

        this._organizeWorkflow();
    };

    /**
     * Fetch workflows from Store, organize them per nextStage of
     * each element, and set to this component's State
     * @private
     */
    _organizeWorkflow = () => {
        const workflows = getWorkflow();
        const arr = [];
        const first = _.find(workflows, 'isStart');
        arr.push(first);

        findNextInChain(workflows, arr, first);

        this.setState({
            workflows: arr,
        })
    }

    /**
     * Add a new element into the workflows array before targetId,
     * and removing the element where id = originId if originId
     * is provided
     *
     * @param {string} action
     * @param {string} originId
     * @param {number} targetId
     * @private
     */
    _addNewWorkflow = (action, originId, targetId) => {
        let arr = [...this.state.workflows];
        const id = arr.length + 1;

        const obj = {
            id,
            action,
        };

        /* Find target element */
        const targetIndex = _.findIndex(arr, ['id', targetId]);

        /* If originId provided, switch elements around */
        if (originId) {
            const originIndex = _.findIndex(arr, ['id', Number(originId)]);
            const _el = _.clone(arr[targetIndex]);
            arr[targetIndex] = arr[originIndex];
            arr[originIndex] = _el;
        } else {
            /* Add new element before target element */
            arr.splice(targetIndex, 0, obj);
        }

        /* Fix array's indices */
        //arr = arr.filter(val => val);

        /* Fix each element's isStart, prevState, nextStage based on
         * new order of elements
         */
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

        /* Set new state */
        this.setState({
            workflows: arr,
        })
    }
}
