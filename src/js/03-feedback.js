import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
});

formOutput();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function onFormInput(e) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function formOutput(e) {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    JSON.parse(formData) = data;
  }
}
