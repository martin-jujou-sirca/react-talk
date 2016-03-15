import React, { Component } from 'react';

class PhotoCell extends Component {
  static propTypes = {
    src: React.PropTypes.string,
    title: React.PropTypes.string,
  };

  constructor() {
    super();
  }

  render() {
    const styles = {
      mainContainer: {
        width: 600,
        textAlign: 'left',
        boxSizing: 'border-box',
        marginTop: 15,
        marginBottom: 15,
      },
      imageContainer: {
        width: '50%',
        textAlign: 'left',
        display: 'inline-block',
      },
      image: {
        maxWidth: '100%',
      },
      titleContainer: {
        width: '50%',
        fontWeight: 'bold',
        display: 'inline-block',
        boxSizing: 'border-box',
        paddingLeft: 10,
        verticalAlign: 'top',
      },
    };

    return (
      <div style={styles.mainContainer}>
        <div style={styles.imageContainer}>
          <img src={this.props.src} style={styles.image} />
        </div>
        <div style={styles.titleContainer}>
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default PhotoCell;
