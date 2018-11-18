import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../hoc/Aux';

const videoCard = ({
    artistName, collectionCensoredName, primaryGenreName,
    releaseDate, trackCensoredName, trackTimeMillis, previewUrl,
}) => (
    <Aux>
        <div>{artistName}</div>
        <div>{collectionCensoredName}</div>
        <div>{primaryGenreName}</div>
        <div>{releaseDate}</div>
        <div>{trackCensoredName}</div>
        <div>{trackTimeMillis}</div>
        <iframe src={previewUrl} title="unique title" frameBorder="0" />
    </Aux>
);

export default videoCard;

videoCard.propTypes = {
    artistName: PropTypes.string,
    collectionCensoredName: PropTypes.string,
    primaryGenreName: PropTypes.string,
    releaseDate: PropTypes.string,
    trackCensoredName: PropTypes.string,
    trackTimeMillis: PropTypes.number,
    previewUrl: PropTypes.string,

};

videoCard.defaultProps = {
    artistName: null,
    collectionCensoredName: null,
    primaryGenreName: null,
    releaseDate: null,
    trackCensoredName: null,
    trackTimeMillis: null,
    previewUrl: null,

};
