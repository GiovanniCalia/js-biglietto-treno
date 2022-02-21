let userKilometerTraveled = parseInt(prompt ("quanti kilometri vuoi percorrere"));
if (isNaN(userKilometerTraveled)){
    alert(`We need a number`)
}

let PrezzoAlKm = 0.21;

let userAge = parseInt(prompt ("Quanti hanni hai?"));
if (isNaN(userAge)){
    alert(`We need a number`)
}

/*let userTicketCost = parseInt(prompt ("prezzo biglietto"));
if (isNaN(userTicketCost)){
    alert(`We need a number`)
}*/

let element = document.getElementById("content");

/*element.innerHTML = `Età passeggero: ${userAge} anni. Chilometri da percorrere: ${userKilometerTraveled} km.`;*/


if (userAge > 18){
    let prezzofinale = ( userKilometerTraveled * PrezzoAlKm) - 20 * 100;
    document.getElementById("content").innerHTML = `Il prezzo del biglietto è + ${prezzofinale;}`;
}



