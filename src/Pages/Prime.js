import React, { useState } from 'react';

function Prime() {
  const [prime, setPrime] = useState('');
  function getPrime(n) {
    if (n < 2) {
      return 'Enter a number greater than one';
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return `${n} is not a prime`;
      }
    }
    return `${n} is a prime`;
  }
  function handlePrimeResult() {
    const primeInput = parseInt(document.getElementById('primeInput').value);
    const answer = getPrime(primeInput);
    setPrime(answer);
  }
  return (
    <div className="pages">
      <div className="primeContainer">
        <h2 className="primeHeader">PRIME NUMBERS</h2>
        <p className="description">
          A number with two factors, the number and 1
        </p>
        <form>
          <input type="text" id="primeInput" />
        </form>
        <button onClick={handlePrimeResult}>Get Result</button>
        <h3 className="answer">
          Answer:
          <span id="primeResult">{prime}</span>
        </h3>
      </div>
    </div>
  );
}

export default Prime;
