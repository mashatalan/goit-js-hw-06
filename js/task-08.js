const form = document.querySelector('.login-form');
const data = {};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  for (const element of event.currentTarget.elements) {
    const {name, value, type} = element;
    if (value === '' && type !== 'submit') {
      alert('Все поля должны быть заполнены!!!!');
      break;
    } else {
      data[name] = value;
    }
  }

  console.log(data);
  form.reset();

}


