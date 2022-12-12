import React from "react";

export default function Event() {
  const developerClick = () => {
    alert("Good monring React developer");
  };

  return (
    <div className="App">
      <button onClick={developerClick}>Click Me</button>
    </div>
  );
}
