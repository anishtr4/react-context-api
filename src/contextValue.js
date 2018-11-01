import React, { Component } from "react";
import "./App.css";
import InputContext from "./context";


function ParentComponent() {
  return (
    <ChildComponent />
  );
}
function ChildComponent(props) {
  return (
    
    <div><InputContext.Consumer>{val => <p>{val}</p>}</InputContext.Consumer></div>
  );
}
class ContextValue extends Component {
  state = {
    inputdata: 0
  };

  updateInputValue = (evt) => {
    this.setState({
      inputdata: evt.target.value
    });
  }
  render() {
    return (
      <div >
        <InputContext.Provider value={this.state.inputdata}>
          <ParentComponent />
        </InputContext.Provider>
        <input value={this.state.inputdata} onChange={this.updateInputValue} />

      </div>
    );
  }
}
export default ContextValue;