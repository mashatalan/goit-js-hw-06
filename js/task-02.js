const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const ingredientEl = document.createElement('li');

  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');

  ingredientsListEl.appendChild(ingredientEl);
}



