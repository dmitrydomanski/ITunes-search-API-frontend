import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Video = styled.iframe`
padding: 10px;
`;

const VideoInfo = styled.div`
padding: 10px;
text-align: right;
color: darkgray;
`;

const CardWrapper = styled.div`
margin-top: 100px;
margin-left: 100px;
display: inline-flex;
`;

const Artist = styled.div`
font-size: 2em;
color: darkblue;
`;

const TrackName = styled.div`
margin-bottom: 5px;
font-size: 1.5em;
color: black;
`;

const videoCard = ({
    artistName, collectionCensoredName, primaryGenreName,
    releaseDate, trackCensoredName, trackTimeMillis, previewUrl, country,
}) => {
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    };
    const date = new Date(releaseDate).toLocaleString('en-US', options);

    const minutes = Math.floor(trackTimeMillis / 60000);
    const seconds = (trackTimeMillis - minutes * 60000) / 1000;
    const duration = `${minutes}:${Math.ceil(seconds)}`;

    return (
        <CardWrapper>
            <VideoInfo>
                <Artist>{artistName}</Artist>
                <TrackName>{trackCensoredName}</TrackName>
                <div>{collectionCensoredName}</div>
                <div>Genre: {primaryGenreName}</div>
                <div>Country: {country}</div>
                <div>Release: {date}</div>
                <div>Duration: {duration}</div>
            </VideoInfo>
            <Video src={previewUrl} title="unique title" frameBorder="0" />
        </CardWrapper>
    );
};

export default videoCard;

videoCard.propTypes = {
    artistName: PropTypes.string,
    collectionCensoredName: PropTypes.string,
    primaryGenreName: PropTypes.string,
    releaseDate: PropTypes.string,
    trackCensoredName: PropTypes.string,
    trackTimeMillis: PropTypes.number,
    previewUrl: PropTypes.string,
    country: PropTypes.string,

};

videoCard.defaultProps = {
    artistName: null,
    collectionCensoredName: null,
    primaryGenreName: null,
    releaseDate: null,
    trackCensoredName: null,
    trackTimeMillis: null,
    previewUrl: null,
    country: null,

};
