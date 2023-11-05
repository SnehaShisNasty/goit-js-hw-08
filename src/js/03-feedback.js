var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
form.addEventListener('input', handleClick);
const formFeedback = {};

function handleClick(event) {
  if (event.target.name === 'email') {
    formFeedback.email = event.target.value;
  }
  if (event.target.name === 'message') {
    formFeedback.message = event.target.value;
  }
  const f = throttle(() => {
    const data = JSON.stringify(formFeedback);
    localStorage.setItem('feedback-form-state', data);
  }, 500);

  f();
}
function onLoad() {
  const onLoadObj = JSON.parse(localStorage.getItem('feedback-form-state'));
  form.elements.email.value === null || undefined
    ? (form.elements.email.value = onLoadObj.email)
    : (form.elements.email.value = ' ');
  form.elements.email.value === null
    ? (form.elements.email.value = onLoadObj.message)
    : (form.elements.email.value = ' ');
}
onLoad();
form.addEventListener('submit', submitForm);
function submitForm(event) {
  event.preventDefault();
  console.log(formFeedback);
  localStorage.clear();
  form.reset();
}
