import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-' + formEl.id;

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('change', throttle(onFormInput, 500));
formEl.elements.email.addEventListener('input', onEmailInput);
formEl.elements.message.addEventListener('input', onMessageInput);

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

function onMessageInput() {
  const formValue = getFormValue();
  formValue.message = formEl.elements.message.value;
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

// const KEY_FOR_STORE = 'feedback-form-state';
// const form = document.querySelector('.feedback-form');

// readDataFromLocalStorage();

// form.addEventListener('submit', onSubmitForm);
// form.addEventListener('input', throttle(onInputForm, 500));


// function onInputForm(event) {
//   const { name, value } = event.target;
//   localStorage.setItem(`${KEY_FOR_STORE}-${name}`, value);
// }

// function onSubmitForm(event) {
//   event.preventDefault();
  
//   const emailInput = document.getElementsByName('email')[0];
//   const messageInput = document.getElementsByName('message')[0];

//   if (!emailInput.value || !messageInput.value) {
//     alert('Please enter your email address and message!');
//     return false;
//   }

//   console.log(getFormData());

//   form.reset();
//   clearFormData();
// }

// function readDataFromLocalStorage() {
//   const email = localStorage.getItem(`${KEY_FOR_STORE}-email`);
//   const message = localStorage.getItem(`${KEY_FOR_STORE}-message`);

//   if (email) {
//     const emailInput = document.getElementsByName('email')[0];
//     emailInput.value = email;
//   }

//   if (message) {
//     const messageInput = document.getElementsByName('message')[0];
//     messageInput.value = message;
//   }
// }

// function clearFormData() {
//   localStorage.removeItem(`${KEY_FOR_STORE}-email`);
//   localStorage.removeItem(`${KEY_FOR_STORE}-message`);
// }

// function getFormData() {
//   const email = document.getElementsByName('email')[0].value;
//   const message = document.getElementsByName('message')[0].value;
//   return { email, message };
// }



// Перший варіант
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