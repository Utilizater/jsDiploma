function mainSlider() {
  let slideIndex = 1,
    slides = document.querySelectorAll(".main-slider-item");
  showSlides(slideIndex);
  document.getElementsByClassName("container")[1].style.overflow = "hidden";

  function showSlides(n) {
    if (n > slides.length) {
      //n = 1;
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = "none");
    slides[slideIndex - 1].style.display = "block";

    let hight = slides[slideIndex - 1].clientHeight;
    // console.log(hight);
    slides[slideIndex - 1].style.marginTop = "-" + hight + "px";
    let sliderAnimation = () => {
      let mt = +slides[slideIndex - 1].style.marginTop.replace('px', "");
      if (mt < -15)
        slides[slideIndex - 1].style.marginTop = mt + hight / 34 + "px";
      else clearInterval(z);
    }
    let z = setInterval(sliderAnimation, 20);

  };

  setInterval(function () {
    slideIndex = slideIndex + 1;
    showSlides(slideIndex);
  }, 3000);
};

module.exports = mainSlider;