let select_car = {
  type: "text"
}
let seats;
let carArray = ["Bac Mono, MXC, Mini, i30, Kona, Falcon, Prado, Outlander, Estima", car];
let carSeats = ["1 seat, 2 seat, 4 seats, 4 seats, 5 seats, 5 seats, 5 seats, 7 seats, 8 seats"];
let carPrices = [25, 45, 30, 35, 55, 60, 70, 85, 90];
let insurance;


    function getSeats() {
  if (document.getElementById("1seat").checked) {
    document.getElementById("seats").innerHTML = "Our options for our one seaters are: Bac Mono at $25/day" 
    document.getElementById('1SeatConfirm').style.display = 'block';
  } 
  
  else if (document.getElementById("2seats").checked){
    document.getElementById("seats").innerHTML = "Our options for our two seaters are: MXC at $45/day"
    document.getElementById('2SeatConfirm').style.display = 'block';
  } 

  else if (document.getElementById("4seats").checked){
    document.getElementById("seats").innerHTML = "Our options for our four seaters are: Mini at $30/day and i30 at $35/day"
    document.getElementById('4SeatConfirm').style.display = 'block';
  } 

  else if (document.getElementById("5seats").checked){
    document.getElementById("seats").innerHTML = "Our options for our five seaters are: Kona at $55/day, Falcon at $60/day and Prado at $70/day"
    document.getElementById('5SeatConfirm').style.display = 'block';
  } 

  else if (document.getElementById("7seats").checked){
    document.getElementById("seats").innerHTML = "Our options for our seven seaters are: Outlander at $85/day"
    document.getElementById('7SeatConfirm').style.display = 'block';
  } 

  else {
    document.getElementById("seats").innerHTML = "Our options for our eight seaters are: Estima at $90/day"
    document.getElementById('8SeatConfirm').style.display = 'block';
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
  document.getElementById("daysP").innerHTML = x * seats;


}

