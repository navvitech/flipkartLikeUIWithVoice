import React from "react";
import { NavLink } from "react-router-dom";
import "./Orders.css";

const Navbar = ({ text }) => {
  return (
    <div className="orders">
      <div className="orders__header">
        <NavLink to="/">
          <h1>Home</h1>
        </NavLink>
        <NavLink to="/cart" activeClassName="orders--active">
          <h1>Cart</h1>
        </NavLink>
        <NavLink to="/orders" activeClassName="orders--active">
          <h1>Orders</h1>
        </NavLink>
      </div>
      <div className="orders__body">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Navbar;
