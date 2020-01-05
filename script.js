var names = document.forms['vform']['names'];
var lastname = document.forms['vform']['lastname'];
var email = document.forms['vform']['email'];
var phone = document.forms['vform']['phone'];
var password = document.forms['vform']['password'];
var confirm = document.forms['vform']['confirm'];

var names_error = document.getElementById('names_error');
var lastname_error = document.getElementById('lastname_error');
var email_error = document.getElementById('email_error');
var phone_error = document.getElementById('phone_error');
var password_error = document.getElementById('password_error');
var confirm_error = document.getElementById('confirm_error');

var regex = /\w+@\w+\.+[a-z]/;

names.addEventListener('blur', nameVerify, true);
lastname.addEventListener('blur', lastnameVerify, true);
email.addEventListener('blur', emailVerify, true);
phone.addEventListener('blur', phoneVerify, true);
password.addEventListener('blur', passwordVerify, true);

function Validate() {

	if (names.value == "") {
		names.style.border = "1px solid red";
	    document.getElementById('names_div').style.color = "yellow";
	    names_error.textContent = "Name required";
	    names.focus();
		return false;
	} else if (names.value.length < 3){
		names.style.border = "1px solid red";
	    document.getElementById('names_div').style.color = "yellow";
	    names_error.textContent = "Name must be at least 3 characters";
	    names.focus();
		return false;
	} else if (names.value.length > 20){
		names.style.border = "1px solid red";
	    document.getElementById('names_div').style.color = "yellow";
	    names_error.textContent = "Name is too long";
	    names.focus();
		return false;
	}

	if (lastname.value == "") {
	    lastname.style.border = "1px solid red";
	    document.getElementById('lastname_div').style.color = "yellow";
	    lastname_error.textContent = "Lastname required";
	    lastname.focus();
	    return false;
	} else if (lastname.value.length < 3){
		lastname.style.border = "1px solid red";
	    document.getElementById('lastname_div').style.color = "yellow";
	    lastname_error.textContent = "Lastname must be at least 3 characters";
	    lastname.focus();
		return false;
	}  else if (lastname.value.length > 20){
		lastname.style.border = "1px solid red";
	    document.getElementById('lastname_div').style.color = "yellow";
	    lastname_error.textContent = "Lastname is too long";
	    lastname.focus();
		return false;
	}

	if (email.value == "") {
	    email.style.border = "1px solid red";
	    document.getElementById('email_div').style.color = "yellow";
	    email_error.textContent = "Email required";
	    email.focus();
	    return false;
	} else if (email.value.length < 4){
		email.style.border = "1px solid red";
	    document.getElementById('email_div').style.color = "yellow";
	    email_error.textContent = "Email must be at least 4 characters";
	    email.focus();
		return false;
	} else if (email.value.length > 100){
		email.style.border = "1px solid red";
	    document.getElementById('email_div').style.color = "yellow";
	    email_error.textContent = "Email is too long";
	    email.focus();
		return false;
	}

	if (phone.value == "") {
	    phone.style.border = "1px solid red";
	    document.getElementById('phone_div').style.color = "yellow";
	    phone_error.textContent = "Phone required";
	    phone.focus();
	    return false;
	} else if (phone.value.length < 7) {
		phone.style.border = "1px solid red";
	    document.getElementById('phone_div').style.color = "yellow";
	    phone_error.textContent = "Phone must be at least 7 characters";
	    phone.focus();
	    return false;
	} else if (phone.value.length > 30) {
		phone.style.border = "1px solid red";
	    document.getElementById('phone_div').style.color = "yellow";
	    phone_error.textContent = "Phone is too long";
	    phone.focus();
	    return false;
	}

	if (password.value == "") {
	    password.style.border = "1px solid red";
	    document.getElementById('password_div').style.color = "yellow";
	    password_error.textContent = "Password required";
	    password.focus();
	    return false;
	} else if (password.value.length < 6) {
		password.style.border = "1px solid red";
	    document.getElementById('password_div').style.color = "yellow";
	    password_error.textContent = "Password must be at least 6 characters";
	    password.focus();
	    return false;
	} else if (password.value.length > 20) {
		password.style.border = "1px solid red";
	    document.getElementById('password_div').style.color = "yellow";
	    password_error.textContent = "Password is too long";
	    password.focus();
	    return false;
	}

	if (confirm.value == "") {
	    confirm.style.border = "1px solid red";
	    document.getElementById('confirm_div').style.color = "yellow";
	    confirm_error.textContent = "Confirmation required";
	    confirm.focus();
	    return false;
	}

	if (password.value != confirm.value) {
	    password.style.border = "1px solid red";
	    document.getElementById('confirm_div').style.color = "yellow";
	    confirm.style.border = "1px solid red";
	    confirm_error.innerHTML = "The two passwords do not match";
	    return false;
 	}
}

function nameVerify() {
  if (names.value != "") {
   names.style.border = "1px solid #5e6e66";
   document.getElementById('names_div').style.color = "#5e6e66";
   names_error.innerHTML = "";
   return true;
  }
}

function lastnameVerify() {
  if (lastname.value != "") {
   lastname.style.border = "1px solid #5e6e66";
   document.getElementById('lastname_div').style.color = "#5e6e66";
   lastname_error.innerHTML = "";
   return true;
  }
}

function emailVerify() {
  if (email.value != "") {
  	email.style.border = "1px solid #5e6e66";
  	document.getElementById('email_div').style.color = "#5e6e66";
  	email_error.innerHTML = "";
  	return true;
  }
}

function phoneVerify() {
  if (phone.value != "") {
   phone.style.border = "1px solid #5e6e66";
   document.getElementById('phone_div').style.color = "#5e6e66";
   phone_error.innerHTML = "";
   return true;
  }
}

function passwordVerify() {
  if (password.value != "") {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('confirm_div').style.color = "#5e6e66";
  	document.getElementById('password_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }

  if (password.value === confirm.value) {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('confirm_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	confirm_error.innerHTML = "";
  	return true;
  }
}