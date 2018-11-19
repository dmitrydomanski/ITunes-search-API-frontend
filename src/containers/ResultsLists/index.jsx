import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Aux from '../../components/hoc/Aux';
import SearchResultItem from '../../components/SearchResultItem';
import SearchInput from '../../components/UI/SearchInput';
import Modal from '../../components/UI/Modal';
import Loader from '../../components/UI/Loader';
import Header from '../../components/UI/Header';
import Section from '../../components/UI/Section';
import Informer from '../../components/UI/Informer';
import Button from '../../components/UI/Button';

const url = 'http://localhost:3000/api/search?term=';

export default class ResultsLists extends Component {
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

    handleClick = (name, trackId) => () => {
        console.log(name, trackId);
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
                            <Link
                                to={`term=${item.artistName}&trackId=${item.trackId}`}
                                // to={{
                                //     pathname: '/',
                                //     search: `term=${item.artistName}&trackId=${item.trackId}`,
                                // }}
                                key={parseInt(index.toString(), 10)}
                            >
                                <SearchResultItem
                                    artist={item.artistName}
                                    track={item.trackName}
                                    picture={item.artworkUrl100}
                                    clicked={this.handleClick(item.artistName, item.trackId)}
                                />
                            </Link>
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
