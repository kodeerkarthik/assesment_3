
document.getElementById("signup").style.display = "none";
$("#btnLogin").click(function(event) {
    //Fetch form to apply custom Bootstrap validation
    var form = $("#formLogin")
 
    if (form[0].checkValidity() === false) { 
      event.preventDefault()
      event.stopPropagation()
    }   
    form.addClass('was-validated');
});

function signup()
{
	document.getElementById("signup").style.display = "block";
	document.getElementById("main").style.display = "none";
}
function signup_complete(){
	
}
function check_Email(mail){
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{1,5}){2,25})$/;
    if(regex.test(mail.myemail.value)){
      // return true;
    }
    else{
      alert("This is not a valid email address");
      // return false;
    }
    var regpwd = /^(?=.*\d).{4,8}$/;
    if(regpwd.test(mail.mypwd.value)){
      location.href = "http://google.com";
    }
    else{
      alert("This is not a valid password");
      // return false;
    }
}
function check_form(elmt){
	var regfname = /^[a-zA-Z ]{2,30}$/;
		if(regfname.test(elmt.fname.value)){}
		else alert("Please Enter valid first_name");
	var reglname = /^[a-zA-Z ]{2,30}$/;
		if(reglname.test(elmt.lname.value)){}
		else alert("Please Enter valid last_name");
	var regemail =/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{1,5}){2,25})$/;
		if(regemail.test(elmt.email.value)){}
		else alert("Please Enter valid emali");
	var regph_no = /^[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
		if(regph_no.test(elmt.ph_no.value)){}
		else alert("Please Enter valid phone number");
	var regadr1 = /^[a-zA-Z0-9\s\,\''\-]*$/;
		if(regadr1.test(elmt.adr1.value)){}
		else alert("Please Enter valid address1");
	var regadr2 = /^[a-zA-Z0-9\s\,\''\-]*$/;
		if(regadr2.test(elmt.adr2.value)){}
		else alert("Please Enter valid address2");
	var regcity =  /^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/;
		if(regcity.test(elmt.city.value)){}
		else alert("Please Enter valid city name");
	var regstate =  /^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/;
		if(regstate.test(elmt.state.value)){}
		else alert("Please Enter valid state name");
	var regzip = /^\d{5}$|^\d{5}-\d{4}$/;
		if(regzip.test(elmt.zip.value)){}
		else alert("Please Enter valid zip code");
	var regpwd =  /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
		if(regpwd.test(elmt.pwd.value)){}
		else alert("Please Enter valid password");
	var regv_pwd =  /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
		if(regv_pwd.test(elmt.v_pwd.value) && pwd==v_pwd){}
		else alert("password missmatch");
	var fname=document.myform.fname.value;
	var lname=document.myform.lname.value;
	var email=document.myform.email.value;
	var ph=document.myform.ph_no.value;
	var adr1=document.myform.adr1.value;
	var adr2=document.myform.adr2.value;
	var city=document.myform.city.value;
	var state=document.myform.state.value;
	var zip=document.myform.zip.value;
	var pwd=document.myform.pwd.value;
	var v_pwd=document.myform.v_pwd.value

	if(fname=='null' || fname=="") {
		document.getElementById("pfname").innerHTML="Firstname can't be blank";
		document.getElementById("fname").style.color="#ff0000b5";
		document.getElementById("ifname").style.border="1px solid #ff0000b5";
	}
	if(lname=='null' || lname=="") {
		document.getElementById("plname").innerHTML="lastname can't be blank";
		document.getElementById("lname").style.color="#ff0000b5";
		document.getElementById("ilname").style.border="1px solid #ff0000b5";
	}
	if(email=='null' || email=="") {
		document.getElementById("pemail").innerHTML="email can't be blank";
		document.getElementById("email").style.color="#ff0000b5";
		document.getElementById("iemail").style.border="1px solid #ff0000b5";
	}			
	if(ph=='null' || ph=="") {
		document.getElementById("pph_no").innerHTML="phone number can't be blank";	
		document.getElementById("ph").style.color="#ff0000b5";
		document.getElementById("iph").style.border="1px solid #ff0000b5";
	}		
	if(adr1=='null' || adr1==""){
		document.getElementById("padr1").innerHTML="address1 can't be blank";
		document.getElementById("adr1").style.color="#ff0000b5	";
		document.getElementById("iadr1").style.border="1px solid #ff0000b5";
	}
	if(adr2=='null' || adr2==""){
		document.getElementById("padr2").innerHTML="address2 can't be blank";
		document.getElementById("adr2").style.color="#ff0000b5	";
		document.getElementById("iadr2").style.border="1px solid #ff0000b5";
	}
	if(city=='null' || city==""){
		document.getElementById("pcity").innerHTML="city can't be blank";
		document.getElementById("city").style.color="#ff0000b5	";
		document.getElementById("icity").style.border="1px solid #ff0000b5";
	}
	if(state=='null' || state==""){
		document.getElementById("pstate").innerHTML="state can't be blank";	
		document.getElementById("state").style.color="#ff0000b5	";
		document.getElementById("istate").style.border="1px solid #ff0000b5";
	}
	if(zip=='null' || zip==""){
		document.getElementById("pzip").innerHTML="zip can't be blank";	
		document.getElementById("zip").style.color="#ff0000b5	";
		document.getElementById("izip").style.border="1px solid #ff0000b5";	
	}
	if(pwd=='null' || pwd==""){
		document.getElementById("ppwd").innerHTML="zip can't be blank";	
		document.getElementById("pwd").style.color="#ff0000b5	";
		document.getElementById("ipwd").style.border="1px solid #ff0000b5";	
	}
	if(v_pwd=='null' || v_pwd==""){
		document.getElementById("pv_pwd").innerHTML="zip can't be blank";	
		document.getElementById("v_pwd").style.color="#ff0000b5	";
		document.getElementById("iv_pwd").style.border="1px solid #ff0000b5";	
	}
}
