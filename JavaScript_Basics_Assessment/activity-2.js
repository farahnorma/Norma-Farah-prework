//1. Grab a user input using a prompt() and store it in a variable.

const username = prompt('enter your name');


//2. conditional statement

if (username.length > 4) {

  alert('The name ' + username + " is greater than 4 characters long");
  //alert user that name is greater than 4 characters long
}
else {

  alert('The name ' + username + " is less than or equal to 4 characters long");
  //alert user that name is less than or equal to 4 characters long
}