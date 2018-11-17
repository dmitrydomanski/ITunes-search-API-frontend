import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.div`
display: flex;
flex-direction: column;
position: absolute;
top: 150px;
margin-left: 20px;
`;

const section = (props) => {
    const { children } = props;
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default section;

section.propTypes = {
    children: PropTypes.node,
};

section.defaultProps = {
    children: null,
};
