import React, { Profiler, useEffect, useMemo } from "react";
import { useState } from "react";
import "../styles/App.css";
import primeNumber from "../function";

const App = () => {
  return <OptimizeTheOperation />;
};

const OptimizeTheOperation = () => {
  const [number, setNumber] = useState(10000);

  const [prime, setPrime] = useState([]);

  useEffect(()=>{

    const calculatePrimeNumbers = async ()=>{
      const result = await primeNumber(number);
      setPrime(result);
    }

  },[number])
 

  const submitHandler = (event) => {
    event.preventDefault();
    setNumber(Number(event.target.num.value));
  };

  return (
    <div>
      <br />
      Enter the number:
      <form onSubmit={submitHandler}>
        <input id="num" />
        <button id="submit" type="submit">
          Click me 
        </button>
      </form>
      <br />
      <div className="width">
        Result of expensive operation:
        <ul>
          {prime.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <br />
    </div>
  );
};

export default App;
