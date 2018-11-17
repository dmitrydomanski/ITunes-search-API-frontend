import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchInput extends Component {
    // constructor(props) {
    //     super(props);
    //     const { onSearch } = this.props;
    // }

    state = {
        searchText: '',
    }

    onSearchChange = (event) => {
        this.setState({
            searchText: event.target.value,
        });
    }

    onKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.handleSubmit(event);
        }
    }

    onFocus = () => {
        this.setState({
            searchText: '',
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(this.query.value);
        event.target.blur();
    }

    render() {
        const { searchText } = this.state;
        return (
            <form>
                <input
                    type="search"
                    onChange={this.onSearchChange}
                    onKeyDown={this.onKeyDown}
                    onFocus={this.onFocus}
                    name="search"
                    ref={(input) => { this.query = input; }}
                    value={searchText}
                    placeholder="Search..."
                />
            </form>
        );
    }
}

SearchInput.propTypes = {
    onSearch: PropTypes.func,
};

SearchInput.defaultProps = {
    onSearch: null,
};
