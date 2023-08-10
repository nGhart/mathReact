import React, { useState } from 'react';

function Factorial() {
  const [factResult, setFactResult] = useState('');
  function getFactorial(n) {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
  function handleFactResult() {
    const factInput = parseInt(document.getElementById('factInput').value);
    const answer = getFactorial(factInput);
    setFactResult(answer);
  }
  console.log(getFactorial());
  return (
    <div className="pages">
      <div className="factContainer">
        <h2 className="factHeader">FACTORIALS</h2>
        <p className="description">
          A set of numbers, starting with 0 and 1, and each number that follows
          being the sum of the two preceding numbers.
        </p>
        <form>
          <input type="text" id="factInput" />
        </form>
        <button onClick={handleFactResult}>Get Result</button>
        <h3 className="answer">
          Answer:
          <span id="fibResult">{factResult}</span>
        </h3>
      </div>
    </div>
  );
}

export default Factorial;
