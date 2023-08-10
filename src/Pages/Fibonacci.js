import React, { useState } from 'react';

function Fibonacci() {
  const [fibResult, setFibResult] = useState('');
  function getFibSequence(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.join(', ');
  }
  function handleFibResult() {
    const fibInput = parseInt(document.getElementById('fibInput').value);
    const answer = getFibSequence(fibInput);
    setFibResult(answer);
  }
  console.log(getFibSequence());
  return (
    <div className="pages">
      <div className="fibContainer">
        <h2 className="fibHeader">FIBONACCI SEQUENCE</h2>
        <p className="description">
          A set of numbers, starting with 0 and 1, and each number that follows
          being the sum of the two preceding numbers.
        </p>
        <form>
          <input type="text" id="fibInput" />
        </form>
        <button onClick={handleFibResult}>Get Result</button>
        <h3 className="answer">
          Answer:
          <span id="fibResult">{fibResult}</span>
        </h3>
      </div>
    </div>
  );
}

export default Fibonacci;
