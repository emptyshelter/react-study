import React from 'react';

let number = 0;

function plus() {
  number += 1;
  document.getElementById("number").innerHTML = number;
};

function minus() {
  number--;
  document.getElementById("number").innerHTML = number;
};
function reset() {
  console.log("리셋합니다");
  number = 0;
  document.getElementById("number").innerHTML = number;
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="number">{number}</h1>
        <input type="button" value="+" onClick={plus}></input>
        <input type="button" value="-" onClick={minus} ></input>
        <input type="button" value="reset" onClick={reset}></input>
      </header>
    </div>
  );
}
export default App;
