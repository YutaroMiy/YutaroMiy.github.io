import React from 'react'

const EnterPayment = ({previousTab}) => {
	return (
		<div className="container-display">
			<div className="paragraph">
				<h5>Please Enter your Credit Card Information:</h5>
			</div>
			<div className="row">
				<div className="text-entry-words">
					<h6>Credit Card Number:</h6>
				</div>
				<div className="text-entry-creditcard">
					<input type="text" placeholder="Ex.1234 5678 9012 3456"/>
				</div>
			</div>
			<div className="row">
				<div className="text-entry-words">
					<h6>Expiry Date:</h6>
				</div>
				<div className="text-entry-expiry-cvv">
					<input type="text" placeholder="Ex. MM/YY"/>
				</div>
			</div>
			<div className="row">
				<div className="text-entry-words">
					<h6>CVV:</h6>
				</div>
				<div className="text-entry-expiry-cvv">
					<input type="text" placeholder="Ex. 123"/>
				</div>
			</div>
			<div className="row">
				<div className="button-nav">
					<button className="waves-effect waves-light btn">Place Order</button>
				</div>
				<div className="button-nav">
					<button className="btn btn-white" onClick={previousTab}>Back</button>
				</div>
			</div>
		</div>	
	)

}

export default EnterPayment