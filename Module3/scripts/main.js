/*  
    Name: Yutaro Miyata
    Student Number: 8912340
  
    This JS file contians all the functionality when any tab is clicked.

    It is adapted from https://www.w3schools.com/howto/howto_js_hover_tabs.asp
*/

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}



function getProductsForCategory(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("producttabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("producttablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {

    var s1 = document.getElementById(slct1);
    
    //Add divs for each food group
    var veggies = document.getElementById("Vegetables");
    var fruits = document.getElementById("Fruits");
    var protein = document.getElementById("Protein");
    var grains = document.getElementById("Grains");
    var dairy = document.getElementById("Dairy");
	
	// Set all the divs to empty
    veggies.innerHTML = "";
    fruits.innerHTML = "";
	protein.innerHTML = "";
	grains.innerHTML = "";
	dairy.innerHTML = "";

	// put into an array all the options which are selected
    var selected = [];
    var checkboxes = document.getElementsByName("dietSelect");
    
    for (j = 0; j < checkboxes.length; j++){
    	if (checkboxes[j].checked){
    		selected.push(checkboxes[j].value);
    	}
    }
    
    
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, selected);

    // sort the array by price in increasing order
    var sortedArray = optionArray.sort(function(a,b){return a.price - b.price})

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < sortedArray.length; i++) {
		
		var productCategory = sortedArray[i].category;

		var s2 = document.getElementById(productCategory);

		var productName = sortedArray[i].name;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		//Create a price variable which is then concatenated to the string which is displayed
		var price = sortedArray[i].price;

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName + " " + price));
		s2.appendChild(label);

		var images = sortedArray[i].source;

		var view = document.createElement("img");
		view.setAttribute("src",images);
		view.setAttribute("width", "75");
		view.setAttribute("height", "60");
		s2.appendChild(view);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}