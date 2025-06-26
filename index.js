     var seats;

    const BacMono = document.createElement("img");
BacMono.src = "BacMono.png";
BacMono.alt = "Bac Mono";

const MX5 = document.createElement("img");
MX5.src = "MX5.png";
MX5.alt = "MX5 car";

    const help ={
innerHTML: "help me"
    }

    function getSeats() {
  if (document.getElementById("1seat").checked) {
    seats = "1 seat";
    document.getElementById("out").innerHTML = "Our options for our one seaters are:\nBac Mono at $25/day" 
    document.body.append(BacMono)
  } else if (document.getElementById("2seats").checked){
    seats = "2 seats";
    document.getElementById("out").innerHTML = "Our options for our two seaters are:\nMXC at $45/day"
    document.body.append(MX5)
  } else if (document.getElementById("4seats").checked){
    seats = "4 seats";
    document.getElementById("out").innerHTML = "Our options for our four seaters are:\nMini at $30/day\ni30 at $35/day"
  } else if (document.getElementById("5seats").checked){
    seats = "5 seats";
    document.getElementById("out").innerHTML = "Our options for our five seaters are:\nKona at $55/day\nFalcon at $60/day\nPrado at $70/day"
  } else if (document.getElementById("7seats").checked){
    seats = "7 seats";
    document.getElementById("out").innerHTML = "Our options for our seven seaters are:\nOutlander at $85/day"
  } else {
    seats = "8 seats";
    document.getElementById("out").innerHTML = "Our options for our eight seaters are:\nEstima at $90/day"
  }
    
}


