import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
border: solid 2px darkgray;
border-radius: 5px;
padding: 0 10px 0 10px;
background-color: grey;
color: beige;
height: 35px;
cursor: pointer;
width: max-content;
`;

const button = ({ clicked, title }) => (
    <Button
        onClick={clicked}
        type="button"
    >{title}
    </Button>
);

export default button;

button.propTypes = {
    clicked: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};
