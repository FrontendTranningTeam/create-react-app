import React from 'react';
import './Main.css';
import Calculator from '../Calculator/Calculator.js';
import Aside from '../Aside/Aside.js';
import Form from '../Form/Form.js';

export default class Main extends React.Component {
  render() {
    return (
      <main className="Main">
        <Calculator />
        <Aside />
        <Form />
      </main>
    );
  }
}
