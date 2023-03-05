

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
  
  const swiper = new Swiper('.swiper',{
    spaceBetween: 42,
    slidesPerView: 4,
    loop:true,
  })

const menuClosest = document.querySelector('.right');
const menu = document.querySelector('.menu-closest');

menuClosest.addEventListener('click', function(){
  menu.classList.toggle('menu-closest-active');
  menuClosest.classList.toggle('right_active');
})