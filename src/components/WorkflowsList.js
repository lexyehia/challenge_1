import React from 'react';
import PropTypes from 'prop-types';
import { WorkflowPanel } from './WorkflowPanel';

const styles = {
    container: {
        display: 'flex',
        direction: 'row',
        margin: '0 auto',
        justifyContent: 'space-between',
        width: 500,
    },
};


export class WorkflowsList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Current sequence of workflows:</h4><br />
                <div style={styles.container}>
                    {this.props.workflows.map(workflow => (
                        <WorkflowPanel
                            key={workflow.id}
                            id={workflow.id}
                            text={workflow.action}
                            deplaceWorkflow={this.props.addWorkflow}
                        />
                    ))}
                </div>
            </div>
        );
    }

    _listDropHandler = (e) => {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData('text'));
        console.log(data, e, this)
        const id = Math.floor(Math.random() * 100);

    }

}

WorkflowsList.propTypes = {
    workflows: PropTypes.array.isRequired,
    addWorkflow: PropTypes.func,
};
