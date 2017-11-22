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
                {this.props.text}
            </Panel>
        );
    }

    _dragStartHandler = (e) => {
        e.dataTransfer.setData('text/plain', this.props.text);
        e.dataTransfer.setData('originId', this.props.id);
        e.dataTransfer.dropEffect = 'move';
    }

    _dragOverHandler = (e) => {
        e.preventDefault();

        this.setState({
            hover: true,
        })
    };

    _dragLeaveHandler = (e) => {
        this.setState({
            hover: false,
        })
    };

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
};
