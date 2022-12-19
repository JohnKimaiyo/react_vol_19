import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import BookList from "./component/BookList";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from "./component/ThemeToggle";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
