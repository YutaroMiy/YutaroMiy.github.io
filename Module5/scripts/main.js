/*  
    Name: Yutaro Miyata
    Student Number: 8912340
  
    This JS file contians all the functionality when any tab is clicked.

*/


var unavailableDates = ["07/01/2020","09/07/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {

    //Get selected mechanic value
    var selectedValue = $("input[name='mechanic']:checked").val();

    //If Jimmy is selected then disable Saturday & Sunday since he does not work those days
    if (selectedValue == "jimmy") {
    	if (date.getDay() == 0 || date.getDay() == 6)
        	return [false];
    }

     //If Brian is selected then disable Monday & Friday since he does not work those days
    if (selectedValue == "brian") {
    	if (date.getDay() == 1 || date.getDay() == 5)
        	return [false];
    }

    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}

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

   $("#dateInput").datepicker(
        {	
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
   );


});