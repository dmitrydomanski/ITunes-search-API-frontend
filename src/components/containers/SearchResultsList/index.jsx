import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SearchResultItem from './SearchResultItem/index';

export default class SearchResultsList extends PureComponent {
    render() {
        const { items } = this.props;
        return items.map((item, index) => (
            <SearchResultItem
                artist={item.artistName}
                track={item.trackName}
                picture={item.artworkUrl100}
                key={parseInt(index.toString(), 10)}
            />
        ));
    }
}

SearchResultsList.propTypes = {
    items: PropTypes.instanceOf(Object),
};

SearchResultsList.defaultProps = {
    items: null,
};
