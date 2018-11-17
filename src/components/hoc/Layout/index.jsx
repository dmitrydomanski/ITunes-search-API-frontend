import React, { Component } from 'react';

import Aux from '../Aux';
import SearchInput from '../../UI/SearchInput';
import SearchResultItem from '../../SearchResultItem';
import Modal from '../../UI/Modal';
import Loader from '../../UI/Loader';
import Header from '../../UI/Header';
import Section from '../../UI/Section';
import Informer from '../../UI/Informer';

class Layout extends Component {
    state = {
        results: [],
        isLoaded: true,
        searched: false,
    }

    performSearch = (query) => {
        this.setState({
            isLoaded: false,
        });
        const encodedValue = encodeURIComponent(query);
        fetch(`http://localhost:3000/api/search?term=${encodedValue}`)
            .then(response => response.json())
            .then((responseData) => {
                this.setState({
                    results: responseData,
                    isLoaded: true,
                    searched: true,
                });
            })
            .catch(error => console.log('Error fetching and parsing data', error));
    }

    render() {
        const { isLoaded, results, searched } = this.state;
        const informer = 'Sorry, there are no such videos on iTunes, try another search please';
        if (!isLoaded) {
            return (
                <Modal show={!isLoaded}>
                    <Loader />
                </Modal>
            );
        }
        return (
            <Aux>
                <Header title="Search and view music videos from iTunes">
                    <SearchInput onSearch={this.performSearch} />
                </Header>
                <Section>
                    {searched && results.length === 0
                        ? <Informer title={informer} />
                        : results.map((item, index) => (
                            <SearchResultItem
                                artist={item.artistName}
                                track={item.trackName}
                                picture={item.artworkUrl100}
                                key={parseInt(index.toString(), 10)}
                            />
                        ))}
                </Section>
            </Aux>
        );
    }
}

export default Layout;
