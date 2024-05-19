// DOM

const EMAIL_INPUT = document.querySelector(".email__input");
const SUBMIT_BTN = document.querySelector(".email__btn");
const EMAIL_CONTAINER = document.querySelector(".email");

// events

SUBMIT_BTN.addEventListener("click", () => {
  inputEmail();
});

EMAIL_INPUT.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    inputEmail();
  }
});

// functions

function inputEmail() {
  if (validateEmail(EMAIL_INPUT.value)) {
    EMAIL_INPUT.value = "";
    deleteEmailErrorMSG();
  } else {
    showEmailError();
  }
}

function validateEmail(email) {
  let reGex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return reGex.test(email);
}

function showEmailError() {
  let selectIcons = document.querySelectorAll(".email__error-icon");

  if (selectIcons.length >= 1) {
  } else {
    const ERROR_ICON = document.createElement("img");
    ERROR_ICON.src = "./images/icon-error.svg";
    ERROR_ICON.alt = "Error";
    ERROR_ICON.className = "email__error-icon";

    const ERROR_MSG = document.createElement("p");
    ERROR_MSG.textContent = "Please provide a valid email";
    ERROR_MSG.className = "email__error-msg";

    EMAIL_CONTAINER.append(ERROR_ICON, ERROR_MSG);
  }
}

function deleteEmailErrorMSG() {
  let selectIcons = document.querySelectorAll(".email__error-icon");
  let selectMGs = document.querySelectorAll(".email__error-msg");

  selectIcons.forEach((icon) => {
    icon.remove();
  });
  selectMGs.forEach((msg) => {
    msg.remove();
  });
}
