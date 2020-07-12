import React from 'react'
import { Link } from 'react-router-dom'


const ContactUs = () => {
	return (
		<div className="container">
			<h3 className="center">Contact Us</h3>
			<h5 className="center">We love hearing your feedback!</h5>
			<div className="row">
				<div className="column-buttons">
					<h5 className="center">Contact us at:</h5>
					<div className="center paragraph">
						<iframe 
		  					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.491498093672!2d-75.70200254930779!3d45.419592744338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0454f1e554d7%3A0xcc8c5e0f6c8b33d1!2s123%20Bank%20St%2C%20Ottawa%2C%20ON%20K1P%205N5!5e0!3m2!1sen!2sca!4v1594155893061!5m2!1sen!2sca" 
		  					width="50%" 
		  					height="250" 
		  					frameborder="0" 
		  					style={{ border:0 }} 
		  					allowfullscreen="" 
		  					aria-hidden="false" 
		  					tabindex="0">
  						</iframe>
					</div>
					<div className=" center paragraph">
						<p>123 Bank St.</p>
						<p>Ottawa, ON K1N 1A1</p>
						<p>(613) - 345 1234</p>
					</div>
				</div>
				<div className="center column-buttons">
					<h5>Or, send an email here:</h5> 
					<div className="text-inputs">
						<input type="text" placeholder="Name:" />
						<input type="text" placeholder="Email Address:" />
						<textarea rows="50" cols="90"></textarea>
						<Link to="/contactus">
								<button className="waves-effect waves-light btn-small">Send Email</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactUs