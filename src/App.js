import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import BookList from "./component/BookList";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <BookList/>
    </div>
  );
}

export default App;
