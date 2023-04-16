const form = document.querySelector('.login-form');
const data = {};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  for (const element of event.currentTarget.elements) {
    const { name, value, type } = element;
    console.log('current element', { name, value, type })
    if (value === '' && type !== 'submit') {
      alert('Все поля должны быть заполнены!!!!');
      return;
    }
    if (type !== 'submit') {
      console.log('name', name)
      data[name] = value;
    }
  }

  console.log(data);

  form.reset();

}

