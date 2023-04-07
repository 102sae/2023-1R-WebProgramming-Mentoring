import React, { useState } from "react";
import "./App.css";

function Card(props) {
  return (
    <div className="main_card">
      <div className="main_card_header">{props.title}</div>
      <div className="main_card_dollor">
        <span className="dollor_mo">
          <span>${props.counter} </span>/ mo
        </span>
        <span>
          {props.user} users included {props.memory} GB of storage Email support
          Help center access
        </span>

        <button className="btn main_btn" onClick={props.onClick}>
          {props.btn_txt}
        </button>
      </div>
    </div>
  );
}

function App() {
  const [counter, setCounter] = useState({
    free: 0,
    pro: 10,
    enterprise: 20,
  });

  const onClick = (type) => () => {
    if (type === "free") {
      setCounter((prev) => ({ ...prev, free: prev.free + 1 }));
      return; //뒤에있는거 안읽으니까 else랑 같음
    }

    if (type === "pro") {
      setCounter((prev) => ({ ...prev, pro: prev.pro + 1 }));
      return;
    }

    if (type === "enterprise") {
      setCounter((prev) => ({ ...prev, enterprise: prev.enterprise + 1 }));
      return;
    }
  };
  const cardData = [
    {
      title: "Free",
      counter: counter.free,
      user: "10",
      memory: "2",
      btn_txt: "Sign up for free",
      onClick: onClick("free"),
    },
    {
      title: "Pro",
      counter: counter.pro,
      user: "20",
      memory: "10",
      btn_txt: "Get started",
      onClick: onClick("pro"),
    },
    {
      title: "Enterprise",
      counter: counter.enterprise,
      user: "30",
      memory: "15",
      btn_txt: "Contact us",
      onClick: onClick("enterprise"),
    },
  ];

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
          {cardData.map((cardItem, index) => (
            <Card {...cardItem} key={`card_item_${index}`} />
          ))}
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
