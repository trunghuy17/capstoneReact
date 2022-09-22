import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.userReducer);
  const renderNavLink = () => {
    if (userLogin) {
      return (
        <NavLink className="nav--link" to="/profile">
          {userLogin.email}
        </NavLink>
      );
    }
    return <NavLink to="/login">Login</NavLink>;
  };
  return (
    <header>
      <div className="container-fluid">
        <div className="header_top row">
          <NavLink to="/" className="logo col-6">
            <img src="./img/image 3.svg" alt />
          </NavLink>
          <div className="header_right col-6">
            <div className="content ">
              <NavLink to="/search">
                <i className="fa fa-search"></i>
                Search
              </NavLink>
              <NavLink className="shop" to="/carts">
                <i className="fa fa-cart-plus"></i>
                <span>(1)</span>
              </NavLink>
              {renderNavLink()}
              <NavLink to="register">Register</NavLink>
            </div>
          </div>
        </div>
        <nav className="nav">
          <a className="nav-link active line" href="#">
            Home
          </a>
          <a className="nav-link nguoi" href="#">
            Men
          </a>
          <a className="nav-link nguoi" href="#">
            Woman
          </a>
          <a className="nav-link " href="#">
            Kid
          </a>
          <a className="nav-link " href="#">
            Sport
          </a>
        </nav>
      </div>
    </header>
  );
}
