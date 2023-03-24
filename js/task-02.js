const ingredients = [
  "potatoes",
  "Mushrooms",
  "garlic",
  "Tomatos",
  "Herbs",
  "Conditions",
];

const ul = document.querySelector("ul#ingredients");

const liElements = [];

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");

  li.textContent = ingredient;

  li.classList.add("item");

  liElements.push(li);
});

ul.append(...liElements);
