import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Aux from '../../hoc/Aux';
import Backdrop from '../Backdrop';

const ModalWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: -webkit-fill-available
position: relative;
z-index: 500;
transition: all 0.3s ease-out;`;

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
                <ModalWrapper
                    style={{
                        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: show ? '1' : '0',
                    }}
                >
                    {children}
                </ModalWrapper>
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
