import React, { Component } from "react";
import "../styles/AddTask.css";
import { Button, FormGroup, ControlGroup, InputGroup } from "@blueprintjs/core";
import { addTask } from "./actions";
import { connect } from "react-redux";

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

  handleAddClick = (e) => {
    e.preventDefault();
    this.props.dispatch(
      addTask(this.state.name, this.state.date, this.state.status)
    );
    this.setState({
      name: "",
      date: this.minDate,
      status: "do",
    });
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div>
        <form className="form" onSubmit={this.handleAddClick}>
          <FormGroup label="Co masz do zrobienia?" labelFor="name">
            <ControlGroup fill={true} vertical={false}>
              <InputGroup
                id="name"
                placeholder="wpisz"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </ControlGroup>
          </FormGroup>

          <div className="flex-row-forms">
            <FormGroup
              className="bp3-inline flex-form"
              label="Wybierz datę"
              labelFor="date"
            >
              <ControlGroup fill={false} vertical={false}>
                <InputGroup
                  type="date"
                  id="date"
                  placeholder="wpisz"
                  min={this.minDate}
                  max={maxDate}
                  value={this.state.date}
                  onChange={this.handleDateChange}
                />
              </ControlGroup>
            </FormGroup>
            <FormGroup
              className="bp3-inline flex-form"
              label="Pali się?"
              labelFor="status"
            >
              <div className="bp3-select .modifier">
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
              </div>
            </FormGroup>
          </div>

          <Button
            type="submit"
            className="bp3-button bp3-intent-primary"
            icon="add"
          >
            Dodaj
          </Button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTask);
