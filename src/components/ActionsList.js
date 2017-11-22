import React from 'react';
import PropTypes from 'prop-types';
import { ActionItem } from './ActionItem';

const styles = {
    container: {
        display: 'flex',
        direction: 'row',
        margin: '0 auto',
        justifyContent: 'space-between',
        width: 400,
    },
};


export const ActionsList = (props) => (
    <div>
        <h5>Available list of actions:</h5><br />
        <div style={styles.container}>
            {props.actions.map(action => (
                <ActionItem
                    key={action.id}
                    id={action.id}
                    text={action.action}
                />
            ))}
        </div>
    </div>
);

ActionsList.propTypes = {
    actions: PropTypes.array.isRequired,
};
