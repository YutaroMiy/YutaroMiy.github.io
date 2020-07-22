/*
	Name: Yutaro Miyata
	Student Number: 8912340

	This component allows user to enter their payment information.

	Form inspired from: https://getbootstrap.com/docs/4.0/components/forms/?#disabled-forms

	CVV icon taken from: https://icons8.com/icons/set/cvv
*/

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const EnterPayment = ({previousTab,nextTab,language}) => {

	const words = {
		english: {
			title: "Enter Payment Information",
			credit: "Please Enter your Credit Card Information:",
			number: "Credit Card Number:",
			expiry: "Expiry Date:",
			what: "What is CVV?",
			answer: "The CVV is a group of three numbers located on the back of your card used for extra security functions.",
			validate: "Validate",
			note: "A valid credit card is needed in order to make a purchase.",
			back: "Back",
			placeOrder: "Place Order",
			valid: "Valid!",
			errorNum: "Please enter a valid Credit Card number.",
			errorExpiry: "Please enter a valid non-expired date.",
			errorCVV: "Please enter a valid CVV."
		},
		french: {
			title: "Entrez Conditions de Vente",
			credit: "Veuillez Saisir Vos Informations de Carte de Crédit:",
			number: "Numéro de Carte de Crédit",
			expiry: "Date d'Expiration",
			what: "Qu'est-ce que CVV?",
			answer: "Le CVV est un groupe de trois numéros situés au dos de votre carte et utilisé pour des fonctions de sécurité supplémentaires.",
			validate: "Valider",
			note: "Une carte de crédit valide est nécessaire pour effectuer un achat.",
			back: "Retour",
			placeOrder: "Commander",
			valid: "Valide!",
			errorNum: "Veuillez saisir un numéro de Carte de Crédit valide.",
			errorExpiry: "Veuillez saisir une date valide non expirée.",
			errorCVV: "Veuillez saisir un CVV valide."
		}
	}
	
	const [creditCard,setCreditCard] = useState('');
	const [creditCardNum, setCreditCardNum] = useState('');
	
	const [expiry, setExpiry] = useState('');
	const [expiryDate, setExpiryDate] = useState('');

	const [cvv, setCVV] = useState('');
	const [cvvNum, setCVVNum] = useState('');

	const [isDisabled,setIsDisabled] = useState(true);

	const [needHelp, setNeedHelp] = useState('');

	//this function should stop the submit function from working
	function validateFields() {

		if (!validateCreditCard()){
			setCreditCardNum(0);
		} 
		else {
			setCreditCardNum(1);
		}
	
		if (!validateCVV()) {
			setCVVNum(0);
		}
		else {
			setCVVNum(1);
		}

		if (!validateExpiry()) {
			setExpiryDate(0);
		}
		else {
			setExpiryDate(1);
		}

		if(!validateCreditCard() || !validateCVV() || !validateExpiry()) {
			setIsDisabled(true);
		}
		else {
			setIsDisabled(false);
		}

	}

	function validateCreditCard() {

		var filter = /^[0-9]{4}[\-]*[0-9]{4}[\-]*[0-9]{4}[\-]*[0-9]{4}?$/;
		if (filter.test(creditCard)) {
	        return true;
	    }
	    else {
	        return false;
	    }
	}

	//Credit card expiry must be in the form of MM/YY, with YY >= 20 since the card cannot be expired.  

	function validateExpiry() {

		var filter = /^(([0][1-9])|([1][0-2]))[\/][2][0-9]$/;
		if (filter.test(expiry)) {
	        return true;
	    }
	    else {
	        return false;
	    }
	}

	function validateCVV() {

		var filter = /^[0-9]{3}$/;
		if (filter.test(cvv)) {
	        return true;
	    }
	    else {
	        return false;
	    }
	}

	function displayHelp() {
		setNeedHelp(1);
	}

	return (
		<div className="container-display">
			<h4 className="center">{words[language].title}</h4>
			<h6>{words[language].credit}</h6>
			<div>
				<div className="form-group row">
					<label className="col-sm-3 col-form-label">{words[language].number}</label>
					<div className="col-sm-9">
						<input type="text" className="form-control" onChange={(e) => setCreditCard(e.target.value)} placeholder="Ex.1234-5678-9012-3456" />
					</div>
				</div>
				{creditCardNum === 0 && <h6 className="error-message">{words[language].errorNum}</h6>}
				{creditCardNum === 1 && <h6 className="good-message">{words[language].valid}</h6>}
				<div className="form-group row">
					<label className="col-sm-3 col-form-label">{words[language].expiry}</label>
					<div className="col-sm-3">
						<input type="text" className="form-control" onChange={(e) => setExpiry(e.target.value)} placeholder="Ex.MM/YY" />
					</div>
				</div>
				{expiryDate === 0 && <h6 className="error-message">{words[language].errorExpiry}</h6>}
				{expiryDate === 1 && <h6 className="good-message">{words[language].valid}</h6>}
				<div className="form-group row">
					<label className="col-sm-3 col-form-label">CVV:</label>
					<div className="col-sm-2">
						<input type="text" className="form-control" onChange={(e) => setCVV(e.target.value)} placeholder="Ex.123" />
					</div>
				</div>
				<p><a href="#" className="text-primary" onClick={() => displayHelp()}>{words[language].what}</a></p>
				{needHelp === 1 && <h6 className="form-text"><img src="/icons8-card-verification-value-64.png" alt="CVV" style={{width:'30px;'}} />
				{words[language].answer}</h6>}
				{cvvNum === 0 && <h6 className="error-message">{words[language].errorCVV}</h6>}
				{cvvNum === 1 && <h6 className="good-message">{words[language].valid}</h6>}
				<button className="btn btn-info" onClick={() => validateFields()}>{words[language].validate}</button>
				<small className="form-text text-muted">
					{words[language].note} 
				</small>
			</div>
			
			
			<div className="btn-toolbar button-bar">
				<div className="btn-group button-pos">
					<button className="btn btn-light" onClick={previousTab}>{words[language].back}</button>
				</div>
				<div className="btn-group button-pos">
					<Link to="/thankyou">
						<button className="btn btn-info" disabled={isDisabled}>{words[language].placeOrder}</button>
					</Link>
				</div>
			</div>

			
		</div>	
	)

}

export default EnterPayment