import React, { useState } from "react";
import "./App_pay.css";
import PayPal from "./components/PayPal";


function App_pay(props) {
  const [checkout, setCheckOut] = useState(false);

  return (
    <div className="App_pay">
      {checkout ? (
        <PayPal price = {props.price} />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default App_pay;
