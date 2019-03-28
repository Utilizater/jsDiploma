//main-slider
function slider(){
  let slideIndex = 1,
      slides = document.querySelectorAll(".main-slider-item");
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
    slides[slideIndex - 1].style.display = "block";
    document.getElementsByClassName("main-slider")[0].style.overflow = "hidden";
 
    let hight = slides[slideIndex - 1].clientHeight;
    slides[slideIndex - 1].style.marginTop = "-" + hight +  "px";
    let sliderAnimation = () => {
      let mt = +slides[slideIndex - 1].style.marginTop.replace('px', ""); 
      if(mt < -5) 
      slides[slideIndex - 1].style.marginTop = mt + 20 + "px"; 
      else clearInterval(z);
    } 
    let z = setInterval(sliderAnimation, 20);
  
  };

  setInterval(function (){
    slideIndex = slideIndex + 1;
    showSlides(slideIndex); 
  }, 3000);

  
 

};

slider();