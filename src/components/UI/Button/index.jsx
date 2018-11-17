import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
border: solid 2px darkgray;
border-radius: 5px;
width: 200px;
background-color: grey;
color: beige;
height: 35px;
margin-top: 10px;
cursor: pointer;
`;

const button = ({ clicked, children }) => (
    <Button
        onClick={clicked}
        type="button"
    >{children}
    </Button>
);

export default button;

button.propTypes = {
    clicked: PropTypes.func.isRequired,
    children: PropTypes.node,
};

button.defaultProps = {
    children: null,
};
