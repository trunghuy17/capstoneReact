import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.userReducer);
  const { gioHang } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
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
  const tongSoLuong = () => {
    console.log({ gioHang });
    return gioHang?.reduce((tsl, sp, index) => {
      return (tsl += sp.quantity);
    }, 0);
  };

  return (
    <header>
      <div className="container-fluid">
        <div className="header_top row">
          <NavLink to="/" className="logo col-6">
            <img
              src="./img/image 3.svg
            "
              alt="..."
            />
          </NavLink>
          <div className="header_right col-6">
            <div className="content ">
              <NavLink to="/search">
                <i className="fa fa-search"></i>
                Search
              </NavLink>
              <NavLink className="shop" to="/carts">
                <i className="fa fa-cart-plus"></i>
                <span>({tongSoLuong()})</span>
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
