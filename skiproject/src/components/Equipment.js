/*
	Name: Yutaro Miyata
	Student Number: 8912340

	This component is an individual equipment. It holds the layout for each listing of each equipment which is shown in /ChooseEquipment. 
*/

import React, { Component } from 'react'

class Equipment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,  //this will keep the state of the checkbox. If it's true set checkbox to checked, else not. Call to setState to inverted when addItemToCart is called
		}
	}

	render() {

		const words = {
			english: {
				select: "Select this Item"
			},
			french: {
				select: "Sélectionnez cet Article"
			}
		}
		const {source,alternate,title,set,sizes,boots,price, addItemToCart,language} = this.props;
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
						<span>{words[language].select}</span>
					</label>
				</form>
			</div>
		)
	}
}

export default Equipment