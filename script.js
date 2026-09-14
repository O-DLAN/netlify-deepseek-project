// Alla kort (lägg till fler här)
const cards = [
    {
        text: "Är du redo att spela spelet?"
    },
    {
        text: "Vad gör dig glad just nu?"
    },
    {
        text: "När känner du dig som mest trygg?"
    }
];

let currentIndex = 0;

// Visa kort
function showCard(index) {
    const card = cards[index];
    document.getElementById("card-text").innerText = card.text;

    // Töm tidigare svar
    document.getElementById("user-answer").value = "";
    document.getElementById("ai-response").innerText = "Inget svar ännu...";
}

showCard(currentIndex);

// Skicka till Netlify + DeepSeek
document.getElementById("send-answer").addEventListener("click", async () => {
    const question = document.getElementById("card-text").innerText;
    const userAnswer = document.getElementById("user-answer").value;

    if (!userAnswer.trim()) {
        alert("Skriv ett svar först.");
        return;
    }

    const response = await fetch("/.netlify/functions/deepseek", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            question: question,
            answer: userAnswer
        })
    });

    const data = await response.json();
    document.getElementById("ai-response").innerText = data.reply;
});

// Nästa kort
document.getElementById("next-card-btn").addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= cards.length) {
        currentIndex = 0; // Börja om från första kortet
    }

    showCard(currentIndex);
});
