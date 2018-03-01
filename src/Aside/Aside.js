import React from 'react';
import './Aside.css';

class ListItem extends React.Component {
  render() {
    return (
      <li>Number {this.props.number}</li>
    );
  }
}

export default class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 ,color: 'blue' }
    this.changeColor = this.changeColor.bind(this);
    setInterval(this.changeNumber, 1000);
  }
  changeColor() {
    const newColor = this.state.color === 'blue' ? 'green' : 'blue';
    this.setState({ color: newColor });
  }
  render() {
    // multiple component
    const arr = [1, 2, 3, 4];
    const list = arr.map(item => <ListItem number={item} />);
    return (
      <aside className="Aside" style={{backgroundColor:this.state.color}}>
        <h1 className="Aside-text">Aside</h1>
        <button onClick={this.changeColor}>
          Change color
        </button>
        <ul>{list}</ul>
      </aside>
    );
  }
}
