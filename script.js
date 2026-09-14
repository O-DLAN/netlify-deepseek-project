// -----------------------------
// Samtalskort
// -----------------------------
const cards = [
    {
        text: "Hej och välkommen till Ord & Omtanke! Testa att prata med vår AI‑robot och upptäck något nytt."
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


// -----------------------------
// Visa kort
// -----------------------------
function showCard(index) {
    const cardText = document.getElementById("card-text");
    cardText.innerText = cards[index].text;
}


// -----------------------------
// Humor-skämten som visas vid sidstart
// -----------------------------
const jokes = [
    "Hej! Jag är din AI‑robot. Jag är som ett samtalskort, fast jag pratar tillbaka.",
    "Välkommen! Jag
