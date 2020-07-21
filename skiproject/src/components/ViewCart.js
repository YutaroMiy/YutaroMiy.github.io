import React from 'react'

const ViewCart = ({previousTab,nextTab, chosenItems, removeItem}) => {
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
						<option selected>Choose...</option>
						<option>Small</option>
						<option>Medium</option>
						<option>Large</option>
					</select>
				</td>
				<td><p className="remove-item" onClick={() => removeItem(item.title)}>Remove Item</p></td>
				<td>{item.price}</td>
			</tr>
		)
	});

	return (
		<div className="container-display">
			<h4 className="center">View Cart</h4>
			<div>
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col">Item #</th>
							<th scope="col">Name</th>
							<th scope="col">Size</th>
							<th scope="col">Action?</th>
							<th scope="col">Price</th>
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
							<td>Subtotal:</td>
							<td>{totalPrice}</td>
						</tr>
						<tr>
							<th scope="row"></th>
							<td></td>
							<td></td>
							<td>GST/HST:</td>
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
					<button className="btn btn-light" onClick={previousTab}>Back</button>
				</div>
				<div className="btn-group button-pos">
					<button className="btn btn-info" onClick={nextTab}>Next</button>
				</div>
			</div>
		</div>	
	)

}

export default ViewCart