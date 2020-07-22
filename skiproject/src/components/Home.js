/*
	Name: Yutaro Miyata
	Student Number: 8912340

	This is the home page of the website
	
	Ski photo taken from: https://unsplash.com/s/photos/ski
*/
import React from 'react'
import { Link } from 'react-router-dom'

const words = {
	english: {
		welcome: "Welcome to GearToGo!",
		ottawa: "Ottawa's #1 Ski/Snowboard Shop Since 2003!",
		best: "We are voted Ottawa's best Ski/Snowboard shop for 17 years in a row! Whether you are looking for Skis, Snowboards, Boots or a complete set, we offer them all at some of the best prices in the city!",
		skis: "Explore Our Skis",
		boards: "Explore Our Boards"	
	},
	french: {
		welcome: "Bienvenue a GearToGo!",
		ottawa: "Magasin de ski / snowboard n ° 1 à Ottawa depuis 2003!",
		best: "Nous sommes élus meilleur magasin de ski / planche à neige d'Ottawa pendant 17 années consécutives! Que vous recherchiez des skis, des planche à neiges, des bottes ou un ensemble complet, nous vous les proposons tous à certains des meilleurs prix de la ville!",
		skis: "Découvrez Nos Skis",
		boards: "Découvrez Nos Planche à Neiges"
	}
}

const Home = ({language}) => {
	console.log("LANGUAGE", language)
	return (
		<div className="container">
			<div className="row">
				<div className="column-left">
					<h4>{words[language].welcome}</h4>
					<h6>{words[language].ottawa}</h6>
					<p className="paragraph">{words[language].best}</p>
					<div className="row">
						<div className="column-buttons">
							<Link to="/exploreskis">
								<button className="btn btn-info navbar-btn">{words[language].skis}</button>
							</Link>
						</div>
						<div className="column-buttons">
							<Link to="/exploresnowboards">
								<button className="btn btn-info navbar-btn">{words[language].boards}</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="column-right">
					<img src="/skiing.JPG" alt ="A ski image" width="100%" />
				</div>
			</div>
		</div>
	)
}

export default Home
