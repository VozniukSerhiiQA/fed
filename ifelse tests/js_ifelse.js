var login = prompt("Who are you?", "your name");
if (login == 'Admin') {

    alert("Welcome Admin");
       var pass_admin = prompt("What is your password?", 'your password');
       if (pass_admin=='123') {
           alert("Password is correct");
       }else if (pass_admin==null) {
        alert("Password is declined");
        }
       else {
           alert("Password is incorrect");
       }

} else if (login==null) {
    alert("User name is declined");

} else {
    alert("achtung it's else condition");
}

// Or second view how to validate user

var password;
var user2 = prompt("2. Who are you?", "your name");
(user2 == 'Admin') ?
    password2 = prompt("Your password?") : alert("2. I  don't know you");
(password2 == '123') ?
    password = alert("2. Welcome Admin") : alert('2. Wrong password');