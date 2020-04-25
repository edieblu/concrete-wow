import React from "react";

import Logo from "./Components/Logo/Logo";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  const _onClick = () => {
    alert("Hey it works a little bit 🎉");
  };
  return (
    <>
      <div className="body">
        <Logo />
        <header className="">
          <h1 className="title">Factually</h1>
          <div className="tagline">
            <h3>Spot bad information. Fight COVID-19. Stay safe.</h3>
            <h3>Want to know if you can trust a website?</h3>
          </div>
          <div className="search">
            <input
              type="text"
              className="search-term"
              placeholder="Paste a link here"
            ></input>
            <button type="submit" className="search-button" onClick={_onClick}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </header>

        <div className="white-bg">
          <div className="more-info">
            <div>
              <h2>No fuss and no frills</h2>
              <p>
                We simply tell you if you can trust COVID-19 information on a
                website or not.
              </p>
              <p className="important">
                Solid information and credible sources?
                <br />
                <i className="fa fa-thumbs-up"></i> Thumbs up. You can trust
                this website.
              </p>
              <p className="important">
                Pandering conspiracy theories and claims bleaching your lungs
                kills Coronavirus?
                <br />
                <i className="fa fa-thumbs-down"></i> Thumbs down. Stay away
                from this site.
              </p>
              <p><strong>Simple!</strong></p>
            </div>
            <img
              src="/icons-images/Screenshot.jpg"
              alt="Screenshot of a news website"
            ></img>
          </div>
        </div>

        <div className="more-info third-section">
          <h2>There is a lot of information out there</h2>
          <p>
            And more keeps coming out every day. It’s hard to know what you can
            trust, and bad information can be very dangerous. Factually is a
            platform that lets you check the credibility of a website.
          </p>
          <p>
            We do this by going through the content of the website and looking
            at its sources of information. This makes it easier to spot real
            facts about COVID-19, helping you take care of yourself and others.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
