import React, { Component } from 'react';

import Aux from '../Aux/index.jsx';
import SearchInput from '../../UI/SearchInput/index.jsx';
import SearchResultsList from '../../containers/SearchResultsList/index.jsx';
import Modal from '../../UI/Modal/Modal.jsx';
import Loader from '../../UI/Loader/Loader.jsx';

class Layout extends Component {
    state = {
        results: [],
        isLoaded: true,
    }

    performSearch = (query) => {
        this.setState({isLoaded: false});
        const encodedValue = encodeURIComponent(query);
        fetch(`http://localhost:3000/api/search?term=${encodedValue}`)
          .then(response => response.json())
          .then(responseData => {
            this.setState({
              results: responseData,
              isLoaded: true,
            });
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
      }

    render() {
        const { isLoaded, results } = this.state;
        if (!isLoaded) {
            return (
                <Modal show={!isLoaded}>
                    <Loader />
                </Modal>
            );
        }
        return (
            <Aux>
                <SearchInput onSearch={this.performSearch}/>
                <SearchResultsList items={results} />
            </Aux>
        )
    }
}

export default Layout;