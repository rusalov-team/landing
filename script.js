const cards = document.querySelectorAll(".card");
const reveal = () => {
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 140}ms`;
  });
};

window.addEventListener("load", reveal);
