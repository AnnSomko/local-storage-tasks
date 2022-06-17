import throttle from 'lodash.throttle';
import '../css/03-feedback.css';

const form = document.querySelector('.feedback-form');
const mail = document.querySelector('input');
const text = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

formOutput();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function formOutput(e) {
  let saveData = localStorage.getItem(STORAGE_KEY);
  if (saveData) {
    saveData = JSON.parse(saveData);
    mail.value = saveData.email;
    text.value = saveData.message;
  }
}
