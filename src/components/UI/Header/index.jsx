import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.div`
display: flex;
flex-direction: column;
position: fixed;
z-index: 100;
background-color: cornflowerblue;
width: -webkit-fill-available;
top: 0;
left: 0;
padding: 30px 16px 25px 40px;
`;

const Title = styled.div`
width: 100%;
font-family: monospace;
font-size: 32px;
color: beige;
`;

const header = ({ title, children }) => (
    <Wrapper>
        <Title>{title}</Title>
        {children}
    </Wrapper>
);

export default header;

header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

header.defaultProps = {
    children: null,
};
