function valid(){
var name = document.getElementById("nameId").value;
console.log(name);
var email=document.getElementById("EmailId").value;
var phoneNumber = document.getElementById("phoneNumberId").value;


if(isBlank(name)) {
    document.getElementById("nameId").innerHTML = "Please enter your name";
    document.getElementById("nameId").style.color =  "red";
    return false;
}
if(!isValidEmail(email)){
   document.getElementById("EmailId").innerHTML="please enter valid email";
   document.getElementById("EmailId").style.color="red";
   return false;
}

if(!isValidPhoneNumber(phoneNumber)) {
    document.getElementById("phoneNumberId").innerHTML = "Please enter valid phone number";
    document.getElementById("phoneNumberId").style.color =  "red";
    return false;
}


return true;
}

function isBlank(val) {
return (val==="")?true:false;
}
function isValidEmail(email){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(RegistrationForm.email.value))
      return true;
    else
      alert("You have entered an invalid email address!");
      return false;
  
}

function isValidPhoneNumber(phoneNumber) {
var phoneRegex = /^[6-9]{2}[0-9]{8}$/;
return phoneNumber.match(phoneRegex)?true:false;
}
console.log("done");
