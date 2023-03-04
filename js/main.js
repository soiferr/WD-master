document.addEventListener("DOMContentLoaded", function () {

    let buttonsOpen = document.querySelectorAll("[data-popup]");
    for (let button of buttonsOpen) {
      button.addEventListener("click", function () {
        let popup = document.querySelector(this.dataset.popup);
        popup.style.display = "flex"
      });
    }

    let buttonsClose = document.querySelectorAll(".popup__close");
    for (let button of buttonsClose) {
      button.addEventListener("click", function (event) {
        let popup = this.closest(".popup");
        popup.style.display = "none"
      })
    }
  });