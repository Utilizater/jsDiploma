function secondSlider() {
  let slideIndex = 1,
    slides = document.querySelectorAll(".feedback-slider-item"),
    prev = document.querySelector(".main-prev-btn"),
    next = document.querySelector(".main-next-btn");

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      //n = 1;
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
      //n = slides.length;
    }
    slides.forEach((item) => item.style.display = "none");
    animate(slides[slideIndex - 1]);
  };

  function plusSlides(n) {
    slideIndex = slideIndex + n;
    showSlides(slideIndex);
  };

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });

  next.addEventListener('click', () => {
    plusSlides(1);
  });

  function animate(element) {
    element.style.display = "block";
    element.style.width = "900px";
    // element.style.border = "2px solid";
    element.style.marginLeft = "-1100px";
    let sliderAnimation = () => {
      let mt = +element.style.marginLeft.replace('px', "");
      if (mt < -15)
        element.style.marginLeft = mt + 600 / 34 + "px";
      else clearInterval(z);
    }
    let z = setInterval(sliderAnimation, 20);
  }

  setInterval(function () {
    plusSlides(1)
  }, 5000);
};

module.exports = secondSlider;
