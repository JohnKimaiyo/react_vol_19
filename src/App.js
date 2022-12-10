import React from "react";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Title from "./component/Title";
import Myname from "./component/Myname";
import Mycount from "./component/Mycount";
import Form from "./component/Form";
import Users from "./component/Users";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="FrontEnd Developer" />
      <Title name="solidity Developer" />
      <Title name="Mobile Devloper" />
      <Myname />
      <Mycount />
      <Form />
      <Users/>
    </div>
  );
}

export default App;
