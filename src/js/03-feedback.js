import throttle from 'lodash.throttle';
import '../css/03-feedback.css';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

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
  formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function formOutput(e) {
  let saveData = localStorage.getItem(STORAGE_KEY);
  try {
    if (saveData) {
      saveData = JSON.parse(saveData);
      form.elements.email.value = saveData.email;
      form.elements.message.value = saveData.message;
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
