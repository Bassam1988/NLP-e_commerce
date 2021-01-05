import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/auth";

function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="header-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="user-menu">
                {auth.isAuthenticated ? (
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-user"></i> My Account
                      </a>
                    </li>

                    <li>
                    <a href="#" onClick={() => dispatch(logoutUser())} ><i  className="fa fa-user"></i> Logout</a>
                    </li>
                  </ul>
                ) : (
                  <ul >
                    <li >
                      <Link to="/register" className="fa fa-user">
                        Register
                      </Link>
                    </li>
                    <li >
                      <Link to="/login" className="fa fa-user">
                        Login
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className="col-md-4">
              <div className="header-right">
                <ul className="list-unstyled list-inline">
                  <li className="dropdown dropdown-small">
                    <a
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      className="dropdown-toggle"
                      href="#"
                    >
                      <span className="key">currency :</span>
                      <span className="value">USD </span>
                      <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">USD</a>
                      </li>
                      <li>
                        <a href="#">INR</a>
                      </li>
                      <li>
                        <a href="#">GBP</a>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown dropdown-small">
                    <a
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      className="dropdown-toggle"
                      href="#"
                    >
                      <span className="key">language :</span>
                      <span className="value">English </span>
                      <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">English</a>
                      </li>
                      <li>
                        <a href="#">French</a>
                      </li>
                      <li>
                        <a href="#">German</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-branding-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="logo">
                <h1>
                  <a href="/">
                    WYW-WYD <br></br> <span>BuyWhatYouWantSellWhatYouDo</span>
                  </a>
                </h1>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="shopping-item">
                {auth.isAuthenticated ? ( <span className="navbar-text mr-3">
                      <strong>
                        {auth.user ? `Welcome ${auth.user.first_name}` : ""}
                      </strong>
                    </span>) : ( <span className="navbar-text mr-3">
                      <strong>
                        Welcome to our website, Please register 
                      </strong>
                    </span>)}
             
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mainmenu-area">
        <div className="container">
            <div className="row">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div> 
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="dashboard">Home</Link></li>
                        <li><a href="shop.html">Shop page</a></li>
                        {auth.user && auth.user.groups[0]!=6 ? (<li><Link to="AddProduct">Add product</Link></li>):("")}
                        
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="#">Category</a></li>
                        <li><a href="#">Others</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>  
            </div>
        </div>
    </div>
    </div>
  );
}

export default Header;
