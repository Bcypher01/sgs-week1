const firstEl = document.querySelector("#first");
const lastEl = document.querySelector("#last");
const numberEl = document.querySelector("#number");
const mailEl = document.querySelector("#mail");
const passwordEl = document.querySelector("#password");

//validate all form input and display error
function validate(input, inputEl) {
  valid = false;
  switch (valid) {
    case isRequired(input):
      showError(inputEl, "This field is required");
      break;
    case minLength(input.length):
      showError(inputEl, "This field cannot be less than 5 characters");
      break;

    default:
      showError(inputEl, "");
      inputEl.classList.remove("error");
      inputEl.classList.add("success");
      valid = true;
      break;
  }
  return valid;
}

const isRequired = (value) => (value === "" ? false : true);
const minLength = (length) => (length < 5 ? false : true);

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;

  // add the error class
  input.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const checkFirst = () => {
  let first = firstEl.value.trim();

  validate(first, firstEl);
  return valid;
};

const checkLast = () => {
  let last = lastEl.value.trim();
  validate(last, lastEl);
  return valid;
};

const checkNumber = () => {
  let number = numberEl.value.trim();
  validate(number, numberEl);
  return valid;
};

const checkMail = () => {
  let mail = mailEl.value.trim();
  validate(mail, mailEl);
  return valid;
};

const checkPassword = () => {
  let password = passwordEl.value.trim();
  validate(password, passwordEl);
  return valid;
};

form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();

  //validate forms
  let isFirstValid = checkFirst(),
    isLastValid = checkLast(),
    isNumberValid = checkNumber(),
    isMailValid = checkMail(),
    isPasswordValid = checkPassword();

  let isFormValid =
    isFirstValid &&
    isLastValid &&
    isNumberValid &&
    isMailValid &&
    isPasswordValid;

  // alert welcome if the form is valid
  if (isFormValid) {
    alert("Welcome!!!");
  }
});
