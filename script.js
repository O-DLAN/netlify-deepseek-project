// Dina samtalskort
const cards = [
    "Vad är det bästa minnet du har från Gotland?",
    "Hur skulle du beskriva perfekt hospitality?",
    "Vad betyder 'mm' för dig i ett samtal?",
    "Vilket är ditt starkaste 'Aa'-ögonblick?",
    "Om du fick skapa ett nytt samtalskort – vad skulle det heta?",
    "Vilken plats ger dig mest energi?",
    "Vad inspirerar dig just nu?",
    "Vilken person har påverkat dig mest i livet?"
];

// Element i HTML
const cardText = document.getElementById("card-text");
const nextCardBtn = document.getElementById("next-card");

// Funktion för att visa ett slumpat kort
function showRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    cardText.textContent = cards[randomIndex];
}

// När sidan laddas
showRandomCard();

// När man trycker på "Nästa kort"
nextCardBtn.addEventListener("click", showRandomCard);
