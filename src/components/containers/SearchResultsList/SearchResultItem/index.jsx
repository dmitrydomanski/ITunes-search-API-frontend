import React from 'react';
import PropTypes from 'prop-types';

const searchResultItem = ({ artist, track, picture }) => (
    <div>
        <div>{artist}</div>
        <div>{track}</div>
        <img src={picture} alt={track} />
    </div>
);

export default searchResultItem;

searchResultItem.propTypes = {
    artist: PropTypes.string,
    track: PropTypes.string,
    picture: PropTypes.string,
};

searchResultItem.defaultProps = {
    artist: null,
    track: null,
    picture: null,
};
