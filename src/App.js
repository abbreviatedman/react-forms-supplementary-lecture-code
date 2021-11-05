import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { result: "" };
  }

  capitalize = (str) => {
    this.setState({ result: str.toUpperCase() });
  };

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form afterSubmit={this.capitalize} />
        <Form afterSubmit={this.uncapitalize} />
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;

/* State - what State do we NEED
 * 1. the result - "Invalid Input" || the result of sum/average/mode
 * should live in App because it needs to put that state in #result
 * 2. the operation - which operation are we doing?
 * should live in the form
 * 3. the values - which values are we working with? - aka the contents of the text input
 * should live in the form
 */

/*
 * Methods - what things do we need to DO
 * Form:
 * handles submission
 * prevent default behavior
 * send the data... somewhere
 * might look for invalid input
 * might transform data into a calculable form
 * a handler for the text input
 * a handler for the dropdown
 * App:
 * one calculate method that it gives to Form
 */
