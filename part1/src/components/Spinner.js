import React, { Component } from 'react';

class Spinner extends Component {

  render() {
    return (
      <div className="Spinner">
        <div className="Spinner-overlay"/>
        <div className="Spinner-icon"/>
      </div>
    );
  }
}

export default Spinner;
