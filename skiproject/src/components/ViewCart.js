import React from 'react'

const ViewCart = ({previousTab,nextTab}) => {
	return (
		<div>
			<p>View Cart</p>
			<button onClick={previousTab}>Back</button>
			<button onClick={nextTab}>Next</button>
		</div>	
	)

}

export default ViewCart