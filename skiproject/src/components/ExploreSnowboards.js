/*
	Burton Ripcord taken from: https://www.sportchek.ca/categories/shop-by-sport/snowboarding/snowboards/all-mountain-snowboards/product/burton-ripcord-mens-snowboard-2016-17-332116871.html#332116871%5Bcolor%5D=332116871_99
	Firefly Furious taken from: https://www.sportchek.ca/categories/shop-by-sport/snowboarding/snowboards/mens-snowboards/product/firefly-furious-wide-mens-snowboard-2016-17-332117677.html#332117677%5Bcolor%5D=332117677_99
	DC Focus taken from: https://www.sportchek.ca/categories/shop-by-sport/snowboarding/snowboards/product/dc-focus-mens-snowboard-2019-20-332918287.html#332918287%5Bcolor%5D=332918287_99
*/
import React from 'react'

const words = {
  english: {
    title: "Explore Skis",
    set: "Set",
    boards: "Board Only",
    boardBindings: "Board & Bindings",
    setBoards: "Comes With Board, Bindings, Boots",
    sizes: "Available Sizes: S,M,L",
    bootSizes: "Available Boot Sizes: US Men's",
    englishDollar: "$",
    decimal: ".",
    frenchDollar: " ",
  },
  french: {
    title: "Explorez Les Planche à Neiges",
    set: "L'Ensemble",
    boards: "Seulement du Planche",
    boardBindings: "Planche et Fixations",
    setBoards: "Avec Planche, Fixations et Bottes",
    sizes: "Tailles Disponibles: P,M,G",
    bootSizes: "Tailles De Bottes Disponibles: US Hommes",
    englishDollar: " ",
    decimal: ",",
    frenchDollar: "$",
  }
}

const ExploreSnowboards = ({language}) => {
	return (
		<div className="container">
			<h3 className="center">{words[language].title}</h3>
			<div className="row">
  				<div className="column locations">
  					<img src="/burtonripcord.JPG" alt ="Burton Ripcord" width="100%" height="300" />
  					<h5 className="center">Burton Ripcord {words[language].set}</h5>
  					<p className="center">{words[language].setBoards}</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].bootSizes} 6 - 12</p>
  					<p className="center">{words[language].englishDollar}499{words[language].decimal}99{words[language].frenchDollar}</p>
  				</div>
  				<div className="column locations">
  					<img src="/burtonripcord.JPG" alt ="Burton Ripcord" width="100%" height="300" />
  					<h5 className="center">Burton Ripcord ({words[language].boardBindings})</h5>
  					<p className="center">{words[language].boardBindings} {words[language].set}</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].englishDollar}439{words[language].decimal}99{words[language].frenchDollar}</p>
  					
  				</div>
  				<div className="column locations">
  					<img src="/burtonripcord.JPG" alt ="Burton Ripcord" width="100%" height="300" />
  					<h5 className="center">Burton Ripcord ({words[language].boards})</h5>
  					<p className="center">{words[language].boards}</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].englishDollar}389{words[language].decimal}99{words[language].frenchDollar}</p>
  				</div>
			</div>
			<div className="row">
  				<div className="column locations">
  					<img src="/fireflyfurious.JPG" alt ="Firefly Furious" width="100%" height="300" />
  					<h5 className="center">Firefly Furious {words[language].set}</h5>
  					<p className="center">{words[language].setBoards}</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].bootSizes} 4 - 13</p>
  					<p className="center">{words[language].englishDollar}459{words[language].decimal}99{words[language].frenchDollar}</p>
  				</div>
  				<div className="column locations">
  					<img src="/fireflyfurious.JPG" alt ="Firefly Furious" width="100%" height="300" />
  					<h5 className="center">Firefly Furious ({words[language].boardBindings})</h5>
  					<p className="center">{words[language].boardBindings} {words[language].set}</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].englishDollar}429{words[language].decimal}99{words[language].frenchDollar}</p>
  					
  				</div>
  				<div className="column locations">
  					<img src="/fireflyfurious.JPG" alt ="Firefly Furious" width="100%" height="300" />
  					<h5 className="center">Firefly Furious ({words[language].boards})</h5>
  					<p className="center">{words[language].boards}</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].englishDollar}389{words[language].decimal}99{words[language].frenchDollar}</p>
  				</div>
			</div>
			<div className="row">
  				<div className="column locations">
  					<img src="/dcfocus.JPG" alt ="DC Focus" width="100%" height="300" />
  					<h5 className="center">DC Focus {words[language].set}</h5>
  					<p className="center">{words[language].setBoards}</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].bootSizes} 7 - 15</p>
  					<p className="center">{words[language].englishDollar}399{words[language].decimal}99{words[language].frenchDollar}</p>
  				</div>
  				<div className="column locations">
  					<img src="/dcfocus.JPG" alt ="DC Focus" width="100%" height="300" />
  					<h5 className="center">DC Focus ({words[language].boardBindings})</h5>
  					<p className="center">{words[language].boardBindings} {words[language].set}</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].englishDollar}359{words[language].decimal}99{words[language].frenchDollar}</p>
  					
  				</div>
  				<div className="column locations">
  					<img src="/dcfocus.JPG" alt ="DC Focus" width="100%" height="300" />
  					<h5 className="center">DC Focus ({words[language].boards})</h5>
  					<p className="center">{words[language].boards}</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].englishDollar}319{words[language].decimal}99{words[language].frenchDollar}</p>
  				</div>
			</div>
		</div>
	)
}

export default ExploreSnowboards