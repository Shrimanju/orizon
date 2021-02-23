import React, { Component } from "react";
import '../Footer/footer.css'
export class Footer extends Component {
	render() {
		return (
			<footer class="footers">
				<div class="container">
					<div class="rows">
						{/* <div class="footers-cols">
							<div className="logo-image">
								<a className="navbar-brand1" href="#">
									ORIZON
          						</a>
							</div>
						<div>
								<ul>
									<li>
										<a href="#">Orizon Technologies Ltd</a>
										<a href="#">Ruko Jalur Sutera 29A No. 53
										Alam Sutera Serpong, Tangerang 15323
										</a>
									</li>
								</ul>
							</div>

						</div> */}
						<div class="footers-col">
							<div className="logoandname">
						<div className="logo-image"></div>
						<a className="orizon" href="#">
									ORIZON
          						</a>
								  </div>
							<ul>
								<li>
									<a href="#">Orizon Technologies Ltd</a>

								</li>
								<li>
									<a href="#">Ruko Jalur Sutera 29A No. 53
										</a>
								</li>
								<li>
									<a href="#">Alam Sutera Serpong, Tangerang 15323</a>
								</li>
							</ul>
						</div>
						<div class="footers-col">
							<h4 class="h4">Contact</h4>
							<ul>
								<li>
									<a href="#">Phone : +62.21.5314.1135</a>

								</li>
								<li>
									<a href="#">Fax : +62.21.5314.1135</a>
								</li>
								<li>
									<a href="#">Email : community@orizon.com</a>
								</li>
							</ul>
						</div>
						<div class="footers-col">
							<h4></h4>
							<ul>
								<li><a href="#">General Cosmetic</a></li>
								<li><a href="#">Dental Implants</a></li>
								<li><a href="#">Orthodontics</a></li>
								<li><a href="#">Laser Dental Treatments</a></li>
								<li><a href="#">Smile Designing</a></li>
								<li><a href="#">Child Dentistry</a></li>
								{/* <li><a href="#">Facial Surgery</a></li> */}
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
