const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const formValues = Object.fromEntries(formData.entries());

  if (!formValues.email || !formValues.password) {
    alert("Proszę wypełnić wszystkie pola!");
    return;
  }

  console.log(formValues);
  loginForm.reset();
});
