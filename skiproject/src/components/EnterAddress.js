/*
	Name: Yutaro Miyata
	Student Number: 8912340

	This component allows user to enter their shipping information.

	Form inspired from: https://getbootstrap.com/docs/4.0/components/forms/?#disabled-forms
*/
import React from 'react'

const EnterAddress = ({previousTab,nextTab,language}) => {

	const words = {
	  english: {
	    title: "Enter Shipping Address",
	    info: "Please Enter your Shipping Information:",
	    firstName: "First Name:",
		lastName: "Last Name:",
		email: "Email Address:",
		shipping: "Shipping Address:",
		city: "City/Town:",
		choose: "Choose...",
		postCode: "Postal Code:",
	    back: "Back",
		next: "Next",
	  },
	  french: {
	    title: "Entrer l'Adresse",
	    info: "Veuillez Saisir vos Informations de Livraison:",
	    firstName: "Prénom:",
		lastName: "Nom de Famille:",
		email: "Adresse Courriel:",
		shipping: "Adresse de Livraison:",
		city: "Ville:",
		choose: "Choix...",
		postCode: "Code Postal:",
	    back: "Retour",
		next: "Prochain",
	  }
	}

	return (
		<div className="container-display">
			<h4 className="center">{words[language].title}</h4>
			<h6>{words[language].info}</h6>
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
					<input type="text" className="form-control" />
				</div>
				<div className="form-group">
					<label>{words[language].shipping}</label>
					<input type="text" className="form-control" />
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label>{words[language].city}</label>
						<input type="text" className="form-control" />
					</div>
					<div className="form-group col-md-4">
						<label>Province:</label>
						<select className="form-control">
							<option selected>{words[language].choose}</option>
							<option>AB</option>
							<option>BC</option>
							<option>MN</option>
							<option>NB</option>
							<option>NL</option>
							<option>NS</option>
							<option>ON</option>
							<option>PE</option>
							<option>QC</option>
							<option>SK</option>
						</select>
					</div>
					<div className="form-group col-md-2">
						<label>{words[language].postCode}</label>
						<input type="text" className="form-control" placeholder="Ex.K1N1A1" />
					</div>
				</div>
			</div>
			<div className="btn-toolbar button-bar">
				<div className="btn-group button-pos">
					<button className="btn btn-light" onClick={previousTab}>{words[language].back}</button>
				</div>
				<div className="btn-group button-pos">
					<button className="btn btn-info" onClick={nextTab}>{words[language].next}</button>
				</div>
			</div>
		</div>	
	)

}

export default EnterAddress