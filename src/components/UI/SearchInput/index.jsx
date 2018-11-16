import React, { Component } from 'react';


class SearchInput extends Component {

    state = {
        searchText: ''
    }

    onSearchChange = event => {
        this.setState({
            searchText: event.target.value
        });
    }

    onKeyDown = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.handleSubmit(event);
        }
    }

    onFocus = event => {
        this.setState({ searchText: '' });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSearch(this.query.value);
        event.target.blur();
    }

    render() {
        return (
            <form>
                <input type="search"
                    onChange={this.onSearchChange}
                    onKeyDown={this.onKeyDown}
                    onFocus={this.onFocus}
                    name="search"
                    role="textbox"
                    ref={(input) => this.query = input}
                    value={this.state.searchText}
                    placeholder="Search..." />
            </form>
        );
    }
}

export default SearchInput;