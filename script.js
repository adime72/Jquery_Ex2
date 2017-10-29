// Code goes here
/*
function closeWindow() {
  document.getElementById("image1").src = 
    "http://nachalo4ka.ru/wp-content/uploads/2014/08/0_6c946_9b7e2cfd_XXXL.png";
}

function openWindow() {
  document.getElementById("image1").src = 
    "http://weknowyourdreams.com/images/window/window-04.jpg";
} */
$(document).ready(function () {
  $("#closewindow > button").click(function () {
    $("#image1").attr("src", "http://nachalo4ka.ru/wp-content/uploads/2014/08/0_6c946_9b7e2cfd_XXXL.png")
  });
  $("#openwindow > button").click(function () {
    $("#image2").attr("src", "http://weknowyourdreams.com/images/window/window-04.jpg")
  });
});