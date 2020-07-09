/*
	Ski photo taken from: https://unsplash.com/s/photos/ski
*/
import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="column-left">
					<h4>Welcome to GearToGo!</h4>
					<h6>Ottawa's #1 Ski/Snowboard Shop Since 2003!</h6>
					<p className="paragraph">We are voted Ottawa's best Ski/Snowboard shop for 
					17 years in a row! Whether you are looking for Skis, Snowboards, Boots or a 
					complete set, we offer them all at some of the best prices in the city!</p>
					<div className="row">
						<div className="column-buttons">
							<Link to="/exploreskis">
								<button className="waves-effect waves-light btn-small">Explore Our Skis</button>
							</Link>
						</div>
						<div className="column-buttons">
							<Link to="/exploresnowboards">
								<button className="waves-effect waves-light btn-small">Explore Our Boards</button>
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
