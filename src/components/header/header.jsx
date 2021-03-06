import React from 'react';
import ReactDOM from 'react-dom';
 import Image1 from '../carousel/about.jpg'
import InfiniteCarousel from 'react-leaf-carousel';
// import './carousel.css'
import './header.css'
function carousel() {
    return (
        <div>
            <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={1}
    sideSize={0.1}
    slidesToScroll={0}
    slidesToShow={0}
    scrollOnDevice={true}
  >
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
      <div className="parentcou">



        




      <div id="welcome">
          <div className="container">
         <div className="row">
         <div className="col-xs-12 col-md-6">
            <img
            src={Image1}
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
</div>
 
 
    
   
   
    <div>
    </div>
  </InfiniteCarousel>
        </div>
    )
}

export default carousel












// import React, { Component } from 'react';
// import './header.css'
// export class header extends Component {

//   render() {
//     return (
      // <div id="headers">
      //    <div className="row">
      //    <div className="container">
      //       <div className="col-xs-12 col-md-6 ">
      //         <div className="headermain">

      //       <h1 className="headerheading">Making the most of the <br/>ever-growing</h1>
      //       <h1 className="headerheadingblue">Information technology</h1>
      //       <p className="headerheadingpara">Managed by a team of professional experts with extensive<br/> experience and impressive track records</p>
      //       <button className="headerbutton">Read More</button>
      //       </div>
      //       </div>

      //       <div className="col-xs-12 col-md-6">
      //       <img
      //       src="img/testimonials/Capture.PNG"
      //       className="imaageright"
      //       alt="Project Title"
      //                   alt="Project Title"
      //                 />
    
      //      </div>
      //     </div>
      //   </div>
      //   </div>
      //   )
//   }
// }

// export default header;