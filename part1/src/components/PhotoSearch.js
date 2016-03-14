import React, { Component } from 'react';
import PhotoList from './PhotoList.js';
import request from 'superagent';


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
    this.setState({
      search: event.target.value,
      loading: true,
    });

    request
      .get('https://api.imgur.com/3/gallery/search')
      .query({ q_all: this.state.search })
      .query({q_size_px: 'med'})
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
          // console.log('Res: ', res.body.data);
          const results = res.body.data.map((result) => {
            return {
              title: result.title,
              link: result.link,
            };
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

    return (
      <div style={styles.container}>
        <h1>Photo Search</h1>
        <input type="text" value={this.state.search} onChange={this.search} style={styles.input} />
        <PhotoList photos={this.state.results} />
      </div>
    );
  }
}

export default PhotoSearch;
