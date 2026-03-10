const revealItems = document.querySelectorAll(".reveal");

const applyStagger = () => {
  revealItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 120}ms`;
  });
};

window.addEventListener("load", applyStagger);
