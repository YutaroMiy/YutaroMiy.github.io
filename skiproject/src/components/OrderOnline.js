import React, {useState} from 'react'
import FindSize from './FindSize'
import ChooseEquipment from './ChooseEquipment'
import ViewCart from './ViewCart'
import EnterAddress from './EnterAddress'
import EnterPayment from './EnterPayment'


const OrderOnline = ({language}) => {
	
	const [tabName,setTabName] = useState('find-size'); 
	const [chosenItems, setChosenItems] = useState([]);

	function addItemToCart(price, title) {
		const removedItem = chosenItems.filter(item => item.title !== title);
		if ( removedItem.length === chosenItems.length) {
			const items = chosenItems
			const newItem = {
				title: title,
				price: price
			}
			items.push(newItem)
			setChosenItems(items);
		}
		
		else {
			setChosenItems(removedItem);
		}
	}

	function removeItem(title) {
		const items = chosenItems.filter(item => item.title !== title);
		setChosenItems(items);
	}

	return (
		<div className="container">
			<h3 className="center">Order Online</h3>
			<nav>
			    <div className="breadcrumb">
			      	<div className="col s12 column-online-instructions">
				        <a href="#!" className={`breadcrumbs-titles ${tabName==='find-size'?"active":""}`}> Find Size </a>
				        <div className="center">
				        	>
				        </div>
				        <a href="#!" className={`breadcrumbs-titles ${tabName==='choose-equipment'?"active":""}`}> Choose Equipment </a>
				        <div className="center">
				        	>
				        </div>
				        <a href="#!" className={`breadcrumbs-titles ${tabName==='view-cart'?"active":""}`}> View Cart </a>
				        <div className="center">
				        	>
				        </div>
				        <a href="#!" className={`breadcrumbs-titles ${tabName==='enter-address'?"active":""}`}> Enter Address </a>
				    	<div className="center">
				        	>
				        </div>
				        <a href="#!" className={`breadcrumbs-titles ${tabName==='enter-payment'?"active":""}`}> Enter Payment Information </a>
				    </div>
			    </div>
			</nav>
			{tabName === 'find-size' && < FindSize nextTab={() => setTabName('choose-equipment')} />}
			{tabName === 'choose-equipment' && < ChooseEquipment addItemToCart={(title, price) => addItemToCart(price, title)} nextTab={() => setTabName('view-cart')} previousTab={() => setTabName('find-size')} />}
			{tabName === 'view-cart' && < ViewCart removeItem={(title) => removeItem(title)} chosenItems={chosenItems} nextTab={() => setTabName('enter-address')} previousTab={() => setTabName('choose-equipment')} />}
			{tabName === 'enter-address' && < EnterAddress nextTab={() => setTabName('enter-payment')} previousTab={() => setTabName('view-cart')} />}
			{tabName === 'enter-payment' && < EnterPayment previousTab={() => setTabName('enter-address')} />}
			
		</div>
	)
}

export default OrderOnline