alert("Booting system... give us some data, pilot.");
let namePilot= prompt("What is your name?");
let velInitial= 0
let velRel= prompt("Accelerate to what speed? (only numbers)");
let confirmSpeed= confirm("Go to speed " + velRel + "m/s?");
if(confirmSpeed){
    velInitial= velRel
}
if(velInitial <= 0){
    alert("The ship will not go on course.")
}else if(velInitial <= 40){
        alert("The ship does not have the power to go on course")
    } else alert("The ship started its course")
alert("Pilot: " + namePilot + "   Speed: " + velInitial + " m/s");
console.log(namePilot);
console.log(velInitial + " m/s");


