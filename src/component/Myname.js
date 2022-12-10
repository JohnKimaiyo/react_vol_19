import React from "react";
import { useState } from "react";

export default function Myname() {
  const [name, setName] = useState("john");
  const changeName = () => {
    setName("Kimaiyo");
  };

  return (
    <div>
      <p>my name is {name}</p>
      <button onClick={changeName}>CLick Me</button>
    </div>
  );
}
