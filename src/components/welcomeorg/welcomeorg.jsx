import React, { Component } from 'react';
import './welcomeorg.css'
// import Image from '../../../public/img/about.jpg';
export class welcome extends Component {

  render() {
    return (
      <div id="welcome">
          <div className="container">
         <div className="row">
         <div className="col-xs-12 col-md-6">
            <img
            src="img/testimonials/welcome.PNG"
            className="welcomeimaageright"
            alt="Project Title"
                        alt="Project Title"
                      />
    
           </div>
            <div className="col-xs-12 col-md-6 ">
              <div className="welcomeheadermain">

            <h1 id="welcomeheaderheading">Welcome to <span  className="welcomeheaderheadingblue">Orizon<br/> Technologies</span></h1>
            {/* <h1 className="welcomeheaderheadingblue">Information technology</h1> */}
            <p className="welcomeheaderheadingpara">  Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through DSI’s distinct front-end based application concept.</p>
           
            <p className="welcomeheaderheadingpara"> Managed by a team of professional experts with extensive experience and impressive track records, DSI believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
            {/* <button className="welcomeheaderbutton">Read More</button> */}
            </div>
            </div>
            </div>
          
          </div>
        </div>
        )
  }
}

export default welcome;
