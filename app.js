function index() {
	var uname = document.getElementById("email").value;
	var pwd = document.getElementById("pwd1").value;
	var filterH = /(?=.*[A-Z])/;
	var filterh = /(?=.*[a-z])/;
	var filternum = /(?=.*[0-9])/;
	var filtersym = /(?=.*\d)/;
	if (uname == '') {
		alert("Please enter a username.");
	}
	else if (pwd == '') {
		alert("Please enter a password");
	}
	else if (!filterH.test(pwd)) {
		alert("The password need to include atleast ONE uppercase.");
	}
	else if (!filterh.test(pwd)) {
		alert("The password need to include atleast ONE lowercase.");
	}
	else if (pwd.length < 12) {
		alert("Password minimum length is 12.");
	}
	else if (!filternum.test(pwd)) {
		alert("The password need to include atleast ONE number.");
	}
	else if (!filtersym.test(pwd)) {
		alert("The password need to include atleast ONE symbol.");
	}
	else {
		alert('Successful Login!');
	}
}

function clearFunc() {
	document.getElementById("email").value = "";
	document.getElementById("pwd1").value = "";
}