import React from 'react'

const EnterAddress = ({previousTab,nextTab}) => {
	return (
		<div className="container-display">
			<h4 className="center">Enter Shipping Address</h4>
			<h6>Please Enter your Shipping Infomation:</h6>
			<div className="row">
				<div className="column-left">
					<div className="text-entry-words">
						<h6>First Name:</h6>
					</div>
					<div className="text-entry-box">
						<input type="text" />
					</div>
				</div>
				<div className="column-right">
					<div className="text-entry-words center">
						<h6>Last Name:</h6>
					</div>
					<div className="text-entry-box">
						<input type="text" />
					</div>
				</div>
				<div className="button-bar">
					<div className="text-entry-words">
						<h6>Email Address:</h6>
					</div>
					<div className="text-entry-box">
						<input type="text" />
					</div>
					<div className="text-entry-words">
						<h6>Shipping Address:</h6>
					</div>
					<div className="text-entry-box">
						<input type="text" />
					</div>
				</div>
				<div className="column-left">
					<div className="text-entry-words">
						<h6>City/Town:</h6>
					</div>
					<div className="text-entry-box">
						<input type="text" />
					</div>
				</div>
				<div className="province-postcode">
						<div className="text-entry-words center">
							<h6>Province:</h6>
						</div>
						<div className="text-entry-words">
							<input type="text" />
						</div>
						<div className="text-entry-words">
							<h6>Postal Code:</h6>
						</div>
						<div className="text-entry-words">
							<input type="text" />
						</div>
				</div>
			</div>
			<div className="row">
				<div className="button-nav">
					<button className="waves-effect waves-light btn" onClick={nextTab}>Next</button>
				</div>
				<div className="button-nav">
					<button className="btn btn-white" onClick={previousTab}>Back</button>
				</div>
			</div>
		</div>	
	)

}

export default EnterAddress