const SHARE_BTN_CONTAINER = document.querySelectorAll(
  ".card-share-btn__container"
);
const SHARE_CONTAINER = document.querySelector("#share-bar");
const SHARE_BTN1 = document.querySelector("#card-share-btn1");
const SHARE_ARROW = document.querySelector("#card-share__btn");

SHARE_BTN_CONTAINER.forEach((btn) => {
  btn.addEventListener("click", () => {
    SHARE_CONTAINER.classList.toggle("hidden");
    SHARE_BTN1.classList.toggle("card-share-btn__container--grey");
    SHARE_ARROW.classList.toggle("card-share__btn--white");
  });
});
