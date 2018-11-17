import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../Aux';
import SearchInput from '../../UI/SearchInput';
import SearchResultItem from '../../SearchResultItem';
import Modal from '../../UI/Modal';
import Loader from '../../UI/Loader';
import Header from '../../UI/Header';
import Section from '../../UI/Section';
import Informer from '../../UI/Informer';

const url = 'http://localhost:3000/api/search?term=';

class Layout extends Component {
    state = {
        results: [],
        isLoaded: true,
        searched: false,
    }

    getSearchItems = async (query) => {
        const encodedValue = encodeURIComponent(query);
        await axios.get(`${url}${encodedValue}`)
            .then((response) => {
                this.setState({
                    results: response.data,
                    isLoaded: true,
                    searched: true,
                });
                console.log(this.state);
            });
    }

    saveSearchItem = async (query) => {
        const encodedValue = encodeURIComponent(query);
        await axios.post(`${url}${encodedValue}`)
            .then(response => console.log(response));
    }

    performSearch = (query) => {
        this.setState({
            isLoaded: false,
        });
        this.getSearchItems(query);
        this.saveSearchItem(query);
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
