import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const FindSize = ({nextTab}) => {
	const [height, setHeight] = useState('');
	const [calculatedSize, setCalculatedSize] = useState('');

	function calculateSize() {
		if (!height || height <= 0) {
			setCalculatedSize(0);
		}
		else if (height < 100) {
			setCalculatedSize('Small');
		}
		else if (height >= 200) {
			setCalculatedSize('Large');
		}
		else {
			setCalculatedSize('Medium');
		}
	}

	return (
		<div className="container-display">
			<h5>In order to determine your size, please enter your height:</h5>
			<div className="calculate-size">
				<h6>How tall are you? (cm):</h6>
				<input onChange={(e) => setHeight(e.target.value)} placeHolder="Ex: 100" style={{width: '50%'}}/>
				<button className="waves-effect waves-light btn" onClick={() => calculateSize()}>Calculate Height</button>
			</div>
			{calculatedSize === 0 && <h6>Please enter a valid height</h6>}
			{(calculatedSize !== 0 && calculateSize) && <h6>{`Your size is ${calculatedSize}`}</h6>}
			<div className="button-nav">
				<button className="waves-effect waves-light btn" onClick={nextTab}>I Know My Size Already!</button>
			</div>
			<div className="row">
				<div className="button-nav">
					<button className="btn btn-white" onClick={nextTab}>Next</button>
				</div>
				<div className="button-nav">
					<Link to="/">
						<button className="waves-effect waves-light btn btn-white" onClick={nextTab}>Back to Home</button>
					</Link>			
				</div>
			</div>
		</div>	
	)

}

export default FindSize	