import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
let formValue = {};

let data = JSON.parse(localStorage.getItem('feedback-form-state'));
try {
  email.value = data.email || '';
  message.value = data.message || '';
} catch (error) {}

function saveForm(event) {
  if (data) {
    formValue = data;
  }
  formValue[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}

form.addEventListener('input', throttle(saveForm, 500));

function submitForm(event) {
  event.preventDefault();
  if (email.value.trim() === '' || message.value === '') {
    alert('Заповніть всі поля!');
  } else {
    console.log(formValue);
    localStorage.clear();
    event.target.reset();
    formValue = {};
    data = {};
  }
}
form.addEventListener('submit', submitForm);
