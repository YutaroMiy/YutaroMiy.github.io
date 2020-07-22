/*
	Name: Yutaro Miyata
	Student Number: 8912340

	This component creates the breadcrumbs pattern which follows the process a user must go through in order to order online.
*/
import React, {useState} from 'react'
import FindSize from './FindSize'
import ChooseEquipment from './ChooseEquipment'
import ViewCart from './ViewCart'
import EnterAddress from './EnterAddress'
import EnterPayment from './EnterPayment'

const words = {
	english: {
		title: "Order Online",
		findSize: "Find Size",
		chooseEquipment: "Choose Equipment",
		myCart: "My Cart",
		enterAddress: "Enter Address",
		enterPayment: "Enter Payment Information"
	},
	french: {
		title: "Commander en Ligne",
		findSize: "Trouver ma taille",
		chooseEquipment: "Choisissez l'Équipement",
		myCart: "Mon Panier",
		enterAddress: "Entrer l'Adresse",
		enterPayment: "Entrez Conditions de Vente"
	}
}

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
			<h3 className="center">{words[language].title}</h3>
			<nav>
			    <div className="breadcrumb">
			      	<div className="col s12 column-online-instructions">
				        <a href="#!" className={`breadcrumbs-titles ${tabName==='find-size'?"active":""}`}> {words[language].findSize} </a>
				        <div className="center">
				        	>
				        </div>
				        <a href="#!" className={`breadcrumbs-titles ${tabName==='choose-equipment'?"active":""}`}> {words[language].chooseEquipment} </a>
				        <div className="center">
				        	>
				        </div>
				        <a href="#!" className={`breadcrumbs-titles ${tabName==='view-cart'?"active":""}`}> {words[language].myCart} </a>
				        <div className="center">
				        	>
				        </div>
				        <a href="#!" className={`breadcrumbs-titles ${tabName==='enter-address'?"active":""}`}> {words[language].enterAddress} </a>
				    	<div className="center">
				        	>
				        </div>
				        <a href="#!" className={`breadcrumbs-titles ${tabName==='enter-payment'?"active":""}`}> {words[language].enterPayment} </a>
				    </div>
			    </div>
			</nav>
			{tabName === 'find-size' && < FindSize nextTab={() => setTabName('choose-equipment')} language={language} />}
			{tabName === 'choose-equipment' && < ChooseEquipment addItemToCart={(title, price) => addItemToCart(price, title)} nextTab={() => setTabName('view-cart')} previousTab={() => setTabName('find-size')} language={language} />}
			{tabName === 'view-cart' && < ViewCart removeItem={(title) => removeItem(title)} chosenItems={chosenItems} nextTab={() => setTabName('enter-address')} previousTab={() => setTabName('choose-equipment')} language={language} />}
			{tabName === 'enter-address' && < EnterAddress nextTab={() => setTabName('enter-payment')} previousTab={() => setTabName('view-cart')} language={language} />}
			{tabName === 'enter-payment' && < EnterPayment previousTab={() => setTabName('enter-address')} language={language} />}
			
		</div>
	)
}

export default OrderOnline