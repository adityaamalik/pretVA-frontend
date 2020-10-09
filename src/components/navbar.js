import React from 'react';
import logo from '../imgs/logo.png';
import '../css/navbar.css';

function Navbar() {
  return (
    <div id="outercontainer">
        <div className="row justify-content-between m-3">
            <div className="col-3"><img src={logo} alt="LOGO" height="50px" width="auto"/></div>
            <div className="col-6 lead">
                <ul id="navList" className="mt-2">
                    <li><button className="btn">About</button></li>
                    <li className="ml-4"><button className="btn">Services</button></li>
                    <li className="ml-4"><button className="btn btn-outline-warning active">Search</button></li>
                    <li className="ml-4"><button className="btn">Feedback & Support</button></li>
                </ul>
            </div>
            <div className="col-3">
                <div id="logoutsection" className="mt-2">
                    <i className="fa fa-bell-o" aria-hidden="true"></i>
                    <button className="btn">My Account</button>
                    <button className="btn btn-outline-dark active">Logout</button>
                </div>
            </div>
        </div>
        <hr id="bottomline"></hr>
    </div>
  );
}

export default Navbar;
