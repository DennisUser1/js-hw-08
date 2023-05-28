import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-' + formEl.id;

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('change', throttle(onFormInput, 500));
formEl.elements.email.addEventListener('input', onEmailInput); 

onFormFulfill();
populateInputsArea();

function onFormFulfill() {
  const formValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (formValue !== null) {
    setFormValueOnLoad(formValue);
  }
}

function setFormValueOnLoad({ email, message } = {}) {
  formEl.elements.email.value = email || '';
  formEl.elements.message.value = message || '';
}

function onFormInput() {
  const formValue = getFormValue();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formValue));
}

function onEmailInput() {
  const formValue = getFormValue();
  formValue.email = formEl.elements.email.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formValue));
}

function getFormValue() {
  const email = formEl.elements.email.value;
  const message = formEl.elements.message.value;
  return { email, message };
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const formValue = getFormValue();

  if (formValue.email && formValue.message) {
    console.log(formValue);

    formEl.reset();
    localStorage.removeItem(STORAGE_KEY);
  } else {
    console.log('Будь ласка, заповніть обидва поля');
  }
}

function populateInputsArea() {
  const formValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (formValue !== null) {
    setFormValueOnLoad(formValue);
  }
}


// import throttle from 'lodash.throttle';

// const formEl = document.querySelector('.feedback-form');
// const STORAGE_KEY = 'feedback-form-' + formEl.id;
// const inputElements = formEl.querySelectorAll('input, textarea');

// formEl.addEventListener('submit', onFormSubmit);
// formEl.addEventListener('input', throttle(onFormInput, 500));

// onFormFulfill();

// function onFormFulfill() {
//   const formValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   if (formValue !== null) {
//     setFormValueOnLoad(formValue);
//   }
// }

// function setFormValueOnLoad({ email, message } = {}) {
//   inputElements.forEach((element) => {
//     if (element.name === 'email') {
//       element.value = email || '';
//     } else if (element.name === 'message') {
//       element.value = message || '';
//     }
//   });
// }

// function onFormInput() {
//   const formValue = getFormValue();
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formValue));
// }

// function getFormValue() {
//   const formValue = {};
//   inputElements.forEach((element) => {
//     formValue[element.name] = element.value;
//   });
//   return formValue;
// }

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   const formValue = getFormValue();

//   if (formValue.email && formValue.message) {
//     console.log(formValue);
//     formEl.reset();
//     localStorage.removeItem(STORAGE_KEY);
//   } else {
//     console.log('Будь ласка, заповніть обидва поля');
//   }
// }