//Main-nav

let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
  }
});

//Form pop-up

let formSubmitButton = document.querySelector(".form__button");
let successPopup = document.querySelector(".success-popup");
let failurePopup = document.querySelector(".failure-popup");
let successCloseButton = document.querySelector(".success-popup__button");
let failureCloseButton = document.querySelector(".failure-popup__button");
let reviewForm = document.querySelector(".review__form");
let nameInput = document.querySelector("#name");
let surnameInput = document.querySelector("#surname");
let phoneInput = document.querySelector("#phone");
let emailInput = document.querySelector("#email");

reviewForm.addEventListener("submit", function(evt) {
  if (!nameInput.value || !surnameInput.value || !phoneInput.value || !emailInput.value) {
    evt.preventDefault();
    failurePopup.classList.add("failure-popup--show");
    failureCloseButton.focus();
  } else {
    successPopup.classList.add("success-popup--show");
    successCloseButton.focus();
  }
})

formSubmitButton.addEventListener("click", function(evt) {
  if (!nameInput.value) {
    nameInput.classList.add("error");
  } else {
    nameInput.classList.remove("error");
  }
})

formSubmitButton.addEventListener("click", function(evt) {
  if (!surnameInput.value) {
    surnameInput.classList.add("error");
  } else {
    surnameInput.classList.remove("error");
  }
})

formSubmitButton.addEventListener("click", function(evt) {
  if (!phoneInput.value) {
    phoneInput.classList.add("error");
  } else {
    phoneInput.classList.remove("error");
  }
})

formSubmitButton.addEventListener("click", function(evt) {
  if (!emailInput.value) {
    emailInput.classList.add("error");
  } else {
    emailInput.classList.remove("error");
  }
})

successCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  successPopup.classList.remove("success-popup--show");
})

failureCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  failurePopup.classList.remove("failure-popup--show");
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (successPopup.classList.contains("success-popup--show") || failurePopup.classList.contains("failure-popup--show")) {
      evt.preventDefault(evt);
      successPopup.classList.remove("success-popup--show");
      failurePopup.classList.remove("failure-popup--show");
    }
  }
})
