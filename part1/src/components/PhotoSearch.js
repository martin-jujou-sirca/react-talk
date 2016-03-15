import React, { Component } from 'react';
import PhotoList from './PhotoList.js';
import request from 'superagent';
import Spinner from './Spinner.js';
import DebounceInput from 'react-debounce-input';


// ID: 727f5efe1caf7fe
// Secret: 74b39e7de41285eff32ab2533cedda92626570e

class PhotoSearch extends Component {

  constructor() {
    super();
    this.state = {
      search: '',
      results: [],
      loading: false,
    };

    this.search = this.search.bind(this);
  }

  search(event) {
    if (event.target.value === this.state.search) {
      return;
    }

    this.setState({
      search: event.target.value,
      loading: true,
    });

    request
      .get('https://api.imgur.com/3/gallery/search')
      .query({ q_all: event.target.value })
      .query({q_size_px: 'small'})
      .query({q_type: 'png'})
      .set('Authorization', 'Client-ID 727f5efe1caf7fe')
      .end((err, res) => {
        if (err || !res.ok) {
          // handle error
          // console.log('Fail: ', err);
          this.setState({
            results: [],
            loading: false,
          });
        } else {
          const results = res.body.data.filter((result) => {
            return !result.is_album;
          });

          this.setState({
            results: results,
            loading: false,
          });
        }
      });
  }

  render() {
    const styles = {
      container: {
        width: 600,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      input: {
        display: 'block',
        margin: 0,
        width: '100%',
        height: 34,
        fontFamily: 'sans-serif',
        fontSize: 18,
        outline: 'none',
      },
    };

    let loading = '';

    if (this.state.loading) {
      loading = (
        <Spinner />
      );
    }

    return (
      <div style={styles.container}>
        <h1>Photo Search</h1>
        <DebounceInput
          value={this.state.search}
          style={styles.input}
          minLength={3}
          debounceTimeout={600}
          onChange={this.search} />
        <PhotoList photos={this.state.results} />
        {loading}
      </div>
    );
  }
}

export default PhotoSearch;
