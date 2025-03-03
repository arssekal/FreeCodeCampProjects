const input = document.querySelector("input");
const buttons = document.querySelectorAll(".numbers div");

buttons.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    if (idx === buttons.length - 1) {
      input.value = "";
    } else if (idx === 11) {
      try {
        // la fonction eval est très dangereux
        // elle permet d'exécuter le contenu comme un code javascript
        input.value = eval(input.value);
      } catch (error) {
        input.value = "error"
      }
    } else {
      input.value += btn.textContent;
    }
  });
});
