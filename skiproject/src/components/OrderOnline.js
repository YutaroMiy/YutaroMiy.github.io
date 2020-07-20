import React, {useState} from 'react'
import FindSize from './FindSize'
import ChooseEquipment from './ChooseEquipment'
import ViewCart from './ViewCart'
import EnterAddress from './EnterAddress'
import EnterPayment from './EnterPayment'
import ThankYou from './ThankYou'


const OrderOnline = () => {
	
	const [tabName,setTabName] = useState('find-size'); 

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
			{tabName === 'choose-equipment' && < ChooseEquipment nextTab={() => setTabName('view-cart')} previousTab={() => setTabName('find-size')} />}
			{tabName === 'view-cart' && < ViewCart nextTab={() => setTabName('enter-address')} previousTab={() => setTabName('choose-equipment')}/>}
			{tabName === 'enter-address' && < EnterAddress nextTab={() => setTabName('enter-payment')} previousTab={() => setTabName('view-cart')} />}
			{tabName === 'enter-payment' && < EnterPayment previousTab={() => setTabName('enter-address')} nextTab={() => setTabName('thank-you')}/>}
			{tabName === 'thank-you' && < ThankYou previousTab={() => setTabName('enter-address')}/>}
		</div>
	)
}

export default OrderOnline