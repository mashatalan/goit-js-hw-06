let counterValue = 0;
const incBtn = document.querySelector('[data-action="increment"]');
const decBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.getElementById('value');

incBtn.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue.toString();
});
decBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue.toString();
});

