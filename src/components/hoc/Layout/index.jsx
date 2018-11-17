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
import Button from '../../UI/Button';

const url = 'http://localhost:3000/api/search?term=';

class Layout extends Component {
    state = {
        results: [],
        isLoaded: true,
        dataSearched: false,
        dataSaved: false,
        popQueries: [],
    }

    getSearchItems = async (query) => {
        const encodedValue = encodeURIComponent(query);
        await axios.get(`${url}${encodedValue}`)
            .then((response) => {
                this.setState({
                    results: response.data,
                    isLoaded: true,
                    dataSearched: true,
                    popQueries: [],
                });
            });
    }

    saveSearchItem = async (query) => {
        const encodedValue = encodeURIComponent(query);
        await axios.post(`${url}${encodedValue}`)
            .then((response) => {
                if (response.status === 500) {
                    this.setState({
                        dataSaved: false,
                    });
                }
                if (response.status === 201) {
                    this.setState({
                        dataSaved: true,
                    });
                }
            });
    }

    getPopularRequests = async () => {
        this.setState({
            isLoaded: false,
        });
        await axios.get('http://localhost:3000/api/top')
            .then((response) => {
                this.setState({
                    popQueries: response.data,
                    isLoaded: true,
                    results: [],
                    dataSearched: false,
                });
            });
    }

    performSearch = (query) => {
        this.setState({
            isLoaded: false,
        });
        this.getSearchItems(query);
        this.saveSearchItem(query);
    }

    render() {
        const { isLoaded, results, dataSearched, dataSaved, popQueries } = this.state;
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
                    {dataSearched && !dataSaved
                        ? <div>query not saved</div>
                        : null}
                    <Button
                        clicked={this.getPopularRequests}
                    >Get 10 most popular requests
                    </Button>
                </Header>
                <Section>
                    {dataSearched && results.length === 0
                        ? <Informer title={informer} />
                        : results.map((item, index) => (
                            <SearchResultItem
                                artist={item.artistName}
                                track={item.trackName}
                                picture={item.artworkUrl100}
                                key={parseInt(index.toString(), 10)}
                            />
                        ))}
                    {popQueries.length === 0
                        ? null
                        : popQueries.map((item, index) => (
                            <div key={parseInt(index.toString(), 10)}>{item}</div>
                        ))}
                </Section>
            </Aux>
        );
    }
}

export default Layout;
