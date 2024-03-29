import React, { useRef } from "react";
import { useState, useMemo, useCallback } from "react";

const Counter = () => {
  console.log("render Counter");
  const [number, setNumber] = useState(30);
  let num = useRef(0);

  function handleClick(e) {
    e.stopPropagation();
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    num.current++;
    console.log(num.current);
  }
  const fibFx = useCallback(function fib(n) {
    if (n === 1 || n === 2) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  }, []);
  const fibMemoized = useMemo(() => {
    return fibFx(number);
  }, [number, fibFx]);
  return (
    <div>
      <h1 style={{ color: "white" }}>
        {number} | {fibMemoized}
      </h1>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Counter;
