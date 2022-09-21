import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer_top">
        <div className="container">
          <div className="footer_list row">
            <div className="item col-4">
              <h5>GET HELP</h5>
              <div className="item-body">
                <a href="#">Contanct</a>
                <a href="#">Shopping</a>
                <a href="#">NIKEiD</a>
                <a href="#">Nike+</a>
              </div>
            </div>
            <div className="item col-4 item-br">
              <h5>ORDERS</h5>
              <div className="item-body">
                <a href="#">Payment options</a>
                <a href="#">Shipping and delivery</a>
                <a href="#">Returns</a>
              </div>
            </div>
            <div className="item col-4">
              <h5>REGISTER</h5>
              <p>
                Createe one account to manage everything you do with Nike, from
                your shopping preferences to your Nike+ activity.
              </p>
              <a className="style_red" href="#">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="footer_list row">
            <div className="item col-4">
              <h5>EMAIL SIGN UP</h5>
              <p>Be the first to know about new product and special offers.</p>
              <a href="#">Sign up now</a>
            </div>
            <div className="item col-4 item-br">
              <h5>GIFT CARDS</h5>
              <p>Give the gift thar always fits.</p>
              <a href="#">View cards</a>
            </div>
            <div className="item col-4">
              <h5>STORES NEAR YOU</h5>
              <p>Locate Nike retail store or authorized retailer.</p>
              <a href="#">Search</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
