import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.form`
margin-top: 20px;
`;

const TextField = styled.input`
border: solid 2px darkgray;
font-size: 18px;
border-radius: 5px;
min-width: 350px;
padding: 5px;
`;

export default class SearchInput extends Component {
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
        const { onSearch } = this.props;
        const { value } = this.query;
        onSearch(value);
        event.target.blur();
    }

    render() {
        const { searchText } = this.state;
        return (
            <Wrapper>
                <TextField
                    type="search"
                    onChange={this.onSearchChange}
                    onKeyDown={this.onKeyDown}
                    onFocus={this.onFocus}
                    name="search"
                    ref={(input) => { this.query = input; }}
                    value={searchText}
                    placeholder="type in an artist name to search videos..."
                />
            </Wrapper>
        );
    }
}

SearchInput.propTypes = {
    onSearch: PropTypes.func,
};

SearchInput.defaultProps = {
    onSearch: null,
};
