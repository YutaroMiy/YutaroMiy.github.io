import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="nav-wrapper blue lighten-2">
			<div className="container">
				<a className="brand-logo">GearToGo</a>
				<Link to="/orderonline">
					<button className="waves-effect waves-light btn right center-btn">Order Online</button>
				</Link>
				<ul className="right">
					<li><a href="/">Home</a></li>
					<li><a href="/locations">Locations</a></li>
					<li><a href="/exploreskis">Explore Skis</a></li>
					<li><a href="/exploresnowboards">Explore Snowboards</a></li>
					<li><a href="/contactus">Contact Us</a></li>
				</ul>
				
			</div>
		</nav>

	)
}

export default Navbar