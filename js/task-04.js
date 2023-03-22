const counterValue = document.querySelector("#value");
let value = 0;

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;
    if (action === "increment") {
      value++;
    } else if (action === "decrement") {
      value--;
    }
    counterValue.textContent = value;
  });
});
