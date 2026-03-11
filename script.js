const today = new Date();

const date = today.toDateString();

document.getElementById("date").innerHTML =
"Portfolio last updated on: " + date;