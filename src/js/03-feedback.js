import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
// const emailEl = document.querySelector('.feedback-form input');
// const messageEl = document.querySelector('.feedback-form textarea');
// const STORAGE_KEY = 'feedback-form-state';
const STORAGE_KEY = 'feedback-form-' + formEl.id;


formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

onFormFulfill();

function onFormFulfill() {
    const formValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (formValue !== null) {
    // if (formValue === null) {
    // return;
    setFormValueOnLoad(formValue);
    }
}

function setFormValueOnLoad({ email, message } = {}) {
    if (email && message) {
      formEl.elements.email.value = email;
      formEl.elements.message.value = message;
    } else {
        formEl.elements.email.value = '';
        formEl.elements.message.value = '';
    }
}
  
function onFormInput() {
    const formValue = getFormValue();
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
      
      // evt.currentTarget.reset();
      formEl.reset();
      localStorage.removeItem(STORAGE_KEY);
    } else {
      // Виконується, якщо хоча б одне з полів не заповнено
      console.log('Будь ласка, заповніть обидва поля');
    }
  } 

 