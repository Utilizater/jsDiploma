function hamburger() {
  function burgerMenu() {
    if (bm.style.display != "block")
      bm.style.display = "block";
    else bm.style.display = "none";
  }

  let burger = document.querySelector(".burger")
  bm = document.getElementsByClassName("burger-menu")[0];
 // console.log(window.innerWidth);

  if (window.innerWidth < 768) {
    burger.addEventListener('click', burgerMenu);
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      burger.addEventListener('click', burgerMenu);
    } else burger.removeEventListener('click', burgerMenu);
  });

  window.addEventListener('resize', () => {
    if (bm.style.display == "block" && window.innerWidth > 768)
      bm.style.display = "none";
  });

};

module.exports = hamburger;