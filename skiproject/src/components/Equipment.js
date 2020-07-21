import React, { Component } from 'react'

class Equipment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,  //this will keep the state of the checkbox. If it's true set checkbox to checked, else not. Call to setState to inverted when addItemToCart is called
		}
	}
	render() {
		const {source,alternate,title,set,sizes,boots,price, addItemToCart} = this.props;
		return (
			<div className="column equipment">
				<img src={source} alt={alternate} width="100%" height="300" />
				<h5 className="center">{title}</h5>
				<p className="center">{set}</p>
				<p className="center">{sizes}</p>
				<p className="center">{boots}</p>
				<p className="center">${price}</p>
				<form className="center" action="#">
					<label>
						<input onClick={() => addItemToCart(title, price)} type="checkbox" />
						<span>Select this item</span>
					</label>
				</form>
			</div>
		)
	}
}

export default Equipment