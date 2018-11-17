import React from 'react';
import PropTypes from 'prop-types';

const wrapper = {
    width: '350px',
    display: 'inline-flex',
    marginTop: '15px',
    marginLeft: '10px',
    borderRadius: '10px',
    backgroundColor: 'biege',
    border: 'solid 1px biege',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.25), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    padding: '10px',
    minHeight: '80px',
};

const videoData = {
    marginLeft: '20px',
    display: 'block',
};

const artistName = {
    marginBottom: '5px',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: '2em',
    color: 'darkblue',
};

const searchResultItem = ({ artist, track, picture }) => (
    <div style={wrapper}>
        <img
            style={{
                borderRadius: '5px',
            }}
            src={picture}
            alt={track}
        />
        <div style={videoData}>
            <div style={artistName}>{artist}</div>
            <div>{track}</div>
        </div>
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
