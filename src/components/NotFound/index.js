import React, { PropTypes, Component } from 'react';

import './style.css';

export default class NotFound extends Component {

  render() {
    return (
      <div className="notFound">
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}