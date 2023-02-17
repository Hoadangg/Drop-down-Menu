import React, { useState, useEffect, useRef } from "react";
import { ReceiptData } from "./data_Receipt";
import "./App_Receipt.css";

var tota = 0;
var tot = [];
function App_receipt() {
  const [state, setState] = useState(0)
  return (
    <div className="App_receipt">
      <h1 className="App_receipt-title">Receipt</h1>
      <div>
        <ul className="receipt_customer">
          <span>Customer name: Hoa</span>
          <span>Phone number: 096578576</span>
          <span>Address: HCM, Viet Nam</span>
        </ul>
      </div>
      <div className="receipt_container">
        <table className="receipt-table">
          <thead>
          <tr className="receipt-header">
            <th>Hotel</th>
            <th>Room</th>
            <th>Number of day</th>
            <th>Price</th>
            <th>Total Price</th>
          </tr>
          </thead>
          <tbody className="receipt-body-container">
            {ReceiptData.map((item, index) => (
              <tr key={index} className="receipt-body-list">
                <td className="receipt-body-item">{item.hotel_name}</td>
                <td className="receipt-body-item">{item.room}</td>
                <td className="receipt-body-item">{item.date}</td>
                <td className="receipt-body-item">{item.price}</td>
                <td className="receipt-body-item">
                  <Receipt price_re={parseInt(item.price ) }   time = {parseInt(item.date)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="receipt_total">
        <div className="receipt_total-item total_price">
          Total:<Total />
        </div>
        <div className="receipt_total-item total_pay">
          <button className="total_pay-item check_paypal">PayPal</button>
          <button className="total_pay-item check_momo">MoMo</button>
        </div>
      </div>
    </div>
  );

  function Receipt(propss) {
    tot.push(propss.price_re * propss.time);
    console.log(tot);

    return (
      <div>
        <div>{propss.price_re*propss.time}</div>
      </div>
    );
  }

  function Total() {
    tot.forEach((element) => {
      tota += element;
    });
    console.log(tota);
    return(
      <span>{tota/4}</span>
    )
  }
}

export default App_receipt;
