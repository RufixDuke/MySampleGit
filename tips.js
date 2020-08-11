// function tip(rate, amount, numberOfPeople) {

//     const tip = ((rate / 100) * amount * (1 / numberOfPeople))

//     return tip
// }

function calculateTip(event) {
    const rate = document.getElementById("hs").value;
    
    const amount = document.getElementById("hb").value;
    
    const numberOfPeople = document.getElementById("hp").value;

    const tip = ((rate / 100) * amount * (1 / numberOfPeople));
    document.getElementById("result").innerHTML = tip;
    return tip;
}
