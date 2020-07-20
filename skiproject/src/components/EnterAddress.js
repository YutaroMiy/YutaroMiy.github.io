import React from 'react'

const EnterAddress = ({previousTab,nextTab}) => {
	return (
		<div className="container-display">
			<h4 className="center">Enter Shipping Address</h4>
			<h6>Please Enter your Shipping Infomation:</h6>
			<div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label>First Name:</label>
						<input type="text" className="form-control" />
					</div>
					<div className="form-group col-md-6">
						<label>Last Name:</label>
						<input type="text" className="form-control" />
					</div>
				</div>
				<div className="form-group">
					<label>Email Address:</label>
					<input type="text" className="form-control" />
				</div>
				<div className="form-group">
					<label>Shipping Address:</label>
					<input type="text" className="form-control" />
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label>City/Town:</label>
						<input type="text" className="form-control" />
					</div>
					<div className="form-group col-md-4">
						<label>Province:</label>
						<select className="form-control">
							<option selected>Choose...</option>
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
						<label>Postal Code:</label>
						<input type="text" className="form-control" placeholder="Ex.K1N1A1" />
					</div>
				</div>
			</div>
			<div className="btn-toolbar button-bar">
				<div className="btn-group button-pos">
					<button className="btn btn-light" onClick={previousTab}>Back</button>
				</div>
				<div className="btn-group button-pos">
					<button className="btn btn-info" onClick={nextTab}>Next</button>
				</div>
			</div>
		</div>	
	)

}

export default EnterAddress