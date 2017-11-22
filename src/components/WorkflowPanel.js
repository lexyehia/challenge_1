import React from 'react';
import { Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const styles = {
    panel: {
        width: 100,
    }
};

export const WorkflowPanel = (props) => (
    <Panel
        style={styles.panel}
        draggable
    >
        {props.text}
    </Panel>
);

WorkflowPanel.propTypes = {
    text: PropTypes.string.isRequired,
};
