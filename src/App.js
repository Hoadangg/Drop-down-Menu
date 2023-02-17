import logo from "./logo.svg";
import user from "../src/img/user.png";
import edit from "../src/img/edit.png";
import inbox from "../src/img/envelope.png";
import settings from "../src/img/settings.png";
import help from "../src/img/question.png";
import logout from "../src/img/log-out.png";
import "./App.css";
import { RoomData } from "./data";
import React, { useState, useEffect, useRef } from "react";
import App_pay from "./Pay/App_pay";
import App_receipt from "./Receipt/App_Receipt";
var arr = [];
var sum = 0;
var result = 0;
function App() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      arr.push(parseInt(event.target.value));
      arr.forEach((element) => {
        sum += element;
      });
    } else {
      arr.push(-parseInt(event.target.value));
      arr.forEach((element) => {
        sum += element;
      });
    }
    result = sum;
    sum = 0;
    setIsSubscribed((current) => !current);
  };
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="App">
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <h3 className="showroom_container">Show room</h3>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <div className="dropdownmenu-item">
            {RoomData.map((item) => (
              <div className="dropdown-item">
                <ul>
                  <DropdownItem
                    name={item.name}
                    maxpeople={item.maxpeople}
                    decs={item.desc}
                    price={item.price}
                  />
                </ul>
                <div>
                  <label htmlFor="subscribe">
                    <input
                      type="checkbox"
                      value={item.price}
                      onChange={handleChange}
                      id="subscribe"
                      name="subscribe"
                    />
                  </label>
                </div>
              </div>
            ))}
            
          </div>

          <div className="dropdown_result">
              Total Price: {result}
            </div>
            <br/>
            <div className="dropdown_checkpay">
            <App_pay price = {result} >
            
            </App_pay>
            </div>
          
        </div>
        

      </div>
     
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <span> {props.name} </span>
      <span>Max people: {props.maxpeople}</span>
      <span>Description: {props.decs}</span>
      <span>Price: {props.price}</span>
    </li>
  );
}

export default App;
