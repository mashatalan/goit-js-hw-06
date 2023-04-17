const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment();

for (const ingredient of ingredients) {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');
  fragment.appendChild(ingredientEl);

}

ingredientsListEl.appendChild(fragment);

