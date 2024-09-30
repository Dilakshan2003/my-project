// register

document
.getElementById("RegisterForm")
.addEventListener("submit", function (event) {
event.preventDefault();

var fullname = document.getElementById("fullname").value;
var phonenumber = document.getElementById("phonenumber").value;
var licensenumber = document.getElementById("licensenumber").value;
var Emailname = document.getElementById("Emailname").value;
var passwordName = document. getElementById("passwordName").value;
var confirmPassword =document.getElementById("confirmPassword").value;

if (passwordName !== confirmPassword) {
alert("Passwords do not match");
return;
}

const user ={

Emailname: Emailname,
passwordName: passwordName,
fullname:fullname,
phonenumber:phonenumber,
licensenumber:licensenumber,



};
localStorage. setItem(Emailname, JSON.stringify(user));
alert("Registration successful! Please login.");
window. location.href = "login.html";
}); 

// login


document.getElementById("loginForm")
    .addEventListener("submit", function (event) {
    event.preventDefault();
    var Emailname = document.getElementById("Emailname").value;
    var passwordName = document.getElementById("passwordName").value;
    
    var user = localStorage.getItem(Emailname);
    
    if (user) {
    var parsedUser = JSON.parse(user);
    if (parsedUser.passwordName === passwordName) {
    localStorage.setItem("user", JSON.stringify(parsedUser));
    window. location.href = "carrent.html";
    } else {
    alert("Incorrect password");
    }
    
    
    } else {
    alert("User not found");
    }
    });

