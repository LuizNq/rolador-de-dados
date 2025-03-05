let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    let qtdDados = document.getElementById("qty").value;
    let array = new Array(qtdDados);
    let images = [];
    let diceResult = document.getElementById("diceResult");
    let diceImages = document.getElementById("diceImages");

    for(let i = 0; i < qtdDados; i++) {
        array[i] = Math.floor(Math.random() * 6) + 1;
        images.push(`<img src="Images/dice-six-faces-${array[i]}.png" alt="Dado ${array[i]}">`);
    }

    diceResult.textContent = `Dados: ${array.join(", ")}`;
    diceImages.innerHTML = images.join(' ');
});