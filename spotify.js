console.log("Spotify Clone Loaded");
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        alert("Playing: " + card.querySelector("h4").innerText);
    });
});