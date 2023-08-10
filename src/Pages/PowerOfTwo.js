import React, { useState } from 'react';

function PowerOfTwo() {
  const [powerResult, setPowerResult] = useState('');
  function getPower2(n) {
    if (n < 1) {
      return (document.getElementById('power2Result').innerHTML = 'false');
    }
    while (n > 1) {
      if (n % 2 !== 0) {
        return (document.getElementById('power2Result').innerHTML = 'false');
      }
      n = n / 2;
    }
    document.getElementById('power2Result').innerHTML = 'true';
  }
  function handlePowerResult() {
    const power2Input = parseInt(document.getElementById('power2Input').value);
    const answer = getPower2(power2Input);
    setPowerResult(answer);
  }
  return (
    <div className="pages">
      <div className="power2Container">
        <h2 className="power2Header">POWER OF TWO</h2>
        <p className="description">Find if a number is a power of two</p>
        <form>
          <input type="text" id="power2Input" />
        </form>
        <button onClick={handlePowerResult}>Get Result</button>
        <h3 className="answer">
          Answer:
          <span id="power2Result">{powerResult}</span>
        </h3>
      </div>
    </div>
  );
}

export default PowerOfTwo;
