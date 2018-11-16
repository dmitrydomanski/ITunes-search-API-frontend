import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';
import Aux from '../../hoc/Aux/index.jsx';
import Backdrop from '../Backdrop/Backdrop';

export default class Modal extends Component {
    shouldComponentUpdate(nextProps) {
        const { show } = this.props;
        return nextProps.show !== show;
    }

    render() {
        const { show, modalClosed, children } = this.props;
        return (
            <Aux>
                <Backdrop show={show} clicked={modalClosed} />
                <div
                    className="Modal"
                    style={{
                        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: show ? '1' : '0',
                    }}
                >
                    {children}
                </div>
            </Aux>
        );
    }
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    modalClosed: PropTypes.func,
    children: PropTypes.node,
};

Modal.defaultProps = {
    children: null,
    modalClosed: null,
};
