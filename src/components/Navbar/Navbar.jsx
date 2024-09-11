import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";


const Navbar = () => {
  const { setCurrency } = useContext(CoinContext)
  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "yen":
        setCurrency({ name: "jpy", symbol: "¥" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
    }
  }
  return (
    <div className="navbar">
      <Link to={'/'}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
         <Link to={'/'}>
        <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li></li>
      </ul>
      <div className="navbar-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="yen">YEN</option>
        </select>
        <button>
          Sign Up
          <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
