import React from 'react';
import PropTypes from 'prop-types';
import { ActionItem } from './ActionItem';

const styles = {
    container: {
        display: 'flex',
        direction: 'row',
        margin: '0 auto',
        justifyContent: 'space-between',
        width: 500,
    },
};


export const ActionsList = (props) => (
    <div>
        <h4>Available list of actions:</h4><br />
        <div style={styles.container}>
            {props.actions.map((action, i) => (
                <ActionItem
                    key={i}
                    text={action}
                />
            ))}
        </div>
    </div>
);

ActionsList.propTypes = {
    actions: PropTypes.array.isRequired,
};
