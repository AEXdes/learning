function removeSelect(btn1, btn2, btn3, btn4) {
  btn1.classList.remove("card-rating__btn-selected");
  btn2.classList.remove("card-rating__btn-selected");
  btn3.classList.remove("card-rating__btn-selected");
  btn4.classList.remove("card-rating__btn-selected");
}

const RATING_CARD = document.getElementById("rating-card");
const THANKS_CARD = document.getElementById("thanks-card");
const RATE_SUBMITTED = document.getElementById("rate-submitted");

const SUBMIT_BTN = document.getElementById("rating-submit");

const RATING_BTN1 = document.getElementById("rating-btn1");
const RATING_BTN2 = document.getElementById("rating-btn2");
const RATING_BTN3 = document.getElementById("rating-btn3");
const RATING_BTN4 = document.getElementById("rating-btn4");
const RATING_BTN5 = document.getElementById("rating-btn5");

RATING_BTN1.addEventListener("click", () => {
  removeSelect(RATING_BTN2, RATING_BTN3, RATING_BTN4, RATING_BTN5);
  RATING_BTN1.classList.toggle("card-rating__btn-selected");
});

RATING_BTN2.addEventListener("click", () => {
  removeSelect(RATING_BTN1, RATING_BTN3, RATING_BTN4, RATING_BTN5);
  RATING_BTN2.classList.toggle("card-rating__btn-selected");
});

RATING_BTN3.addEventListener("click", () => {
  removeSelect(RATING_BTN1, RATING_BTN2, RATING_BTN4, RATING_BTN5);
  RATING_BTN3.classList.toggle("card-rating__btn-selected");
});

RATING_BTN4.addEventListener("click", () => {
  removeSelect(RATING_BTN1, RATING_BTN2, RATING_BTN3, RATING_BTN5);
  RATING_BTN4.classList.toggle("card-rating__btn-selected");
});

RATING_BTN5.addEventListener("click", () => {
  removeSelect(RATING_BTN1, RATING_BTN2, RATING_BTN3, RATING_BTN4);
  RATING_BTN5.classList.toggle("card-rating__btn-selected");
});

SUBMIT_BTN.addEventListener("click", () => {
  let rateSelected = 0;

  if (RATING_BTN1.classList.contains("card-rating__btn-selected")) {
    rateSelected = 1;
  } else if (RATING_BTN2.classList.contains("card-rating__btn-selected")) {
    rateSelected = 2;
  } else if (RATING_BTN3.classList.contains("card-rating__btn-selected")) {
    rateSelected = 3;
  } else if (RATING_BTN4.classList.contains("card-rating__btn-selected")) {
    rateSelected = 4;
  } else if (RATING_BTN5.classList.contains("card-rating__btn-selected")) {
    rateSelected = 5;
  } else {
    rateSelected = 0;
  }
  if (
    rateSelected === 1 ||
    rateSelected === 2 ||
    rateSelected === 3 ||
    rateSelected === 4 ||
    rateSelected === 5
  ) {
    RATING_CARD.classList.add("hidden");
    THANKS_CARD.classList.remove("hidden");
    RATE_SUBMITTED.innerHTML = rateSelected;
  }
});
