import React from 'react';
import './Form.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      gender: "nam"
    };
    this.changeInput = this.changeInput.bind(this);
    this.changeTextarea = this.changeTextarea.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.changeSubmit = this.changeSubmit.bind(this);
  }

  changeInput(e) {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [name]: value });
  }

  changeTextarea(e) {
    this.setState({ message: e.target.value });
  }

  changeSelect(e) {
    this.setState({ gender: e.target.value });
  }

  changeSubmit(e) {
    const text =
    `
Username: ${this.state.username}
Password: ${this.state.password}
Message: ${this.state.message}
Gender: ${this.state.gender}
    `;
    alert(text);
    e.preventDefault();
  }

  render() {
    return (
      <form className="myform">
        <input
          className="myform__field"
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.changeInput}
          placeholder="Username"
        />
        <input
          className="myform__field"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.changeInput}
          placeholder="Password"
        />
        <textarea
          className="myform__message"
          rows="4"
          value={this.state.textarea}
          onChange={this.changeTextarea}
          placeholder="Message"
        ></textarea>
        <select
          className="myform__option"
          value={this.state.select}
          onChange={this.changeSelect}
        >
          <option value="nam">Nam</option>
          <option value="nữ">Nữ</option>
          <option value="ở giữa">Ở giữa</option>
        </select>
        <button className="myform__submit" type="submit" onClick={this.changeSubmit}>Submit</button>
      </form>
    );
  }
}
