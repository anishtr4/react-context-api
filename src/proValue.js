import React, { Component } from "react";

function ParentComponent(props) {
  return (
    <ChildComponent value={props.value} />
  );
}
function ChildComponent(props) {
  return (
    <div className="Component2"> <p>{props.value}</p></div>
  );
}

class ProVal extends Component {
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
      <div>

        <ParentComponent value={this.state.inputdata} />
        <input value={this.state.inputdata} onChange={this.updateInputValue} />
      </div>
    );
  }
}
export default ProVal;