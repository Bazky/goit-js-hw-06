
const categoriesList = document.querySelector("#categories");


const categories = categoriesList.querySelectorAll("li.item");


const numCategories = categories.length;
console.log(`Number of categories: ${numCategories}`);


categories.forEach(category => {
 
  const header = category.querySelector("h2").textContent;
  

  const numItems = category.querySelectorAll("li").length;
  
 
  console.log(`Category: ${header}\nElements: ${numItems}`);
});
