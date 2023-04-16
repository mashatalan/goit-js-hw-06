const categoriesListEl = document.querySelector('#categories');
const categoriesItemsEl = categoriesListEl.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItemsEl.length}`);

categoriesItemsEl.forEach(item => {
  const categoryNameEl = item.querySelector('h2');
  const categoryElementsEl = item.querySelectorAll('li');
  console.log(`Category: ${categoryNameEl.textContent}`);
  console.log(`Elements: ${categoryElementsEl.length}`);
});

