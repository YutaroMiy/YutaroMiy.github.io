import React from 'react'

const ViewCart = ({previousTab,nextTab}) => {
	return (
		<div className="container-display">
			<h4 className="center">View Cart</h4>
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

export default ViewCart