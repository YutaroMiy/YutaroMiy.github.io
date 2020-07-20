import React, { useState } from 'react'
import ThankYou from './ThankYou'

const EnterPayment = ({previousTab,nextTab}) => {
	
	const [creditCard,setCreditCard] = useState('');
	const [creditCardNum, setCreditCardNum] = useState('');
	
	const [expiry, setExpiry] = useState('');
	const [expiryDate, setExpiryDate] = useState('');

	const [cvv, setCVV] = useState('');
	const [cvvNum, setCVVNum] = useState('');

	const [disabled,setDisabled] = useState('true');

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

		if(validateCreditCard() && validateCVV() && validateExpiry()) {
			setDisabled('false');
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

	return (
		<div className="container-display">
			<h4 className="center">Enter Payment Infomation</h4>
			<h6>Please Enter your Credit Card Infomation:</h6>
			<div>
				<div className="form-group row">
					<label className="col-sm-3 col-form-label">Credit Card Number:</label>
					<div className="col-sm-9">
						<input type="text" className="form-control" onChange={(e) => setCreditCard(e.target.value)} placeholder="Ex.1234-5678-9012-3456" />
					</div>
				</div>
				{creditCardNum === 0 && <h6 className="error-message">Please enter a valid credit card number.</h6>}
				{creditCardNum === 1 && <h6 className="error-message">Valid!</h6>}
				<div className="form-group row">
					<label className="col-sm-3 col-form-label">Expiry Date:</label>
					<div className="col-sm-3">
						<input type="text" className="form-control" onChange={(e) => setExpiry(e.target.value)} placeholder="Ex.MM/YY" />
					</div>
				</div>
				{expiryDate === 0 && <h6 className="error-message">Please enter a valid non-expired date.</h6>}
				{expiryDate === 1 && <h6 className="error-message">Valid!</h6>}
				<div className="form-group row">
					<label className="col-sm-3 col-form-label">CVV:</label>
					<div className="col-sm-2">
						<input type="text" className="form-control" onChange={(e) => setCVV(e.target.value)} placeholder="Ex.123" />
					</div>
				</div>
				{cvvNum === 0 && <h6 className="error-message">Please enter a valid CVV.</h6>}
				{cvvNum === 1 && <h6 className="error-message">Valid!</h6>}
			</div>
			
			
			<div className="btn-toolbar button-bar">
				<div className="btn-group button-pos">
					<button className="btn btn-light" onClick={previousTab}>Back</button>
				</div>
				<div className="btn-group button-pos">
					<button className="btn btn-info" onClick={() => validateFields()}>Place Order</button>
				</div>
			</div>

			
		</div>	
	)

}

export default EnterPayment