import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = ({language}) => {

	const words = {
		english: {
			title: "Thank You For Ordering Online!",
			heading1: "You will reveive an email within the next 15 minutes confirming your order.",
			heading2: "If you have questions with regards to your order, feel free to email us at: orders@geartogo.ca",
			heading3: "Or, give us a call at: (613) - 345 1234",
			back: "Back to Home"
		},
		french: {
			title: "Merci d'avoir Commandé en Ligne!",
			heading1: "Vous recevrez un e-mail dans les 15 prochaines minutes confirmant votre commande.",
			heading2: "Si vous avez des questions concernant votre commande, n'hésitez pas à nous envoyer un courriel à: orders@geartogo.ca",
			heading3: "Ou appelez-nous au: (613) - 345 1234",
			back: "Retour à la Page d'Accueil"
		}
	}
	return(
		<div className="container-display">
			<div className="container-display">
				<h3 className="center">{words[language].title}</h3>
				<h5>{words[language].heading1}</h5>
				<h5>{words[language].heading2}</h5>
				<h5>{words[language].heading3}</h5>
				<div className="btn-toolbar button-bar">
					<div className="btn-group button-pos">
						<Link to="/">
							<button className="btn btn-info">{words[language].back}</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ThankYou