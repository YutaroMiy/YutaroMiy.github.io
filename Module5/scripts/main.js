/*  
    Name: Yutaro Miyata
    Student Number: 8912340
  
    This JS file contians all the functionality when any tab is clicked.

    It is adapted from https://www.w3schools.com/howto/howto_js_hover_tabs.asp
*/

function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
   
    var filter = /^(\([0-9]{2,3}\)[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCreditCard(txtCard) {
	var b = document.getElementById(txtCard).value;

	var filter = /^[0-9]{4}[\-]*[0-9]{4}[\-]*[0-9]{4}[\-]*[0-9]{4}?$/;
	if (filter.test(b)) {
        return true;
    }
    else {
        return false;
    }
}

$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")) {
            alert("Invalid Phone Number");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

   $("#cardNumber").on("change", function(){
   		if (!validateCreditCard("cardNumber")) {
   			alert("Invalid Credit Card Format");
   			$("#cardNumber").addClass("error");
   		}
   		else {
   			$("#cardNumber").removeClass("error");
   		}
   });


});