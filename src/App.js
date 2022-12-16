import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import BookList from "./component/BookList";
import ThemeContextProvider from "./context/ThemeContext";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
