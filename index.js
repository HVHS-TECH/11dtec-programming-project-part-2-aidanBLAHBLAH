//Variables
let car;
let seats;
let carArray = ["Bac Mono, MXC, Mini, i30, Kona, Falcon, Prado, Outlander, Estima", car];
let carSeats = ["1 seat, 2 seat, 4 seats, 4 seats, 5 seats, 5 seats, 5 seats, 7 seats, 8 seats"];
let carPrices = [25, 45, 30, 35, 55, 60, 70, 85, 90];
let insurance;
let carPrice;
let rental;


    function getSeats() {
  if (document.getElementById("1seat").checked) {
    document.getElementById("seats").innerHTML = "Our options for our one seaters are: Bac Mono at $25/day" 
    document.getElementById('1SeatConfirm').style.display = 'block';
    document.getElementById('2SeatConfirm').style.display = 'none';
    document.getElementById('4SeatConfirm').style.display = 'none';
    document.getElementById('5SeatConfirm').style.display = 'none';
    document.getElementById('7SeatConfirm').style.display = 'none';
    document.getElementById('8SeatConfirm').style.display = 'none';
  } //Checks if 1 seat options has been checked and hides the option to choose other cars
  
  else if (document.getElementById("2seats").checked){
    document.getElementById("seats").innerHTML = "Our options for our two seaters are: MXC at $45/day"
    document.getElementById('1SeatConfirm').style.display = 'none';
    document.getElementById('2SeatConfirm').style.display = 'block';
    document.getElementById('4SeatConfirm').style.display = 'none';
    document.getElementById('5SeatConfirm').style.display = 'none';
    document.getElementById('7SeatConfirm').style.display = 'none';
    document.getElementById('8SeatConfirm').style.display = 'none';
  } //Checks if 2 seat options has been checked and hides the option to choose other cars

  else if (document.getElementById("4seats").checked){
    document.getElementById("seats").innerHTML = "Our options for our four seaters are: Mini at $30/day and i30 at $35/day"
    document.getElementById('1SeatConfirm').style.display = 'none';
    document.getElementById('2SeatConfirm').style.display = 'none';
    document.getElementById('4SeatConfirm').style.display = 'block';
    document.getElementById('5SeatConfirm').style.display = 'none';
    document.getElementById('7SeatConfirm').style.display = 'none';
    document.getElementById('8SeatConfirm').style.display = 'none';
  } //Checks if 4 seat options has been checked and hides the option to choose other cars

  else if (document.getElementById("5seats").checked){
    document.getElementById("seats").innerHTML = "Our options for our five seaters are: Kona at $55/day, Falcon at $60/day and Prado at $70/day"
    document.getElementById('1SeatConfirm').style.display = 'none';
    document.getElementById('2SeatConfirm').style.display = 'none';
    document.getElementById('4SeatConfirm').style.display = 'none';
    document.getElementById('5SeatConfirm').style.display = 'block';
    document.getElementById('7SeatConfirm').style.display = 'none';
    document.getElementById('8SeatConfirm').style.display = 'none';
  } //Checks if 5 seat options has been checked and hides the option to choose other cars

  else if (document.getElementById("7seats").checked){
    document.getElementById("seats").innerHTML = "Our options for our seven seaters are: Outlander at $85/day"
    document.getElementById('1SeatConfirm').style.display = 'none';
    document.getElementById('2SeatConfirm').style.display = 'none';
    document.getElementById('4SeatConfirm').style.display = 'none';
    document.getElementById('5SeatConfirm').style.display = 'none';
    document.getElementById('7SeatConfirm').style.display = 'block';
    document.getElementById('8SeatConfirm').style.display = 'none';
  } //Checks if 7 seat options has been checked and hides the option to choose other cars

  else {
    document.getElementById("seats").innerHTML = "Our options for our eight seaters are: Estima at $90/day"
    document.getElementById('1SeatConfirm').style.display = 'none';
    document.getElementById('2SeatConfirm').style.display = 'none';
    document.getElementById('4SeatConfirm').style.display = 'none';
    document.getElementById('5SeatConfirm').style.display = 'none';
    document.getElementById('7SeatConfirm').style.display = 'none';
    document.getElementById('8SeatConfirm').style.display = 'block';
  } //Checks if 8 seat options has been checked and hides the option to choose other cars


    
}

    function getInsurance(){
  if (document.getElementById("yes").checked){
    document.getElementById("insurance").innerHTML = "You will have insurance"
    insurance = 15;
    rental = carPrice + insurance
    rental = Number(rental)
    document.getElementById('divDays').style.display = 'block';
  } else if (document.getElementById("no").checked){
    document.getElementById("insurance").innerHTML = "You will not have insurance"
    insurance = 0;
    rental = carPrice + insurance
    rental = Number(rental)
    document.getElementById('divDays').style.display = 'block';
  }//Checks wether the yes or no option has been chosen for insurance and makes the final price that it will cost to rent the car per day
}

function getDays() {
  x = Number[x]
  var x = document.getElementById("days").value;
  if (seat = "Bac Mono")
  document.getElementById("daysP").innerHTML ="This will cost you $" + x * rental;
}//Checks what day is chosen and multiplies that day by the price of your rental

function carConfirm(){
  if(document.getElementById("MonoConfirm").checked){
    document.getElementById("test").innerHTML = "You will be renting a Bac Mono" 
    carPrice = 25
    document.getElementById('divInsurance').style.display = 'block';
  }else if (document.getElementById("MXCConfirm").checked){
    document.getElementById("test").innerHTML = "You will be renting a MXC"
    carPrice = 45
    document.getElementById('divInsurance').style.display = 'block';
  }else if (document.getElementById("MiniConfirm").checked){
    document.getElementById("test").innerHTML = "You will be renting a Mini"
    carPrice = 30
    document.getElementById('divInsurance').style.display = 'block';
  }else if (document.getElementById("i30Confirm").checked){
    document.getElementById("test").innerHTML = "You will be renting a i30"
    carPrice = 35
    document.getElementById('divInsurance').style.display = 'block';
  }else if (document.getElementById("KonaConfirm").checked){
    document.getElementById("test").innerHTML = "You will be renting a Kona"
    carPrice = 55
    document.getElementById('divInsurance').style.display = 'block';
  }else if (document.getElementById("FalconConfirm").checked){
    document.getElementById("test").innerHTML = "You will be renting a Falcon"
    carPrice = 60
    document.getElementById('divInsurance').style.display = 'block';
  }else if (document.getElementById("PradoConfirm").checked){
    document.getElementById("test").innerHTML = "You will be renting a Prado"
    carPrice = 70
    document.getElementById('divInsurance').style.display = 'block';
  }else if (document.getElementById("OutlanderConfirm").checked){
    document.getElementById("test").innerHTML = "You will be renting a Outlander"
    carPrice = 85
    document.getElementById('divInsurance').style.display = 'block';
  }else if (document.getElementById("EstimaConfirm").checked){
    document.getElementById("test").innerHTML = "You will be renting a Estima"
    carPrice = 90
    document.getElementById('divInsurance').style.display = 'block';
  }//Checks if you confirmed a car to rent and what car you rented
}