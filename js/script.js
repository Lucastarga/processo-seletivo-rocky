

// funcao para mudar background do header ao scroll em telas acima de 768px

function changeBg() {
  if (document.body.clientWidth > 768) {
    const header = document.querySelector("header");
    function bgColor() {
      if (window.scrollY > 100) {
        header.classList.add("bg-scroll");
      } else {
        header.classList.remove("bg-scroll");
      }
    }

    window.addEventListener("scroll", bgColor);
  }
}
changeBg();

// funcao para o menu mobile
function mobileMenu() {
  const btnMobile = document.getElementById("btn-mobile");

  function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");

    btnMobile.classList.toggle("move-btn");
  }

  btnMobile.addEventListener("click", toggleMenu);
}
mobileMenu();
