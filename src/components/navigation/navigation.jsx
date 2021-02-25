import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import '../navigation/navigation.css';
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Login from '../login/login.js'
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
export class Navigation extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (

      <nav id="menu" className=" navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
      <button
      type="button"
      className="navbar-toggle collapsed"
      data-toggle="collapse"
      data-target="#bs-example-navbar-collapse-1"
    >
      {" "}
      <span className="sr-only">Toggle navigation</span>{" "}
      <span className="icon-bar"></span>{" "}
      <span className="icon-bar"></span>{" "}
      <span className="icon-bar"></span>{" "}
    </button>
    <div className="parentlogo">
    <div className="logo-image">
         <a className="navbar-brand page-scroll" href="#page-top">
            ORIZON
          </a></div>
          </div>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-center option">
              <li>
                <a href="#" className="page-scroll">
                 Services
                </a>
              </li>
              {/* <li>
              <Link to={`/about`} >
                  About
                </Link> */}
                {/* <a href="#about" className="page-scroll">
                  About
                </a> */}
              {/* </li> */}
              <li>
                <a href="#" className="page-scroll">
                 Products
                </a>
              </li>
              <li>
                <a href="#" className="page-scroll">
                 Login
                </a>
              </li>
              <li>
                <a href="#" className="page-scroll">
                Technology
                </a>
              </li>
              <li>
                <a href="#" className="page-scroll">
                 Sign up
                </a>
              </li>
              <li>
              <Link to={`/about`} >
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="page-scroll">
                 Client
                </a>
              </li>
              <li>
                <a href="#" className="page-scroll" onClick={this.onOpenModal}>
                 Login
                
                </a>
               <div className="modal1">
        <Modal open={open} onClose={this.onCloseModal}className="modal">
        <Login/>
        </Modal>
        </div>
              </li>
             

              <li className="logoss">
                <a href="#" className="page-scroll logoss" >
                {/* <i class="fas fa-home"></i> */}a
                </a>
              </li>
              <li>
                <a href="#" className="page-scroll">
                {/* <i class="far fa-envelope"></i> */}b
                </a>
              </li>
              <li>
                <a href="#" className="page-scroll">
               c
                </a>
              </li>
              
              
              


            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
