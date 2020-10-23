
const card = document.querySelector("#credit-card");
const buttonFooter = document.querySelector("#btn-summary-toggle");

card.addEventListener("click", e => {
    card.classList.toggle('flipped');
})

buttonFooter.addEventListener("click", function () {
    document.querySelector("aside").classList.toggle("open");
})