/*
Feedback form page page Javascript
Create a JavaScript function to validate a HTML form
which contains two inputs - one for first name and
a second for surname.
*/

// function to validate form (checks user input)
function validateForm() {
	// get references to the form elements
	var fname = document.getElementById("fname");
	var sname = document.getElementById("sname");
	var ferror = 0;
	var serror = 0;
	var cerror = 0;
	var fnameMessage;
	var snameMessage;
	var commentMessage;
	
	// validate the forname
	if (fname.value.length == 0) {
		fnameMessage ='Please enter your forename.';
		ferror = 1;
		// displays message if user fails to enter forename
		// and 1 is added to the ferror variable
		
	} else {
		fnameMessage = 'Forename entered correctly.';
		ferror = 0;
	} 
	
	// validate the surname
	if (sname.value.length == 0) {
		snameMessage = 'Please enter your surname';
		serror = 1;
		// displays message if user fails to enter surname
		// and 1 is added to the serror variable
		
	} else {
		snameMessage = 'Surname entered correctly.';
		serror = 0;
	}
	
	// validate the comment
	if (comment.value.length == 0) {
		commentMessage = 'Please enter a comment';
		cerror = 1;
		// displays message if user fails to enter comment
		// and 1 is added to the cerror variable
		
	} else {
		commentMessage = 'Comment submitted.';
		cerror = 0;
	}
	
	if ((ferror == 1) || (serror == 1) || (cerror == 1)){
		alert('Form error: ' + '\n\t' + fnameMessage + '\n\t' + snameMessage + '\n\t' + commentMessage);
		return false;
		// displays message if ferror and/or serror equal 1 and
		// prevents the user from continuing
	}
	else {
		return true;
	} // end of the error if statement
	
}	// end of the function definition

	// function init for validateForm function
function init() {
	// event validate form is triggered when the user performs the onsubmit action on
	// element with id "loginform"
	document.getElementById("feedbackForm").onsubmit = validateForm;
	
} // end of init function 

// Assign an event listener to the window's load event (Load init function as browser opens).
window.onload = init;