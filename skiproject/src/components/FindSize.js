import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const FindSize = ({nextTab}) => {
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');
	const [calculatedSize, setCalculatedSize] = useState('');

	function calculateSize() {
		if ((!height || height <= 0) && (!weight || weight <= 0)) {
			setCalculatedSize(-1);
		}
		else if (!height || height <= 0) {
			setCalculatedSize(0);
		}
		else if (!weight || weight <= 0) {
			setCalculatedSize(1);
		}
		else if (height < 100 && weight < 50) {
			setCalculatedSize('Small');
		}
		else if (height >= 200 || weight >= 100) {
			setCalculatedSize('Large');
		}
		else {
			setCalculatedSize('Medium');
		}
	}

	
	return (
		<div className="container-display">
			<h5>In order to determine your size, please enter your height:</h5>
			<div>
				<div className="form-group">
					<label>How tall are you?</label>
					<input className="form-control" onChange={(e) => setHeight(e.target.value)} placeHolder="Ex: 100" style={{width: '50%'}}/>
					{calculatedSize === -1 && <h6 className="error-message">Please enter a valid height</h6>}
					{calculatedSize === 0 && <h6 className="error-message">Please enter a valid height</h6>}
				</div>
				<div className="form-group">
					<label>How much do you weigh?</label>
					<input className="form-control" onChange={(e) => setWeight(e.target.value)} placeHolder="Ex: 50" style={{width: '50%'}}/>
					{calculatedSize === -1 && <h6 className="error-message">Please enter a valid weight</h6>}
					{calculatedSize === 1 && <h6 className="error-message">Please enter a valid weight</h6>}
				</div>
				<button className="btn btn-info" onClick={() => calculateSize()}>Calculate Size</button>
			</div> 
			{(calculatedSize !== 0 && calculatedSize !== 1 && calculatedSize !== -1 && calculateSize) && <h6>{`Your size is ${calculatedSize}`}</h6>}
			<div className="btn-toolbar button-bar">
				<div className="btn-group button-pos">
					<Link to="/">
						<button className="btn btn-light">Back to Home</button>
					</Link>	
				</div>
				<div className="btn-group button-pos">
					<button className="btn btn-light" onClick={nextTab}>Next</button>
				</div>
				<div className="btn-group button-pos">
					<button className="btn btn-info" onClick={nextTab}>I Know My Size Already!</button>
				</div>
			</div>
		</div>	
	)

}

export default FindSize	