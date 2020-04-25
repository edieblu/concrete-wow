import React from 'react';

import Logo from './Components/Logo/Logo';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  const _onClick = () => {
    alert('Hey it works a little bit 🎉');
  };
  return (
    <>
      <div className="body">
        <Logo />
        <header className="">
          <h1 className="title">Factually</h1>
          <div className="tagline">
            <p>This is where we explain what this website does.</p>
            <p>Maybe even in two lines.</p>
          </div>
          <div className="search">
            <input type="text" className="search-term" placeholder="Type a website url"></input>
            <button type="submit" className="search-button" onClick={_onClick}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </header>

        <div></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
