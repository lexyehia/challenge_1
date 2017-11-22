import React from 'react';
import PropTypes from 'prop-types';
import { WorkflowPanel } from './WorkflowPanel';

const styles = {
    container: {
        display: 'flex',
        direction: 'row',
        margin: '0 auto',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
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
                    {this.props.workflows.map((workflow, i) => (
                        <WorkflowPanel
                            key={workflow.id}
                            id={workflow.id}
                            text={workflow.action}
                            step={i + 1}
                            deplaceWorkflow={this.props.addWorkflow}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

WorkflowsList.propTypes = {
    workflows: PropTypes.array.isRequired,
    addWorkflow: PropTypes.func.isRequired,
};
