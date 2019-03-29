//main-slider
function slider(){
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
      //n = slides.length;
    }
    
    slides.forEach((item) => item.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
 
    let hight = slides[slideIndex - 1].clientHeight;
   // console.log(hight);
    slides[slideIndex - 1].style.marginTop = "-" + hight +  "px";
    let sliderAnimation = () => {
      let mt = +slides[slideIndex - 1].style.marginTop.replace('px', ""); 
      if(mt < -15) 
      slides[slideIndex - 1].style.marginTop = mt + hight/34 + "px"; 
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


//first modal

let reqPopupDesign = document.getElementsByClassName("reqPopupDesign"),
    PopupDesign = document.getElementsByClassName("popup-design")[0];
    firstPopupClose = document.querySelector(".popup-design .popup-close");
    allCloseButton = document.querySelectorAll(".popup-close");

for (let i = 0; i < reqPopupDesign.length; i++) {
  reqPopupDesign[i].addEventListener('click', () => {
    PopupDesign.style.display = "block";
  });
}

firstPopupClose.addEventListener('click', () => {
  PopupDesign.style.display = "none";
});

document.body.addEventListener('click', function(e) {
//  console.log(e.target);
  if (e.target.closest(".popup-content") == null  && e.target != reqPopupDesign[0] &&
  e.target != reqPopupDesign[1] && e.target != reqPopupDesign[2])
  PopupDesign.style.display = "none";
});

//second modal



let reqPopupConsultation = document.getElementsByClassName("reqPopupConsultation"),
    PopupConsultation = document.getElementsByClassName("popup-consultation")[0];
    secondPopupClose = document.querySelector(".popup-consultation .popup-close");

for (let i = 0; i < reqPopupConsultation.length; i++) {
  reqPopupConsultation[i].addEventListener('click', () => {
    PopupConsultation.style.display = "block";
  });
}

secondPopupClose.addEventListener('click', () => {
  PopupConsultation.style.display = "none";
});


document.body.addEventListener('click', function(e) {
  if (e.target.closest(".popup-content") == null && e.target != reqPopupConsultation[0] &&
  e.target != reqPopupConsultation[1] && e.target != reqPopupConsultation[2])
  PopupConsultation.style.display = "none";
});

function timerModal(){
  if (document.getElementsByClassName("popup-design")[0].style.display != "block" &&
  document.getElementsByClassName("popup-consultation")[0].style.display != "block" &&
  document.getElementsByClassName("popup-gift")[0].style.display != "block" )
  PopupConsultation.style.display = "block";
}

setTimeout(timerModal, 60000);


//thirt modal
let reqPopupGift = document.getElementsByClassName("reqPopupGift")[0],
    PopupGift = document.getElementsByClassName("popup-gift")[0];
    thirdPopupClose = document.querySelector(".popup-gift .popup-close");

    reqPopupGift.addEventListener('click', () => {
      PopupGift.style.display = "block";
      reqPopupGift.style.display = "none";
    });

    thirdPopupClose.addEventListener('click', () => {
      PopupGift.style.display = "none";
    });

    document.addEventListener("scroll", () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if (PopupGift.style.display != "none") {
          PopupGift.style.display = "block";
          reqPopupGift.style.display = "none";
        }
      }
    });


    document.body.addEventListener('click', function(e) {
      if (e.target.closest(".popup-content") == null && e.target != reqPopupGift)
      PopupGift.style.display = "none";
    });
    

    /// Ajax
    let form = document.getElementsByClassName("form"),
        inputs = document.querySelectorAll("form input");
    
    for (let i = 0; i < form.length; i++) {
      form[i].addEventListener('submit', function(e) {
          event.preventDefault();
          alert("Hi");
      });
    }