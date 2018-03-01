// react state
import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeID);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <footer className="footer">
        <h1 className="footer-title">Today: {this.state.date.toLocaleTimeString()}</h1>
      </footer>
    );
  }
}
