const portfolioCards = document.querySelectorAll(".portfolio-card");

portfolioCards.forEach(function(card) {
    card.addEventListener("click", function() {
        card.style.zIndex = "50";
    });
});
