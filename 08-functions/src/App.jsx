import React from "react";

const App = () => {
  function btnClicked() {
    console.log("hello");
    document.body.style.backgroundColor = "yellow";
  }

  return (
    <button onClick={btnClicked}>
      Click
    </button>
  );
};

export default App;