import React from 'react';
import { Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const styles = {
    panel: {
        width: 60,
    }
};

export const ActionItem = (props) => (
    <Panel
        style={styles.panel}
        bsStyle='success'
        draggable
    >
        {props.text}
    </Panel>
);

ActionItem.propTypes = {
    text: PropTypes.string.isRequired,
};
