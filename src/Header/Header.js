// react props
import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header-title">{this.props.title}</h1>
      </header>
    );
  }
}
