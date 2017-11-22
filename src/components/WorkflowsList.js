import React from 'react';
import PropTypes from 'prop-types';
import { WorkflowPanel } from './WorkflowPanel';

const styles = {
    container: {
        display: 'flex',
        direction: 'row',
        width: 500,
    }
}


export const WorkflowsList = (props) => (
    <div style={styles.container}>
        {props.workflows.map(workflow => (
            <WorkflowPanel
                key={workflow.id}
                id={workflow.id}
                action={workflow.action}
            />
        ))}
    </div>
);

WorkflowsList.propTypes = {
    workflows: PropTypes.array.isRequired,
};

