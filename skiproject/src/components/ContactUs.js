/*
	Name: Yutaro Miyata
	Student Number: 8912340

	This component displays the primary contact info for this site and allows a user to send an email directly. 

	Form inspired from: https://getbootstrap.com/docs/4.0/components/forms/?#disabled-forms
*/

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const words = {
	english: {
		title: "Contact Us",
		feedback: "We love hearing your feedback!",
		contact: "Contact us at:",
		emailContact: "Or, send an email here:",
		firstName: "First Name:",
		lastName: "Last Name:",
		email: "Email Address:",
		write: "Write Your Email Here:",
		submit: "Submit",
		thanks: "Thank you for submitting!"
	},
	french: {
		title: "Nous Joindre",
		feedback: "Nous aimons entendre vos commentaires!",
		contact: "Nous joindre à:",
		emailContact: "Ou, envoyez un e-mail ici:",
		firstName: "Prénom:",
		lastName: "Nom de Famille:",
		email: "Adresse Courriel:",
		write: "Vous Écrivez Votre Courriel Ici:",
		submit: "Soumettre",
		thanks: "Merci d'avoir soumis le formulaire!"
	}
}

const ContactUs = ({language}) => {

	const [submitted, setSubmitted] = useState(0);

	function changeSubmitted() {
		setSubmitted(1);
	}

	return (
		<div className="container">
			<h3 className="center">{words[language].title}</h3>
			<h5 className="center">{words[language].feedback}</h5>
			<div className="row">
				<div className="column-buttons">
					<h5 className="center">{words[language].contact}</h5>
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
				<div className="column-buttons">
					<h5 className="center">{words[language].emailContact}</h5>
					<div>
						<div className="form-row">
						    <div className="form-group col-md-6">
						    	<label>{words[language].firstName}</label>
						        <input type="text" className="form-control" />
						    </div>
						    <div className="form-group col-md-6">
						        <label>{words[language].lastName}</label>
						        <input type="text" className="form-control" />
						    </div>
						</div>
						<div className="form-group">
						    <label>{words[language].email}</label>
						    <input type="text" class="form-control" />
						</div>
						<div className="form-group">
							<label>{words[language].write}</label>
							<textarea className="form-control"></textarea>
						</div>
						<div className="btn-toolbar">
							<div className="btn-group">
								<button className="btn btn-info"onClick={() => changeSubmitted()}>{words[language].submit}</button>
							</div>
						</div>
					</div>
					{submitted === 1 && <h6 className="good-message center">{words[language].thanks}</h6>}
				</div>
			</div>
		</div>
	)
}

export default ContactUs