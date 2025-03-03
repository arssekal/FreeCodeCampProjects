const buttons = document.querySelectorAll("button");
const tabs = document.querySelectorAll(".tabs div");
console.log(buttons);
console.log(tabs);

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    tabs.forEach((elem, idx) => {
        if(idx === index) {
            elem.classList.remove("hide");
        } else {
            elem.classList.add("hide");
        }
    })
  });
});
