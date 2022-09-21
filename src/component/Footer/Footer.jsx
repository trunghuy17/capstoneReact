import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer_top">
        <div className="container">
          <div className="footer_list row">
            <div className="item col-4">
              <h5>GET HELP</h5>
              <div className="item-body">
                <ul>
                  <li>
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="nav-link" to="/">
                      Nike
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/">
                      Adidas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item col-4 ">
              <h5>SUPPORT</h5>
              <div className="item-body">
                <ul>
                  <li>
                    <NavLink className="nav-link" to="/">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/">
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/">
                      Help
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/">
                      Phone
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item col-4">
              <h5>REGISTER</h5>
              <div className="item-body">
                <ul>
                  <li>
                    <NavLink className="nav-link" to="/register">
                      register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/login">
                      login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>
          © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn
          Khải.
        </p>
      </div>
    </footer>
  );
}
