import React, { Component } from "react";
import "../styles/AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    name: "",
    date: this.minDate,
    status: "do",
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleDateChange = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  handleStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  handleAddClick = () => {
    console.log("ok");
    const { name, date, status } = this.state;
    const add = this.props.add(name, date, status);
    if (add) {
      this.setState({
        name: "",
        date: this.minDate,
        status: "do",
      });
    }
  };
  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div className="form">
        <label htmlFor="name">
          Co masz do zrobienia?
          <input
            type="text"
            id="name"
            placeholder="wpisz"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>
        <br />
        <label htmlFor="date">
          Wybierz datę
          <input
            type="date"
            id="date"
            min={this.minDate}
            max={maxDate}
            value={this.state.date}
            onChange={this.handleDateChange}
          />
        </label>
        <br />
        <label htmlFor="status">
          Pali się?
          <select
            name="status"
            id="status"
            value={this.state.status}
            onChange={this.handleStatusChange}
          >
            <option value="do">Bardzo!</option>
            <option value="decide">Zaplanuj, bo ważne</option>
            <option value="delegate">Zrób, jak musisz</option>
            <option value="drop">Generalnie sobie odpuść</option>
          </select>
        </label>
        <br />
        <button onClick={this.handleAddClick}>DODAJ</button>
      </div>
    );
  }
}

export default AddTask;
