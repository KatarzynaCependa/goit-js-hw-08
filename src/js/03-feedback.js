const throttle = require('lodash.throttle');

const inputEl = document.querySelector('input[type="email"]');
const textEl = document.querySelector('textarea[name="message"]');
const btnEL = document.querySelector('button[type="submit"]');
const formEl = document.querySelector('.feedback-form');
let localData = JSON.parse(localStorage.getItem('feedback-form-state'));

const data = {
  email: '',
  message: '',
};

const getData = e => {
  data[e.target.name] = e.target.value;
  // lub
  // data.email = inputEl.value;
  // data.message = textEl.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const updateData = () => {
  if (localData) {
    data.email = localData.email;
    data.message = localData.message;
  } else {
    data.email = '';
    data.message = '';
  }
  inputEl.value = data.email;
  textEl.value = data.message;
};

const submit = e => {
  e.preventDefault();
  console.log(data);
  localStorage.clear();
  formEl.reset();
};

updateData();
btnEL.addEventListener('click', submit);
formEl.addEventListener('input', throttle(getData, 500));
