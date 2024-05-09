// Función para manejar la visibilidad de los elementos FAQ
function toggleVisibility(btnMinus, btnPlus, answer) {
  answer.classList.toggle("hidden");
  btnMinus.classList.toggle("hidden");
  btnPlus.classList.toggle("hidden");
}

// FAQ 1
const FAQ_TITLE1 = document.getElementById("faq-title1");
const FAQ_BTN_MINUS1 = document.getElementById("faq-btn__minus1");
const FAQ_BTN_PLUS1 = document.getElementById("faq-btn__plus1");
const FAQ_ANSWER1 = document.getElementById("faq-answer1");

FAQ_TITLE1.addEventListener("click", () => {
  toggleVisibility(FAQ_BTN_MINUS1, FAQ_BTN_PLUS1, FAQ_ANSWER1);
});
FAQ_BTN_MINUS1.addEventListener("click", () => {
  toggleVisibility(FAQ_BTN_MINUS1, FAQ_BTN_PLUS1, FAQ_ANSWER1);
});
FAQ_BTN_PLUS1.addEventListener("click", () => {
  toggleVisibility(FAQ_BTN_MINUS1, FAQ_BTN_PLUS1, FAQ_ANSWER1);
});

// FAQ 2
const FAQ_TITLE2 = document.getElementById("faq-title2");
const FAQ_BTN_MINUS2 = document.getElementById("faq-btn__minus2");
const FAQ_BTN_PLUS2 = document.getElementById("faq-btn__plus2");
const FAQ_ANSWER2 = document.getElementById("faq-answer2");

FAQ_TITLE2.addEventListener("click", () => {
  toggleVisibility(FAQ_BTN_MINUS2, FAQ_BTN_PLUS2, FAQ_ANSWER2);
});
FAQ_BTN_MINUS2.addEventListener("click", () => {
  toggleVisibility(FAQ_BTN_MINUS2, FAQ_BTN_PLUS2, FAQ_ANSWER2);
});
FAQ_BTN_PLUS2.addEventListener("click", () => {
  toggleVisibility(FAQ_BTN_MINUS2, FAQ_BTN_PLUS2, FAQ_ANSWER2);
});

// FAQ 3
const FAQ_TITLE3 = document.getElementById("faq-title3");
const FAQ_BTN_MINUS3 = document.getElementById("faq-btn__minus3");
const FAQ_BTN_PLUS3 = document.getElementById("faq-btn__plus3");
const FAQ_ANSWER3 = document.getElementById("faq-answer3");

FAQ_TITLE3.addEventListener("click", () => {
  toggleVisibility(FAQ_BTN_MINUS3, FAQ_BTN_PLUS3, FAQ_ANSWER3);
});
FAQ_BTN_MINUS3.addEventListener("click", () => {
  toggleVisibility(FAQ_BTN_MINUS3, FAQ_BTN_PLUS3, FAQ_ANSWER3);
});
FAQ_BTN_PLUS3.addEventListener("click", () => {
  toggleVisibility(FAQ_BTN_MINUS3, FAQ_BTN_PLUS3, FAQ_ANSWER3);
});

// FAQ 4
const FAQ_TITLE4 = document.getElementById("faq-title4");
const FAQ_BTN_MINUS4 = document.getElementById("faq-btn__minus4");
const FAQ_BTN_PLUS4 = document.getElementById("faq-btn__plus4");
const FAQ_ANSWER4 = document.getElementById("faq-answer4");

FAQ_TITLE4.addEventListener("click", () => {
  toggleVisibility(FAQ_BTN_MINUS4, FAQ_BTN_PLUS4, FAQ_ANSWER4);
});
FAQ_BTN_MINUS4.addEventListener("click", () => {
  toggleVisibility(FAQ_BTN_MINUS4, FAQ_BTN_PLUS4, FAQ_ANSWER4);
});
FAQ_BTN_PLUS4.addEventListener("click", () => {
  toggleVisibility(FAQ_BTN_MINUS4, FAQ_BTN_PLUS4, FAQ_ANSWER4);
});