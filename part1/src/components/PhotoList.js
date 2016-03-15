import React, { Component } from 'react';
import PhotoCell from './PhotoCell.js';

class PhotoList extends Component {

  static propTypes = {
    photos: React.PropTypes.array.isRequired,
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>
          {this.props.photos.length} Results Found.
        </p>
        {this.props.photos.map((result) => {
          return (
            <PhotoCell src={result.link} key={result.id} title={result.title} />
          );
        })}
      </div>
    );
  }
}

export default PhotoList;
