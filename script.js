// Dina samtalskort
const cards = [
    {
        text: "Hej och välkommen till Ord & Omtanke. Testa att prata med vår AI‑robot och upptäck något nytt."
    },
    {
        text: "Vad gör dig glad just nu?"
    },
    {
        text: "När känner du dig som mest trygg?"
    },
    {
        text: "Vad betyder omtanke för dig?"
    }
];

let currentIndex = 0;

// Visa kortet
function showCard(index) {
    const cardText = document.getElementById("card-text");
    cardText.innerText = cards[index].text;
}

// Startskämt (slumpat) när sidan laddas
const
