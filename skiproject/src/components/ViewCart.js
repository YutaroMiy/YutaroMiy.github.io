import React from 'react'

const ViewCart = ({previousTab,nextTab}) => {
	return (
		<div className="container-display">
			<h4 className="center">View Cart</h4>
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

export default ViewCart