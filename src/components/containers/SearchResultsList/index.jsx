import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SearchResultItem from './SearchResultItem/index.jsx'

export default class SearchResultsList extends PureComponent {
    render() {
        const { items } = this.props;
        return items.map((item, index) => (
            <SearchResultItem artist={item.artist} track={item.trackName} picture={item.artworkUrl30} key={index} />
        ))
    }
}
