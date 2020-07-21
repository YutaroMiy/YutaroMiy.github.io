import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const FindSize = ({nextTab,language}) => {

	const words = {
		english: {
			title: "In order to determine your size, please enter your height & weight:",
			validHeight: "Please enter a valid height",
			validWeight: "Please enter a valid weight",
			tall: "How tall are you?", 
			weigh: "How much do you weigh?",
			help: "Why do I need to enter my height and weight?",
			answer: "Your height and weight are needed to help determine a Ski/Snowboard size which best fits you!",
			calculate: "Calculate Size",
			back: "Back to Home",
			next: "Next",
			know: "I know my Size Already!",
			sizeIs: "Your size is",
			small: "Small",
			medium: "Medium",
			large: "Large"
		},
		french: {
			title: "Afin de déterminer votre taille, veuillez entrer votre taille et votre poids:",
			validHeight: "entrez une hauteur valide",
			validWeight: "entrez un poids valide",
			tall: "Quelle est votre taille?",
			weigh: "Quel est votre poids?",
			help: "Pourquoi dois-je entrer ma taille et mon poids?",
			answer: "Votre taille et votre poids sont nécessaires pour déterminer la taille de ski / snowboard qui vous convient le mieux!",
			calculate: "Calculer ma Taille",
			back: "Retour à la Page d'Accueil",
			next: "Prochain",
			know: "Je Connais Déjà Ma Taille!",
			sizeIs: "Votre taille est",
			small: "Petit",
			medium: "Moyen",
			large: "Grand"
		}
	}

	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');
	const [calculatedSize, setCalculatedSize] = useState('');
	const [needHelp, setNeedHelp] = useState('');

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
			setCalculatedSize(words[language].small);
		}
		else if (height >= 200 || weight >= 100) {
			setCalculatedSize(words[language].large);
		}
		else {
			setCalculatedSize(words[language].medium);
		}
	}

	function displayHelp() {
		setNeedHelp(1);
	}
	
	return (
		<div className="container-display">
			<h5>{words[language].title}</h5>
			<div>
				<div className="form-group">
					<label>{words[language].tall}</label>
					<input className="form-control" onChange={(e) => setHeight(e.target.value)} placeHolder="Ex: 100" style={{width: '50%'}}/>
					{calculatedSize === -1 && <h6 className="error-message">{words[language].validHeight}</h6>}
					{calculatedSize === 0 && <h6 className="error-message">{words[language].validHeight}</h6>}
				</div>
				<div className="form-group">
					<label>{words[language].weigh}</label>
					<input className="form-control" onChange={(e) => setWeight(e.target.value)} placeHolder="Ex: 50" style={{width: '50%'}}/>
					{calculatedSize === -1 && <h6 className="error-message">{words[language].validWeight}</h6>}
					{calculatedSize === 1 && <h6 className="error-message">{words[language].validWeight}</h6>}
				</div>
				<button className="btn btn-info" onClick={() => calculateSize()}>{words[language].calculate}</button>
				<p><a href="#" className="text-primary" onClick={() => displayHelp()}>{words[language].help}</a></p>
				{needHelp === 1 && <p className="form-text">{words[language].answer}</p>}
			</div> 
			{(calculatedSize !== 0 && calculatedSize !== 1 && calculatedSize !== -1 && calculateSize) && <h6>{words[language].sizeIs} {calculatedSize}</h6>}
			<div className="btn-toolbar button-bar">
				<div className="btn-group button-pos">
					<Link to="/">
						<button className="btn btn-light">{words[language].back}</button>
					</Link>	
				</div>
				<div className="btn-group button-pos">
					<button className="btn btn-light" onClick={nextTab}>{words[language].next}</button>
				</div>
				<div className="btn-group button-pos">
					<button className="btn btn-info" onClick={nextTab}>{words[language].know}</button>
				</div>
			</div>
		</div>	
	)

}

export default FindSize	