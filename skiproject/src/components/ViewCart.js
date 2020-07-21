import React from 'react'

const ViewCart = ({previousTab, nextTab, chosenItems, removeItem, language}) => {
	
	const words = {
	  english: {
	    title: "View Cart",
	    item: "Item #",
	    name: "Name",
	    size: "Size",
	    choose: "Choose...",
	    small: "Small",
		medium: "Medium",
		large: "Large",
		price: "Price",
		subtotal: "Subtotal:",
		tax: "GST/HST",
	    back: "Back",
		next: "Next",
	  },
	  french: {
	    title: "Mon Panier",
	    item: "Numéro d'Article",
	    name: "Nom",
	    size: "Taille",
	    choose: "Choisir...",
	    small: "Petit",
		medium: "Moyen",
		large: "Grand",
		price: "Prix",
		subtotal: "Soustotal:",
		tax: "TPS/TVQ",
	    back: "Retour",
		next: "Prochain",
	  }
	}

	let totalPrice = 0;
	let itemNum = 0;
	const items = chosenItems.map(item => {
		totalPrice += item.price;
		itemNum++;
		return (
			<tr>
				<th scope="row">{itemNum}</th>
				<td>{item.title}</td>
				<td>
					<select className="form-control">
						<option selected>{words[language].choose}</option>
						<option>{words[language].small}</option>
						<option>{words[language].medium}</option>
						<option>{words[language].large}</option>
					</select>
				</td>
				<td><p className="remove-item" onClick={() => removeItem(item.title)}><img src="/icons8-trash-26.png" alt="Remove Item" style={{width:'30px;'}} /></p></td>
				<td>{item.price}</td>
			</tr>
		)
	});

	return (
		<div className="container-display">
			<h4 className="center">{words[language].title}</h4>
			<div>
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col">{words[language].item}</th>
							<th scope="col">{words[language].name}</th>
							<th scope="col">{words[language].size}</th>
							<th scope="col">Action?</th>
							<th scope="col">{words[language].price}</th>
						</tr>
					</thead>
					<tbody>
						{items}
						<tr>
							<th scope="row"></th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th scope="row"></th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th scope="row"></th>
							<td></td>
							<td></td>
							<td>{words[language].subtotal}</td>
							<td>{totalPrice}</td>
						</tr>
						<tr>
							<th scope="row"></th>
							<td></td>
							<td></td>
							<td>{words[language].tax}</td>
							<td>{(totalPrice*0.13).toFixed(2)}</td>
						</tr>
						<tr>
							<th scope="row"></th>
							<td></td>
							<td></td>
							<td><h4>Total:</h4></td>
							<td><h4>{(totalPrice + totalPrice*0.13).toFixed(2)}</h4></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="btn-toolbar button-bar">
				<div className="btn-group button-pos">
					<button className="btn btn-light" onClick={previousTab}>{words[language].back}</button>
				</div>
				<div className="btn-group button-pos">
					<button className="btn btn-info" onClick={nextTab}>{words[language].next}</button>
				</div>
			</div>
		</div>	
	)

}

export default ViewCart