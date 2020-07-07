import React from 'react'

const Navbar = () => {
	return (
		<nav className="nav-wrapper red darken-3">
			<div className="container">
				<a className="brand-logo">GearToGo</a>
				<button className="waves-effect waves-light btn right center-btn">Order Online</button>
				<ul className="right">
					<li><a href="/">Home</a></li>
					<li><a href="/about">About</a></li>
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