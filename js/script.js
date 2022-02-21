let userKilometerTraveled = parseInt(prompt ("quanti kilometri vuoi percorrere"));
if (isNaN(userKilometerTraveled)){
    alert(`We need a number`)
}

let PrezzoAlKm = 0.21;

let userAge = parseInt(prompt ("Quanti hanni hai?"));
if (isNaN(userAge)){
    alert(`We need a number`)
}

let element = document.getElementById("text_output")
let element2 = document.getElementById("text_output2");

element.innerHTML = `Età passeggero: ${userAge} anni. Chilometri da percorrere: ${userKilometerTraveled} km.`;

if (userAge < 18){
    let prezzofinale = Math.round((userKilometerTraveled * PrezzoAlKm) - (userKilometerTraveled * PrezzoAlKm * 0.2));
    element2.innerHTML = `Il prezzo del biglietto è ${prezzofinale}€`;
} else if (userAge > 65){
    let prezzofinale = Math.round((userKilometerTraveled * PrezzoAlKm) - (userKilometerTraveled * PrezzoAlKm * 0.4));
    element2.innerHTML = `Il prezzo del biglietto è ${prezzofinale}€`;
} else{
    let prezzofinale = Math.round((userKilometerTraveled * PrezzoAlKm));
    element2.innerHTML = `Il prezzo del biglietto è ${prezzofinale}€`;
}



