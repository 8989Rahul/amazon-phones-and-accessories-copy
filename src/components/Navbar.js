import React, { Component } from "react";
import {
  MdSearch,
  MdLanguage,
  MdKeyboardArrowDown
} from "react-icons/md";
import { Card } from 'react-bootstrap';


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm  main-nav">
          <div className="title">
            <span className="navbar-brand brand-nav"></span>

            <div className="deliver">
              <span class="location">
                
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "0.8rem", marginBottom: "0.2rem" }}>
                  Deliver to
                </span>
                <strong style={{ fontSize: "0.9rem" }}> India</strong>
              </div>
            </div>
          </div>

          <div className="search-bar">
            <div className="search-panel">
              <button
                type="button"
                className="btn btn-default dropdown-toggle search-dropdown"
                data-toggle="dropdown"
              >
                <span id="search_concept" className="caret">Cell Phones & Accessories
                </span>
                
              </button>
              <input type="text" className="input-search" />
              <button className="search-icon1">
                <span className="search-icon2">
                  <MdSearch />
                </span>
              </button>
            </div>

            <div className="information">
              <ul class="info-list">
                <li>
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      fontSize:"0.9rem",
                      margin: "0.2rem"
                    }}
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Departments
                    <span className="caret" />
                  </button>
                </li>
                <li>
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#C9CACA",
                      fontSize: "0.85rem",
                      margin: "0.2rem"
                    }}
                  >
                    Today's Deal
                  </button>
                </li>
                <li>
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#C9CACA",
                      fontSize: "0.9rem",
                      margin: "0.2rem"
                    }}
                  >
                    Yours Amazon.com
                  </button>
                </li>
                <li>
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#C9CACA",
                      fontSize: "0.9rem",
                      margin: "0.2rem"
                    }}
                  >
                    Gift Cards
                  </button>
                </li>
                <li>
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#C9CACA",
                      fontSize: "0.9rem",
                      margin: "0.2rem"
                    }}
                  >
                    Help
                  </button>
                </li>
                <li>
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#C9CACA",
                      fontSize: "0.9rem",
                      margin: "0.2rem"
                    }}
                  >
                    Registry
                  </button>
                </li>
                <li>
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#C9CACA",
                      fontSize: "0.9rem",
                      margin: "0.2rem"
                    }}
                  >
                    Sell
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="learn-more">
              <h6>Why shop with amezon? Learn More</h6>
            </div>

            <ul class="personal-list">
              <li className="personal-list-li">
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#B7B9BB",
                    fontSize: "0.9rem",
                    
                  }}
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <h6 style={{ marginBottom: "auto" , fontSize:"0.85rem"}}>EN</h6>
                  <span>
                    <MdLanguage />
                    <span className="caret" />
                  </span>
                </button>
              </li>
              <li className="personal-list-li">
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#FFFFFF",
                    fontSize: "0.9rem",
                    marginTop: "auto",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      fontSize: "0.8rem",
                      marginBottom: "0.2rem",
                      color:"#B7B9BB"
                    }}
                  >
                    Hello, Sign in
                  </span>
                  <strong class="dropdown-toggle" data-toggle="dropdown">
                    Account & List
                  </strong>
                  <span className="caret" />
                </button>
              </li>
              <li className="personal-list-li">
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#FFFFFF",
                    fontSize: "0.9rem"
                    
                  }}
                >
                  <strong>Order</strong>
                </button>
              </li>
              <li className="personal-list-li">
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#FFFFFF",
                    fontSize: "0.9rem",
                    display:"flex"
                  }}
                >
                  <span className="cart-logo">
                  <span className="nav-cart-count">0</span> 
                  </span>
                  <strong className="cart-text">Cart</strong>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <Card>
        <div className="tab">
          <h6 style={{fontSize: "0.8rem" , marginRight: "auto",  marginBottom:"0.5rem", marginTop:"0.5rem", marginLeft:"1.7rem" }}>
            1-16 of over 60,000 results for{" "}
            <span style={{ color:"#DB9763", fontSize:"0.8rem"}}>Cell Phones & Accessories</span>
          </h6>
          <button
          style={{fontSize:"0.7rem", marginBottom:"0.5rem", marginRight:"0.5rem", marginTop:"0.5rem"}}>
            Sort by: Featured
            <MdKeyboardArrowDown />
          </button>
        </div>
        </Card>
      </div>
    );
  }
}
