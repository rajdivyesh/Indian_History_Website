var login_username = [50];
var login_password = [50];
login_username[1]="Divyesh@proj.ca";
login_password[1]="123";

var count = 0;


function register(){
	event.preventDefault();

	var email = document.getElementById("remail").value;
	var password = document.getElementById("rpassword").value;

	if (email == ""){
		alert("Email required.");
		return false;
	}		
	else if (password == ""){
		alert("Password required.");
		return false;
	}
	else if(login_username.indexOf(email) == -1){
		login_username.push(email);
		login_password.push(password);
		count = count + 1;

		alert(email + "  Thanks for registration. \nTry to login Now");
		parent.location.href ="index.html";
		document.getElementById("remail").value ="";
		document.getElementById("rpassword").value="";

		return false;
	}
	else{
		alert(email + " is already register.");
		return false;
	}
}


function login(){
	event.preventDefault();

	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	var i = login_username.indexOf(email);
 
	if(login_username.indexOf(email) == -1){
		if (email == ""){
			alert("Email required.");
			return ;
		}
		alert("Email does not exist.");
		return ;
	}
	else if(login_password[i] != password){
		if (password == ""){
			alert("Password required.");
			return ; 
		}
		alert("Password does not match.");
		return ;
	}
	else {
		alert(email + " yor are login Now \n welcome to our website.");
		document.getElementById("email").value ="";
		document.getElementById("password").value="";
		parent.location.href ="indexMenu.html";
		return ;
	}
}

function logOut()
{
	event.preventDefault();
	alert('Thank you!');
	parent.location.href ="index.html";
	//Userfront.logout();
  document.getElementById("username").value="";
  document.getElementById("password").value="";
  document.getElementById("username").focus();
}
