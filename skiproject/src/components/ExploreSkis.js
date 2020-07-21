/*
	Rossignol AE taken from: https://www.sportchek.ca/categories/shop-by-sport/alpine-skiing/ski-packages/mens/product/rossignol-experience-74-xpress-2-mens-skis-2019-20-look-xpress-1-332899738.html#332899738%5Bcolor%5D=332899738_99
	K2 Mindbender taken from: https://www.sportchek.ca/categories/shop-by-sport/alpine-skiing/flat-skis/mens/product/k2-mindbender-90c-mens-skis-2019-20-332927047.html#332927047%5Bcolor%5D=332927047_99
	Atomic Vantage taken from: https://www.sportchek.ca/categories/shop-by-sport/alpine-skiing/ski-packages/adventure-all-mountain/product/atomic-vantage-79-c-mens-skis-2019-20-atomic-e-ft-10-blk-grn-332906828.html#332906828%5Bcolor%5D=332906828_99
*/
import React from 'react'

const words = {
  english: {
    title: "Explore Skis",
    set: "Set",
    skis: "Skis Only",
    skisBoots: "Skis & Boots",
    setSkis: "Comes With Skis, Boots, Poles",
    sizes: "Available Sizes: S,M,L",
    bootSizes: "Available Boot Sizes: US Men's",
    englishDollar: "$",
    decimal: ".",
    frenchDollar: " ",
  },
  french: {
    title: "Explorez Les Skis",
    set: "L'Ensemble",
    skis: "Seulement Des Skis",
    skisBoots: "Skis et Chaussures",
    setSkis: "Avec Skis, Bottes, Bâtons",
    sizes: "Tailles Disponibles: P,M,G",
    bootSizes: "Tailles De Bottes Disponibles: US Hommes",
    englishDollar: " ",
    decimal: ",",
    frenchDollar: "$",
  }
}
const ExploreSkis = ({showCheckboxes, language}) => {
	return (
		<div className="container">
			{!showCheckboxes && <h3 className="center">{words[language].title}</h3>}
      <div className="row">
  				<div className="column locations">
  					<img src="/rossignolae.JPG" alt ="Rossignol AE" width="100%" height="300" />
            <h5 className="center">Rossignol 2020 AE {words[language].set}</h5>
  					<p className="center">{words[language].setSkis}</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].bootSizes} 6 - 14</p>
  					<p className="center">{words[language].englishDollar}399{words[language].decimal}99{words[language].frenchDollar}</p>
  				</div>
  				<div className="column locations">
  					<img src="/rossignolae.JPG" alt ="Rossignol AE" width="100%" height="300" />
  					<h5 className="center">Rossignol 2020 AE ({words[language].skis})</h5>
  					<p className="center">{words[language].skis}</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].englishDollar}329{words[language].decimal}99{words[language].frenchDollar}</p>
  					
  				</div>
  				<div className="column locations">
  					<img src="/rossignolae.JPG" alt ="Rossignol AE" width="100%" height="300" />
  					<h5 className="center">Rossignol 2020 AE ({words[language].skisBoots})</h5>
  					<p className="center">{words[language].skisBoots} {words[language].set}.</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].bootSizes} 6 - 14</p>
  					<p className="center">{words[language].englishDollar}359{words[language].decimal}99{words[language].frenchDollar}</p>
  				</div>
			</div>
			<div className="row">
  				<div className="column locations">
  					<img src="/k2mindbender.JPG" alt ="K2 Mindbender" width="100%" height="300" />
  					<h5 className="center">K2 Mindbender {words[language].set}</h5>
  					<p className="center">{words[language].setSkis}</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].bootSizes} 7 - 12</p>
  					<p className="center">{words[language].englishDollar}459{words[language].decimal}99{words[language].frenchDollar}</p>
  				</div>
  				<div className="column locations">
  					<img src="/k2mindbender.JPG" alt ="K2 Mindbender" width="100%" height="300" />
  					<h5 className="center">K2 Mindbender ({words[language].skis})</h5>
  					<p className="center">{words[language].skis}</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].englishDollar}379{words[language].decimal}99{words[language].frenchDollar}</p>
  					
  				</div>
  				<div className="column locations">
  					<img src="/k2mindbender.JPG" alt ="K2 Mindbender" width="100%" height="300" />
  					<h5 className="center">K2 Mindbender ({words[language].skisBoots})</h5>
  					<p className="center">{words[language].skisBoots} {words[language].set}.</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].bootSizes} 7 - 12</p>
  					<p className="center">{words[language].englishDollar}429{words[language].decimal}99{words[language].frenchDollar}</p>
  				</div>
			</div>
			<div className="row">
  				<div className="column locations">
  					<img src="/atomicvantage.JPG" alt ="Atomic Vantage" width="100%" height="300" />
  					<h5 className="center">Atomic Vantage {words[language].set}</h5>
  					<p className="center">{words[language].setSkis}</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].bootSizes} 2 - 9</p>
  					<p className="center">{words[language].englishDollar}349{words[language].decimal}99{words[language].frenchDollar}</p>
  				</div>
  				<div className="column locations">
  					<img src="/atomicvantage.JPG" alt ="Atomic Vantage" width="100%" height="300" />
  					<h5 className="center">Atomic Vantage ({words[language].skis})</h5>
  					<p className="center">{words[language].skis}</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].englishDollar}269{words[language].decimal}99{words[language].frenchDollar}</p>
  					
  				</div>
  				<div className="column locations">
  					<img src="/atomicvantage.JPG" alt ="Atomic Vantage" width="100%" height="300" />
  					<h5 className="center">Atomic Vantage ({words[language].skisBoots})</h5>
  					<p className="center">{words[language].skisBoots} {words[language].set}.</p>
  					<p className="center">{words[language].sizes}</p>
  					<p className="center">{words[language].bootSizes} 6 - 14</p>
  					<p className="center">{words[language].englishDollar}309{words[language].decimal}99{words[language].frenchDollar}</p>
  				</div>
			</div>
		</div>
	)
}

export default ExploreSkis