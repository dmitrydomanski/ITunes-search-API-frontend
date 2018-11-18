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
        const url = 'http://localhost:3000/api/lookup?trackId=';
        const { location } = this.props;
        const { search } = location.search;
        const query = new URLSearchParams(search);
        console.log(query);

        const trackID = 583288725;
        const term = 'Metallica';

        await axios.get(`${url}${trackID}&term=${term}`)
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
