import React from 'react';
import { Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const styles = {
    normal: {
        width: 100,
    },
    hover: {
        width: 100,
        backgroundColor: 'beige',
    },
    text: {
        fontWeight: 'bold',
    }
};

export class WorkflowPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hover: false,
        }
    }

    render() {
        return (
            <Panel
                style={this.state.hover ? styles.hover : styles.normal}
                draggable
                onDragStart={this._dragStartHandler}
                onDragOver={this._dragOverHandler}
                onDragLeave={this._dragLeaveHandler}
                onDragEnd={this._dragLeaveHandler}
                onDrop={this._dropHandler}
            >
                <p style={styles.text}>{this.props.text}</p>
                <p>(Step {this.props.step})</p>
            </Panel>
        );
    }

    /**
     * Load the drag event with this Node's action text and id
     * @param e event
     * @private
     */
    _dragStartHandler = (e) => {
        e.dataTransfer.setData('text/plain', this.props.text);
        e.dataTransfer.setData('originId', this.props.id.toString());
        e.dataTransfer.dropEffect = 'move';
    };

    /**
     * Hover effect to beige
     * @param e
     * @private
     */
    _dragOverHandler = (e) => {
        e.preventDefault();

        this.setState({
            hover: true,
        })
    };

    /**
     * Remove hover effect
     * @private
     */
    _dragLeaveHandler = () => {
        this.setState({
            hover: false,
        })
    };

    /**
     * Remove hover effect, and invoke WorkflowsPage._addNewWorkflow()
     * with event's loaded action text and originId (if any)
     * @param e event
     * @private
     */
    _dropHandler = (e) => {
        e.preventDefault();

        this.setState({
            hover: false,
        });

        this.props.deplaceWorkflow(
            e.dataTransfer.getData('text/plain'),
            e.dataTransfer.getData('originId'),
            this.props.id,
        );
    }

}


WorkflowPanel.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    deplaceWorkflow: PropTypes.func.isRequired,
};
