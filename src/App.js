import React from "react";
import "./App.css";

function App() {
  return (
    <body>
      <header>
        <span id="title">Company name</span>

        <div className="title_left">
          <span>Features</span>
          <span>Enterprise</span>
          <span>Support</span>
          <span>Pricing</span>
          <button className=" btn">Sign up</button>
        </div>
      </header>

      <main>
        <span id="main_title">Pricing</span>
        <span id="main_text">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </span>

        <div className="card_warp">
          <div className="main_card">
            <div className="main_card-header">Free</div>
            <div className="main_card-dollor">
              <span className="main_card-dollor-mo">
                <span>$0 </span>/ mo
              </span>
              <span>
                10 users included 2 GB of storage Email support Help center
                access
              </span>
              <button className="btn main_btn">Sign up for free</button>
            </div>
          </div>

          <div className="main_card">
            <div className="main_card-header">Pro</div>
            <div className="main_card-dollor">
              <span className="main_card-dollor-mo">
                <span>$15 </span>/ mo
              </span>
              <span>
                20 users included 10 GB of storage Priority email support Help
                center access
              </span>
              <button className="btn main_btn">Get started</button>
            </div>
          </div>

          <div className="main_card">
            <div className="main_card-header">Enterprise</div>
            <div className="main_card-dollor">
              <span className="main_card-dollor-mo">
                <span>$29 </span>/ mo
              </span>
              <span>
                30 users included 15 GB of storage Phone and email support Help
                center access
              </span>
              <button className="btn main_btn ">Contact us</button>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer_col">
          <img
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt="footer_img"
          />
          <span>© 2017-2018</span>
        </div>

        <div className="footer_col">
          Features
          <span>Cool stuff</span>
          <span>Random feature</span>
          <span>Team feature</span>
          <span>Stuff for developers</span>
          <span>Another one </span>
          <span>Last time</span>
        </div>

        <div className="footer_col">
          Resources
          <span>Resource</span>
          <span>Resource name</span>
          <span>Another resource</span>
          <span>Final resource</span>
        </div>

        <div className="footer_col">
          About
          <span>Team</span>
          <span>Locations</span>
          <span>Privacy</span>
          <span>Teams</span>
        </div>
      </footer>
    </body>
  );
}

export default App;
