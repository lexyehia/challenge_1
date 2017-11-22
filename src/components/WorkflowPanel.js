import React from 'react';
import { Panel } from 'react-bootstrap';

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
        Test
    </Panel>
);