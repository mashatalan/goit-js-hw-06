const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', (event) => {
  const validLength = +event.currentTarget.dataset.length;
  const length = event.currentTarget.value.length;

  if (validLength === length) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid')
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
})

