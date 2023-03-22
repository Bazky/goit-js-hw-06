const validationInput = document.querySelector("#validation-input");
const requiredLength = parseInt(validationInput.dataset.length);

function handleValidation() {
  const enteredValue = validationInput.value.trim();
  const isValueValid = enteredValue.length === requiredLength;

  if (isValueValid) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}

validationInput.addEventListener("blur", handleValidation);
