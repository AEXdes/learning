const FIRST_INPUT = document.querySelector("#first-name-input");
const LAST_INPUT = document.querySelector("#last-name-input");
const EMAIL_INPUT = document.querySelector("#email-input");
const PASS_INPUT = document.querySelector("#password-input");
const FORM_BTN = document.querySelector(".form__btn");

function errorMSG(input) {
  let placeholder = input.getAttribute("placeholder");
  let errorMessage = document.createElement("p");
  errorMessage.textContent = `${placeholder} cannot be empty`;
  errorMessage.className = "error__msg";

  let errorIcon = document.createElement("img");
  errorIcon.src = "./images/icon-error.svg";
  errorIcon.className = "error__icon";

  input.parentNode.append(errorIcon, errorMessage);
}

function deleteEmailErrorMSG(input) {
  let fatherElement = input.parentNode;
  let errorMsgs = fatherElement.querySelectorAll(".error__msg");
  let errorIcons = fatherElement.querySelectorAll(".error__icon");

  errorMsgs.forEach((msg) => {
    fatherElement.removeChild(msg);
  });

  errorIcons.forEach((icon) => {
    fatherElement.removeChild(icon);
  });
}

function checkInputs() {
  let allErrorMSG = document.querySelectorAll(".error__msg");

  if (FIRST_INPUT.value == "" && allErrorMSG.length == 0) {
    errorMSG(FIRST_INPUT);
  } else if (FIRST_INPUT.value !== "") {
    FIRST_INPUT.value = "";
    deleteEmailErrorMSG(FIRST_INPUT);
  }

  if (LAST_INPUT.value == "" && allErrorMSG.length == 0) {
    errorMSG(LAST_INPUT);
  } else if (LAST_INPUT.value !== "") {
    LAST_INPUT.value = "";
    deleteEmailErrorMSG(LAST_INPUT);
  }

  if (EMAIL_INPUT.value == "" && allErrorMSG.length == 0) {
    errorMSG(EMAIL_INPUT);
  } else if (EMAIL_INPUT.value !== "") {
    EMAIL_INPUT.value = "";
    deleteEmailErrorMSG(EMAIL_INPUT);
  }

  if (PASS_INPUT.value == "" && allErrorMSG.length == 0) {
    errorMSG(PASS_INPUT);
  } else if (PASS_INPUT.value !== "") {
    PASS_INPUT.value = "";
    deleteEmailErrorMSG(PASS_INPUT);
  }
}

FORM_BTN.addEventListener("click", checkInputs);
