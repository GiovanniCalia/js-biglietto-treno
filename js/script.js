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

if (userAge > 17){
    let prezzofinale = (userKilometerTraveled * PrezzoAlKm) - (userKilometerTraveled * PrezzoAlKm * 0.2);
    element2.innerHTML = `Il prezzo del biglietto è ${prezzofinale}€`;
    console.log(prezzofinale);
} else if (userAge < 65){
    let prezzofinale = (userKilometerTraveled * PrezzoAlKm);
    element2.innerHTML = `Il prezzo del biglietto è ${prezzofinale}€`;
    console.log(prezzofinale);
}



