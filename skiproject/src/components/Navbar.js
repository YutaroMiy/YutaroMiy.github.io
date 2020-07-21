import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({setLanguage}) => {

	return (
		<nav className="navbar navbar-inverse">
			<div className="container-fluid bg-primary p-2 jumbotron">
				<div className="navbar-header">
					<a className="nav-brand-color h2 text-light">GearToGo</a>
				</div>
				<ul className="nav nav-nav navbar-right">
					<li className="nav-item"><a className="nav-words" href="/">Home</a></li>
					<li className="nav-item"><a className="nav-words" href="/locations">Locations</a></li>
					<li className="nav-item"><a className="nav-words" href="/exploreskis">Explore Skis</a></li>
					<li className="nav-item"><a className="nav-words" href="/exploresnowboards">Explore Snowboards</a></li>
					<li className="nav-item"><a className="nav-words" href="/contactus">Contact Us</a></li>
				</ul>
			    <div className="dropdown">
					<button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    Language
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					    <a onClick={() => setLanguage('english') }className="dropdown-item" href="#">English</a>
					    <a onClick={() => setLanguage('french') } className="dropdown-item" href="#">Français</a>
					</div>
				</div>
				<ul className="nav navbar-nav navbar-right">
					<Link to="/orderonline">
						<button className="btn btn-info navbar-btn">Order Online</button>
					</Link>
				</ul>
			</div>
		</nav>

	)
}

export default Navbar