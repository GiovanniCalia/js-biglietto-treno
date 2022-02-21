let userKilometerTraveled = prompt ("quanti kilometri vuoi percorrere");
let userAge = prompt ("Quanti hanni hai?");
let element = document.getElementById("content");

element.innerHTML = `Età passeggero: ${userAge} anni. Chilometri da percorrere: ${userKilometerTraveled} km`;