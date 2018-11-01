import React from "react";

const state = {
  inputdata: 0
};

const InputContext = React.createContext(state.inputdata); //passing initial value



export default InputContext;