
import React from 'react';
import ReactDOM from 'react-dom';
 import Image1 from '../carousel/about.jpg'
import InfiniteCarousel from 'react-leaf-carousel';
import './carousel.css'
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
    sidesOpacity={0.5}
    sideSize={0.1}
    slidesToScroll={1}
    slidesToShow={1}
    scrollOnDevice={true}
  >
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
 <div id="caeousel">
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
    
   
   
    <div>
    </div>
  </InfiniteCarousel>
        </div>
    )
}

export default carousel
