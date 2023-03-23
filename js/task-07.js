const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");



input.addEventListener("input", (event) => {
  const size = input.value;
    document.body.style.fontSize = size + "px";
  
});