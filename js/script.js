/* Consegna
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

// Dichiaro gli eventi del pulsante
let button = document.querySelector('.play');
button.addEventListener ('click', function () {
    let level = document.getElementById("diff");
    let active = document.querySelector(".screen");
    let container = document.querySelector(".field");
    let row;
    let col;
//  Eventi in base alla scelta del livello
    switch (level.value) {
        case 'easy':
                container.innerHTML = "";
                active.classList.add("show");
                row = 10;
                col = 10;
            createSquare(row, col);
            break;
            case 'medium':
                container.innerHTML = "";
                active.classList.add("show");
                row = 9;
                col = 9;
                createSquare(row, col);
                break;
            case 'hard':
                container.innerHTML = "";
                active.classList.add("show");
                row = 7;
                col = 7;
                createSquare(row, col);
                break;
    }
    // Funzione per creare le griglie
    function createSquare(row, col) {
        let container = document.querySelector(".field");
        let numberSquare = row * col;
        for (let i = 0; i < numberSquare; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${col})`;
            square.style.height = `calc(100% / ${row})`;
            let numbers = i + 1;
            square.append(numbers);
            container.append(square);

            // Aggiungere BG al clic
            square.addEventListener ('click', function () {
                
                if (bombNumber.includes(i + 1)){
                    this.classList.add ('bg-bomb');
                } else{
                    this.classList.add ('bg-active');
                }
    })}}
})

// Creo Array per le bombe
let bombNumber = [];
for (let i = 0; i < 16; i++) {
    let number = parseInt(Math.floor(Math.random() * 101));
    while (!bombNumber.includes(number)){
         bombNumber.push(number);
    }
}
console.log(bombNumber);