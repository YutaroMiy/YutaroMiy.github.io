/*  
    Name: Yutaro Miyata
    Student Number: 8912340
  
    This JS file contains all the functionality for the different grocery items.

*/

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "potato",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.49
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 7.49 
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 0.99
	},
	{
		name: "vanilla ice cream",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.99
	},
	{
		name: "pasta noodles",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.99
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 6.99
	},
	{
		name: "onions",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 0.99
	}



];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
	
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		let selected = true;

		//Exclude any item in which the restrictions are not met
		if ((restrictions.includes("Vegetarian")) && (prods[i].vegetarian == false)){
			selected = false;
		}

		if ((restrictions.includes("GlutenFree")) && (prods[i].glutenFree == false)){
			selected = false;
		}

		if ((restrictions.includes("Organic")) && (prods[i].organic == false)){
			selected = false;	
		}

		// add each selected item to the array
		if(selected){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}