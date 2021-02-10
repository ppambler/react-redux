import React, { useState } from "react";

function Test() {
  const [n, setN] = useState(0);
  const add1 = () => {
    setN(n + 1);
  };
  return (
    <div>
      <div>{n}</div>
      <button
        onClick={() => {
          add1();
        }}
      >
        +1
      </button>
    </div>
  );
}

export default Test