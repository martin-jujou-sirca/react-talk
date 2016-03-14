import React, { Component } from 'react';

class PhotoList extends Component {

  static propTypes = {
    photos: React.PropTypes.array.isRequired,
  };

  constructor() {
    super();
  }

  render() {
    const styles = {
      image: {
        width: '100%',
        display: 'block',
        marginBottom: 4,
        marginTop: 4,
      },
    };

    return (
      <div>
        {this.props.photos.map((result) => {
          return (
            <img src={result.link} style={styles.image} />
          );
        })}
      </div>
    );
  }
}

export default PhotoList;
