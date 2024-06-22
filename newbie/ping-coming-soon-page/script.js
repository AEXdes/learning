const EMAIL_INPUT = document.querySelector(".email__input");
const SUBMIT_BTN = document.querySelector(".email__btn");

SUBMIT_BTN.onclick = function () {
  submitEmail(EMAIL_INPUT.value);
};

function submitEmail(input) {
  if (EMAIL_INPUT.value !== "") {
    validateEmail(input) ? cleanErrors() : errorMessage();
  }
}

function validateEmail(email) {
  let reGex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return reGex.test(email);
}

function errorMessage() {
  const ERROR_MSG = document.querySelector(".email__error");

  if (!ERROR_MSG) {
    const EMAIL_ERROR_CONTAINER = document.querySelector(
      ".email__error__container"
    );

    let errorMessage = document.createElement("p");
    errorMessage.textContent = "Please provide a valid email address";
    errorMessage.className = "email__error";
    EMAIL_INPUT.classList.add("email__input--error");
    EMAIL_ERROR_CONTAINER.append(errorMessage);
    EMAIL_INPUT.focus();
  }
}

function cleanErrors() {
  const ERROR_MSG = document.querySelector(".email__error");

  EMAIL_INPUT.value = "";
  EMAIL_INPUT.classList.remove("email__input--error");

  ERROR_MSG.remove();
}
