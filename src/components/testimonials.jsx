import React, { Component } from "react";

export class testimonials extends Component {
  render() {
    return (
      <div id="testimonials">
        <div >
          <div className="section-title text-center">
            <h3>Product and Services</h3>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="testimonial">
                    <div className="testimonial-image1">
                      <div className="testimonial-image">
                        {" "}
                        <img src={d.img} alt="" />{" "}
                        <div className="testimonial-content">
                      <div className="testimonial-meta"> {d.name} </div>
                      {/* <div className="testimonial-metapara"> {d.text}</div> */}
                        
                      
                      </div>
                      </div>
                      </div>
                      <div className="testimonial-content">
                      <div className="testimonial-meta"> . </div>
                      <div className="testimonial-metapara"> {d.text}</div>
                      <div className="testimonial-image1">
                        <button className="headerbutton1">Read More</button>
                      </div>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default testimonials;
