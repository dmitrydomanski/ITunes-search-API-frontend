import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import VideoCard from '../../components/VideoCard';

export default class VideoDetails extends Component {
    constructor() {
        super();
        this.state = {
            data: {

            },
        };
    }

    async componentDidMount() {
        const getUrl = 'http://localhost:3000/api/lookup?trackId=';
        const { match } = this.props;
        const query = match.url.slice(1).split('&')
            .map(element => element.slice(element.indexOf('=') + 1));

        const trackID = query[1];
        const term = query[0];

        await axios.get(`${getUrl}${trackID}&term=${term}`)
            .then((response) => {
                const track = response.data[0];
                this.setState({
                    data: track,
                });
            });
    }

    render() {
        const { data } = this.state;
        return (
            <VideoCard
                artistName={data.artistName}
                collectionCensoredName={data.collectionCensoredName}
                primaryGenreName={data.primaryGenreName}
                releaseDate={data.releaseDate}
                trackCensoredName={data.trackCensoredName}
                trackTimeMillis={data.trackTimeMillis}
                previewUrl={data.previewUrl}
            />
        );
    }
}
