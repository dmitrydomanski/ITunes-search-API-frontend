import React from 'react';
import PropTypes from 'prop-types';

import './Backdrop.scss';

const backdrop = ({ show, clicked }) => (
    show
        ? (
            <div
                role="link"
                tabIndex="-1"
                className="Backdrop"
                onClick={clicked}
                onKeyPress={clicked}
            />
        )
        : null
);

backdrop.propTypes = {
    show: PropTypes.bool.isRequired,
    clicked: PropTypes.func,
};

backdrop.defaultProps = {
    clicked: null,
};

export default backdrop;
