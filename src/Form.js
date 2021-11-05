import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = { userInput: "" };
  }

  handleInput = (event) => {
    this.setState({ userInput: event.target.value });
    this.props.afterSubmit(event.target.value);
  };

  render() {
    return (
      <form>
        <input
          id="values"
          name="values"
          type="text"
          onChange={this.handleInput}
          value={this.state.userInput}
        />
        <select id="operation" name="operation">
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default Form;
