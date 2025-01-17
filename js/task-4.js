const form = document.querySelector('.login-form');

form.addEventListener('submit',onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  sendUserInfo(e);
}

const sendUserInfo = (e) => {
  const form = e.target;
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!login || !password) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: login,
    password: password,
  };
  console.log(formData);

  formLogin.reset();
};
