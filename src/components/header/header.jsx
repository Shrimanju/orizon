import React, { Component } from 'react';
import './header.css'
// import Image from '../../../public/img/about.jpg';
export class header extends Component {

  render() {
    return (
      <div id="headers">
         <div className="row">
         <div className="container">
            <div className="col-xs-12 col-md-6 ">
              <div className="headermain">

            <h1 className="headerheading">Making the most of the <br/>ever-growing</h1>
            <h1 className="headerheadingblue">Information technology</h1>
            <p className="headerheadingpara">Managed by a team of professional experts with extensive<br/> experience and impressive track records</p>
            <button className="headerbutton">Read More</button>
            </div>
            </div>

            <div className="col-xs-12 col-md-6">
            <img
            src="img/testimonials/Capture.PNG"
            className="imaageright"
            alt="Project Title"
                        alt="Project Title"
                      />
    
           </div>
          </div>
        </div>
        </div>
        )
  }
}

export default header;
