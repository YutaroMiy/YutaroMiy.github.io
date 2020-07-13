import React, { useState } from 'react'


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
		<div>
			<div>In order to determine your size, please enter your height:</div>
			<div style={{display: 'flex'}}>
				<div>How tall are you? (cm):</div>
				<input onChange={(e) => setHeight(e.target.value)} placeHolder="Ex: 100" style={{width: '50%'}}/>
				<button onClick={() => calculateSize()}>Calculate Height</button>
			</div>
			{calculatedSize === 0 && <div>Please enter a valid height</div>}
			{(calculatedSize !== 0 && calculateSize) && <div>{`Your size is ${calculatedSize}`}</div>}
			<button onClick={nextTab}>Next</button>
			<button onClick={nextTab}>I know my height already!</button>
		</div>	
	)

}

export default FindSize	