import React, { useState } from "react";
import { useRef } from "react";

const Form = () => {
  const [name, setName] = useState();
  console.log(name);
  console.log("State render");
  console.log("ref render");
  const names = useRef("");
  console.log(names.current);

  const refs = (e) => {
    e.praventDefault();
    console.log(names.current.value);
  };

  return (
    <div>
      <form>
        <h2>State render</h2>
        <input onChange={(e) => setName(e.target.value)} type="text" />
        <button>send</button>
        <h2>State Ref</h2>
        <input ref={names} type="text" placeholder="surname" />
        <button onClick={refs}>ref</button>
      </form>
    </div>
  );
};

export default Form;
