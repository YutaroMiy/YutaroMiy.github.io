import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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