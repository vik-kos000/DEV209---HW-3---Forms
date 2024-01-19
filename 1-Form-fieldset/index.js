
document.getElementById("login").addEventListener("click", newUserLogin); 
document.getElementById("login2").addEventListener("click", oldUserLogin);
document.getElementById("newUser").addEventListener("click", newUser); 
document.getElementById("oldUser").addEventListener("click", existingUser);


document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("logIn").disabled = true;
    document.getElementById("custInfo").disabled = true;
});

function newUser(event){
    document.getElementById("custInfo").disabled = false;
    document.getElementById("logIn").disabled = true;
    document.getElementById("newOrOldUser").disabled = true;
}

function existingUser(event){
    document.getElementById("logIn").disabled = false;
    document.getElementById("custInfo").disabled = true;
    document.getElementById("newOrOldUser").disabled = true;
}

function newUserLogin(event){
    let UserName = document.getElementById("UserName").value;
    let Password = document.getElementById("Password").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;

    if (UserName.length > 2 && Password.length > 2 && city.length > 2 && state.length > 1) {
        alert("Welcome " + UserName);

        localStorage.setItem("UserName", UserName);
        localStorage.setItem("Password", Password);
        localStorage.setItem("city", city);
        localStorage.setItem("state", state);
    }
    else {
        alert("please fill in all fields");
    }
}

function oldUserLogin(event){
    let storedUserName = localStorage.getItem("UserName");
    let storedPassword = localStorage.getItem("Password");

    let logInUserName = document.getElementById("logInUserName").value;
    let logInPassword = document.getElementById("logInPassword").value;

    if (logInUserName === storedUserName && logInPassword === storedPassword) {
        alert("Welcome back " + logInUserName);
    } else {
        alert("Invalid");
    }
}



