import React, { useState } from "react";
import "./App.css";

function Card(props) {
  const [counter, setCounter] = useState(0);
  const handleBtnClick = () => {
    setCounter((prev) => prev + 1);
    console.log(counter);
    setCounter((prev) => prev + 1);
    console.log(counter);
    setCounter((prev) => prev + 1);
    console.log(counter);
    setCounter((prev) => prev + 1);
    console.log(counter);
  };

  return (
    <div className="main_card">
      <div className="main_card_header">{props.title}</div>
      <div className="main_card_dollor">
        <span className="dollor_mo">
          <span>${props.money} </span>/ mo
        </span>
        <span>
          {props.user} users included {props.memory} GB of storage Email support
          Help center access
        </span>
        <button onClick={handleBtnClick} className="btn main_btn">
          {props.btn_txt}
        </button>
        <h3>{counter}</h3>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <header>
        <span>Company name</span>

        <div className="title_left">
          <span>Features</span>
          <span>Enterprise</span>
          <span>Support</span>
          <span>Pricing</span>
          <button className=" btn">Sign up</button>
        </div>
      </header>

      <main>
        <span>Pricing</span>
        <span>
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </span>

        <div className="card_warp">
          <Card
            title="Free"
            money="0"
            user="10"
            memory="2"
            btn_txt="Sign up for free"
          ></Card>

          <Card
            title="Pro"
            money="15"
            user="20"
            memory="10"
            btn_txt="Get started"
          ></Card>

          <Card
            title="Enterprise"
            money="29"
            user="30"
            memory="15"
            btn_txt="Contact us"
          ></Card>
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
    </div>
  );
}

export default App;
