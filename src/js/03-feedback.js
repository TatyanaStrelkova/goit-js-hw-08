import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    message: document.querySelector('textarea'),
} 

const STORAGE_KEY = 'feedback-form-state';

fillTextArea()

function onFormInput() { 
    const formData = {
        email: refs.input.value,
        message: refs.message.value
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
} 

function fillTextArea() { 
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedFormData) { 
        refs.input.value = savedFormData.email;
        refs.message.value = savedFormData.message;
    }
}

function onFormSubmit(e) {
    e.preventDefault();    
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
 }

refs.form.addEventListener('input', throttle(onFormInput, 500))
refs.form.addEventListener('submit', onFormSubmit)
