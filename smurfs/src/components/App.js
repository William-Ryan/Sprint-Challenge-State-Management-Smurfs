import React, { Component } from "react";
import SmurfForm from "./SmurfForm"
import SmurfEdit from "./SmurfEdit"
import SmurfList from "./SmurfList"

import "./App.css";

const App = () => {
  return (
    <div className = "App">
      <h1>Smurfs List</h1>
      <SmurfForm />
      <SmurfEdit />
      <SmurfList />
    </div>
  )
}

export default App;
