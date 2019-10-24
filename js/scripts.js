$(document).ready(function() {
var height= parseInt(prompt("Enter your height in inches"));

if (height <= 48) {
  $("#kids").css("background-color", "yellow");
}
else if (height > 48 && height < 65) {
  $('#teen').css("background-color", "yellow");
  $('#kids').css("background-color", "yellow");
}

else if (height > 65) {
  $('#adult').css("background-color", "yellow");
  $('#teen').css("background-color", "yellow");
  $('#kids').css("background-color", "yellow");
}

// else ()







});
