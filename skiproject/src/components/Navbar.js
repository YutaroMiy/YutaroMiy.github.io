/*
	Name: Yutaro Miyata
	Student Number: 8912340

	This component is the navbar which is located at the top of the site. 

	Globe taken from: https://icons8.com/icons/set/globe 
*/

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({setLanguage,language}) => {

	const words = {
		english: {
			home: "Home",
			locations: "Locations",
			exploreSkis: "Explore Skis",
			exploreBoards: "Explore Snowboards",
			contactUs: "Contact Us",
			language: "Language",
			order: "Order Online"
		},
		french: {
			home: "Accueil",
			locations: "Emplacements",
			exploreSkis: "Explorez Les Skis",
			exploreBoards: "Explorez Les Planche à Neiges",
			contactUs: "Nous Joindre",
			language: "Langue",
			order: "Commander en Ligne"
		}
	}
	return (
		<nav className="navbar navbar-inverse">
			<div className="container-fluid bg-primary p-2 jumbotron">
				<div className="navbar-header">
					<a className="nav-brand-color h2 text-light">GearToGo</a>
				</div>
				<ul className="nav nav-nav navbar-right">
					<li className="nav-item"><a className="nav-words" href="/">{words[language].home}</a></li>
					<li className="nav-item"><a className="nav-words" href="/locations">{words[language].locations}</a></li>
					<li className="nav-item"><a className="nav-words" href="/exploreskis">{words[language].exploreSkis}</a></li>
					<li className="nav-item"><a className="nav-words" href="/exploresnowboards">{words[language].exploreBoards}</a></li>
					<li className="nav-item"><a className="nav-words" href="/contactus">{words[language].contactUs}</a></li>
				</ul>
			    <div className="dropdown">
			    	<img src="/icons8-globe-50.png" alt="Globe" style={{width:'20px;'}} />
					<button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    {words[language].language}
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					    <a onClick={() => setLanguage('english') }className="dropdown-item" href="#">English</a>
					    <a onClick={() => setLanguage('french') } className="dropdown-item" href="#">Français</a>
					</div>
				</div>
				<ul className="nav navbar-nav navbar-right">
					<Link to="/orderonline">
						<button className="btn btn-info navbar-btn">{words[language].order}</button>
					</Link>
				</ul>
			</div>
		</nav>

	)
}

export default Navbar