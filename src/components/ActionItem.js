import React from 'react';
import { Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const styles = {
    panel: {
        width: 80,
        margin: 10,
    }
};

export class ActionItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel
                style={styles.panel}
                bsStyle='success'
                draggable
                onDragStart={this._startDragHandler}
            >
                {this.props.text}
            </Panel>
        )
    }

    /**
     * Load this action's text and set originId to a falsy value
     * upon drag start
     * @param e event
     * @private
     */
    _startDragHandler = (e) => {
        e.dataTransfer.setData('text/plain', this.props.text);
        e.dataTransfer.setData('originId', "");
        e.dataTransfer.dropEffect = 'move';
    }
}



ActionItem.propTypes = {
    text: PropTypes.string.isRequired,
};
