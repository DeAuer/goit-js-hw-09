const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const formState = { email: '', message: '' };

form.addEventListener('input', event => {
  formState[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});

const savedData = localStorage.getItem('feedback-form-state');

if (savedData !== null) {
  const parsed = JSON.parse(savedData);
  formState.email = parsed.email || '';
  formState.message = parsed.message || '';

  email.value = formState.email;
  message.value = formState.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Fill please all fields');
  } else {
    console.log(formState);
    localStorage.removeItem('feedback-form-state');
    formState.email = '';
    formState.message = '';
    form.reset();
  }
});
