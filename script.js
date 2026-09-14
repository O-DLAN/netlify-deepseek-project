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
    "Välkommen! Jag laddade precis upp mina humor‑kretsar… hoppas de fungerar.",
    "Jag är en AI‑robot från Gotland. Inte lika klok som en bagge, men jag försöker.",
    "Spelet är igång! Jag laddade precis ett nytt samtalskort… och mig själv också.",
    "Hej! Jag lovar att inte fuska i spelet… bara skoja lite."
];


// -----------------------------
// Startskämt + visa första kortet
// -----------------------------
window.addEventListener("load", () => {
    const random = Math.floor(Math.random() * jokes.length);
    document.getElementById("ai-response").innerText = jokes[random];
    showCard(currentIndex);
});


// -----------------------------
// Nästa kort
// -----------------------------
document.getElementById("next-card").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
    document.getElementById("ai-response").innerText = "Inget svar ännu...";
});


// -----------------------------
// Skicka till AI
// -----------------------------
document.getElementById("send-ai").addEventListener("click", async () => {
    const userAnswer = document.getElementById("user-answer").value;

    const responseBox = document.getElementById("ai-response");
    responseBox.innerText = "AI tänker...";

    try {
        const res = await fetch("/.netlify/functions/deepspeek", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                question: cards[currentIndex].text,
                answer: userAnswer
            })
        });

        const data = await res.json();

        responseBox.innerText = data.reply || "AI kunde inte svara just nu.";
    } catch (error) {
        responseBox.innerText = "Fel: AI kunde inte nås.";
    }
});
