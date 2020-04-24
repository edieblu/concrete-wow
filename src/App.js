import React from "react";
import "./App.css";

function App() {
  const _onClick = () => {
    alert("Hey it works a little bit 🎉");
  };
  return (
    <div className="App">
      <header className=""></header>
      <div className="wrap">
        <h1>Concrete-Wow lives!</h1>
        <div className="search">
          <input
            type="text"
            className="search-term"
            placeholder="Type a website url"
          ></input>
          <button type="submit" className="search-button" onClick={_onClick}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
