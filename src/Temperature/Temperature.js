import React from 'react';
import './Temperature.css';

const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

export default class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    return (
      <label className="temperature">
        <span>Temperature in {scaleName[this.props.scale]}</span>
        <input
          className="temperature-field"
          type="text"
          value={this.props.temperature}
          onChange={this.handleChange} />
      </label>
    );
  }
}
