var startTime = new Date;

function storeCookie() {
	setCookie('firstName', document.getElementById("firstname").value,8);
	var var1;
	var1 = document.getElementById("lastname").value;
	setCookie('lastName', var1,8);
	setCookie('username', document.getElementById("username").value,8);
	setCookie('phoneNumber', document.getElementById("phoneNumber").value,8);
	setCookie('remail', document.getElementById("remail").value,8);	
	setCookie('time', (Date.now() - startTime)/1000, 8);
} 

function setCookie(cname, cvalue, exdays) 
{
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) 
{
	let name = cname + "=";
	let ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++)
		{
			let c = ca[i];
			while (c.charAt(0) == ' ') 
			{
				c = c.substring(1);
			}

      if (c.indexOf(name) == 0)
		  {
			return c.substring(name.length, c.length);
		  }
	}

    return "";

}

function runTime() {
	startTime = Date.now();
	
}



function showCookie(){
	alert(getCookie('firstname'));
	document.getElementById("1firstName").innerHTML=getCookie('firstName');
	document.getElementById("1lastName").innerHTML=getCookie('lastName');
	document.getElementById("1username").innerHTML=getCookie("username");
	document.getElementById("1phoneNumber").innerHTML=getCookie("phoneNumber");
	document.getElementById("1remail").innerHTML=getCookie("remail");
	document.getElementById("1time").innerHTML=getCookie("time")+" seconds";
}
function run(){
	setCookie('cookie1',100,10);
}
$(document).ready( function(){
	$("#p4").click(function() {

		var okay = getCookie('cookie1');
		alert("Cookie Value: \n"+okay);
});
});

