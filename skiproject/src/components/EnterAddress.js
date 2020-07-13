import React from 'react'

const EnterAddress = ({previousTab,nextTab}) => {
	return (
		<div>
			<p>Enter Address</p>
			<button onClick={previousTab}>Back</button>
			<button onClick={nextTab}>Next</button>
		</div>	
	)

}

export default EnterAddress