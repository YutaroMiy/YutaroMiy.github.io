import React, {useState} from 'react'
import FindSize from './FindSize'
import ChooseEquipment from './ChooseEquipment'
import ViewCart from './ViewCart'
import EnterAddress from './EnterAddress'
import EnterPayment from './EnterPayment'


const OrderOnline = () => {
	
	const [tabName,setTabName] = useState('find-size'); 

	return (
		<div className="container">
			<h3 className="center">Order Online</h3>
			<nav>
			    <div className="nav-wrapper">
			      	<div className="col s12 column-online-instructions">
				        <a href="#!" className={`breadcrumbs-titles ${tabName==='find-size'?"active":""}`}  onClick={() => setTabName('find-size')}> Find Size </a>
				        <div className="center">
				        	>
				        </div>
				        <a href="#!" className={`breadcrumbs-titles ${tabName==='choose-equipment'?"active":""}`}  onClick={() => setTabName('choose-equipment')}> Choose Equipment </a>
				        <div className="center">
				        	>
				        </div>
				        <a href="#!" className={`breadcrumbs-titles ${tabName==='view-cart'?"active":""}`}  onClick={() => setTabName('view-cart')}> View Cart </a>
				        <div className="center">
				        	>
				        </div>
				        <a href="#!" className={`breadcrumbs-titles ${tabName==='enter-address'?"active":""}`} onClick={() => setTabName('enter-address')}> Enter Address </a>
				    	<div className="center">
				        	>
				        </div>
				        <a href="#!" className={`breadcrumbs-titles ${tabName==='enter-payment'?"active":""}`} onClick={() => setTabName('enter-payment')}> Enter Payment Information </a>
				    </div>
			    </div>
			</nav>
			{tabName === 'find-size' && < FindSize />}
			{tabName === 'choose-equipment' && < ChooseEquipment />}
			{tabName === 'view-cart' && < ViewCart />}
			{tabName === 'enter-address' && < EnterAddress />}
			{tabName === 'enter-payment' && < EnterPayment />}
		</div>
	)
}

export default OrderOnline