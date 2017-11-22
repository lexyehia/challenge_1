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


export const WorkflowsList = (props) => (
    <div>
        <h4>Current sequence of workflows:</h4><br />
        <div style={styles.container}>
            {props.workflows.map(workflow => (
                <WorkflowPanel
                    key={workflow.id}
                    id={workflow.id}
                    text={workflow.action}
                />
            ))}
        </div>
    </div>
);

WorkflowsList.propTypes = {
    workflows: PropTypes.array.isRequired,
};
