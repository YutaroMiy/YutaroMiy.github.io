import React from 'react'
import ExploreSkis from './ExploreSkis'
import Equipment from './Equipment'

const ChooseEquipment = ({previousTab,nextTab, addItemToCart}) => {
	return (
		<div className="container-display">
			<h3 className="center">Choose Equipment</h3>
			<div>
				<h4 className="center">Skis:</h4>
				<div className="row">
					<Equipment addItemToCart={addItemToCart} source="/rossignolae.JPG" 
						alternate="Rossignol AE" 
						title="Rossignol 2020 AE Set" 
						set="Comes With Skis, Boots, Poles" 
						sizes="Available Sizes: S,M,L"
						boots="Available Boot Sizes: US Men's 6 - 14"
						price={399.99} //ADD $ AS STRING
					/>
					<Equipment addItemToCart={addItemToCart} source="/rossignolae.JPG" 
						alternate="Rossignol AE" 
						title="Rossignol 2020 AE (Skis Only)" 
						set="Skis Only" 
						sizes="Available Sizes: S,M,L"
						boots=" "
						price={329.99}
					/>
					<Equipment addItemToCart={addItemToCart} source="/rossignolae.JPG" 
						alternate="Rossignol AE" 
						title="Rossignol 2020 AE (Skis & Boots)" 
						set="Skis & Boots Set" 
						sizes="Available Sizes: S,M,L"
						boots="Available Boot Sizes: US Men's 6 - 14"
						price={359.99}
					/>
				</div>
				<div className="row">
					<Equipment addItemToCart={addItemToCart} source="/k2mindbender.JPG" 
						alternate="K2 Mindbender" 
						title="K2 Mindbender Set" 
						set="Comes With Skis, Boots, Poles" 
						sizes="Available Sizes: S,M,L"
						boots="Available Boot Sizes: US Men's 7 - 12"
						price={459.99}
					/>
					<Equipment source="/k2mindbender.JPG" 
						alternate="K2 Mindbender" 
						title="K2 Mindbender (Skis Only)" 
						set="Skis Only" 
						sizes="Available Sizes: S,M,L"
						boots=" "
						price={379.99}
						addItemToCart={addItemToCart}
					/>
					<Equipment source="/k2mindbender.JPG" 
						alternate="K2 Mindbender" 
						title="K2 Mindbender (Skis & Boots)" 
						set="Skis & Boots Set" 
						sizes="Available Sizes: S,M,L"
						boots="Available Boot Sizes: US Men's 7 - 12"
						price={429.99}
						addItemToCart={addItemToCart}
					/>
				</div>
				<div className="row">
					<Equipment source="/atomicvantage.JPG" 
						alternate="Atomic Vantage" 
						title="Atomic Vantage Set" 
						set="Comes With Skis, Boots, Poles" 
						sizes="Available Sizes: S,M,L"
						boots="Available Boot Sizes: US Men's 2 - 9"
						price={349.99}
						addItemToCart={addItemToCart}
					/>
					<Equipment source="/atomicvantage.JPG" 
						alternate="Atomic Vantage" 
						title="Atomic Vantage (Skis Only)" 
						set="Skis Only" 
						sizes="Available Sizes: S,M,L"
						boots=" "
						price={269.99}
						addItemToCart={addItemToCart}
					/>
					<Equipment source="/atomicvantage.JPG" 
						alternate="Atomic Vantage" 
						title="Atomic Vantage (Skis & Boots)" 
						set="Skis & Boots Set" 
						sizes="Available Sizes: S,M,L"
						boots="Available Boot Sizes: US Men's 2 - 9"
						price={309.99}
						addItemToCart={addItemToCart}
					/>
				</div>
			</div>
			<div>
				<h4 className="center">Snowboards:</h4>
				<div className="row">
					<Equipment source="/burtonripcord.JPG" 
						alternate="Burton Ripcord" 
						title="Burton Ripcord Set" 
						set="Comes With Board, Bindings, Boots" 
						sizes="Available Sizes: S,M,L"
						boots="Available Boot Sizes: US Men's 6 - 12"
						price={499.99}
						addItemToCart={addItemToCart}
					/>
					<Equipment source="/burtonripcord.JPG" 
						alternate="Burton Ripcord" 
						title="Burton Ripcord (Board & Bindings)" 
						set="Board & Bindings Set" 
						sizes="Available Sizes: S,M,L"
						boots=" "
						price={439.99}
						addItemToCart={addItemToCart}
					/>
					<Equipment source="/burtonripcord.JPG" 
						alternate="Burton Ripcord" 
						title="Burton Ripcord (Board Only)" 
						set="Board Only" 
						sizes="Available Sizes: S,M,L"
						boots=" "
						price={389.99}
						addItemToCart={addItemToCart}
					/>
				</div>
				<div className="row">
					<Equipment source="/fireflyfurious.JPG" 
						alternate="Firefly Furious" 
						title="Firefly Furious Set" 
						set="Comes With Board, Bindings, Boots" 
						sizes="Available Sizes: S,M,L"
						boots="Available Boot Sizes: US Men's 4 - 13"
						price={459.99}
						addItemToCart={addItemToCart}
					/>
					<Equipment source="/fireflyfurious.JPG" 
						alternate="Firefly Furious" 
						title="Firefly Furious (Board & Bindings)" 
						set="Board & Bindings Set" 
						sizes="Available Sizes: S,M,L"
						boots=" "
						price={429.99}
						addItemToCart={addItemToCart}
					/>
					<Equipment source="/fireflyfurious.JPG" 
						alternate="Firefly Furious" 
						title="Firefly Furious (Board Only)" 
						set="Board Only" 
						sizes="Available Sizes: S,M,L"
						boots=" "
						price={389.99}
						addItemToCart={addItemToCart}
					/>
				</div>
				<div className="row">
					<Equipment source="/dcfocus.JPG" 
						alternate="DC Focus" 
						title="DC Focus Set" 
						set="Comes With Board, Bindings, Boots" 
						sizes="Available Sizes: S,M,L"
						boots="Available Boot Sizes: US Men's 7 - 15"
						price={399.99}
						addItemToCart={addItemToCart}
					/>
					<Equipment source="/dcfocus.JPG" 
						alternate="DC Focus" 
						title="DC Focus (Board & Bindings)" 
						set="Board & Bindings Set" 
						sizes="Available Sizes: S,M,L"
						boots=" "
						price={359.99}
						addItemToCart={addItemToCart}
					/>
					<Equipment source="/dcfocus.JPG" 
						alternate="DC Focus" 
						title="DC Focus (Board Only)" 
						set="Board Only" 
						sizes="Available Sizes: S,M,L"
						boots=" "
						price={319.99}
						addItemToCart={addItemToCart}
					/>
				</div>
				<div className="btn-toolbar button-bar">
					<div className="btn-group button-pos">
						<button className="btn btn-light" onClick={previousTab}>Back</button>
					</div>
					<div className="btn-group button-pos">
						<button className="btn btn-info" onClick={nextTab}>Next</button>
					</div>
				</div>
			</div>
		</div>	
	)

}

export default ChooseEquipment
