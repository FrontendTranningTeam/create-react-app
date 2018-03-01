import React from 'react';
import './Main.css';
import Aside from '../Aside/Aside.js';

export default class Main extends React.Component {
  render() {
    return (
      <main className="Main">
        <Aside />
        <h1>Main box</h1>
      </main>
    );
  }
}
