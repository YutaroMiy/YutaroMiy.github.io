import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = ({language}) => {
	return(
		<div className="container-display">
			<div className="container-display">
				<h3 className="center">Thank You For Ordering Online!</h3>
				<h5>You will reveive an email within the next 15 minutes confirming your order.</h5>
				<h5>If you have questions with regards to your order, feel free to email us at: orders@geartogo.ca</h5>
				<h5>Or, give us a call at: (613) - 345 1234</h5>
				<div className="btn-toolbar button-bar">
					<div className="btn-group button-pos">
						<Link to="/">
							<button className="btn btn-info">Back to Home</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ThankYou