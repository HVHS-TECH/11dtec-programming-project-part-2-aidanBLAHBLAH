
let seats;
let carArray = ["Bac Mono, MXC, Mini, i30, Kona, Falcon, Prado, Outlander, Estima", car];
let carSeats = ["1 seat, 2 seat, 4 seats, 4 seats, 5 seats, 5 seats, 5 seats, 7 seats, 8 seats"];
let carPrices = [25, 45, 30, 35, 55, 60, 70, 85, 90];
let insurance;


    function getSeats() {
  if (document.getElementById("1seat").checked) {
    seats = "Bac Mono";
    document.getElementById("seats").innerHTML = "Our options for our one seaters are:\nBac Mono at $25/day" 
  } else if (document.getElementById("2seats").checked){
    seats = 1;
    document.getElementById("seats").innerHTML = "Our options for our two seaters are:\nMXC at $45/day"
    document.body.append(MX5)
  } else if (document.getElementById("4seats").checked){
    seats = 2;
    document.getElementById("seats").innerHTML = "Our options for our four seaters are:\nMini at $30/day\ni30 at $35/day"
  } else if (document.getElementById("5seats").checked){
    seats = 3;
    document.getElementById("seats").innerHTML = "Our options for our five seaters are:\nKona at $55/day\nFalcon at $60/day\nPrado at $70/day"
  } else if (document.getElementById("7seats").checked){
    seats = 4;
    document.getElementById("seats").innerHTML = "Our options for our seven seaters are:\nOutlander at $85/day"
  } else {
    seats = 5;
    document.getElementById("seats").innerHTML = "Our options for our eight seaters are:\nEstima at $90/day"
  }
    
}

    function getInsurance(){
  if (document.getElementById("yes").checked){
    document.getElementById("insurance").innerHTML = "You will have insurance"
    insurance = 15;
  } else if (document.getElementById("no").checked){
    document.getElementById("insurance").innerHTML = "You will not have insurance"
    insurance = 0;
  }
}

function getDays() {
  x = Number[x]
  var x = document.getElementById("days").value;
  if (seat = "Bac Mono")
  document.getElementById("daysP").innerHTML = x * 25;


}

