const fontSizeControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
fontSizeControl.addEventListener('input', (event) => {
  const fontSize = event.currentTarget.value;
  textEl.style.fontSize = `${fontSize}px`;
});