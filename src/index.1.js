//main-slider
function slider() {
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

slider();


//first modal

function firstModal() {
  let reqPopupDesign = document.getElementsByClassName("reqPopupDesign"),
    PopupDesign = document.getElementsByClassName("popup-design")[0],
    firstPopupClose = document.querySelector(".popup-design .popup-close"),
    allCloseButton = document.querySelectorAll(".popup-close");



  function unClean(element) {
    // console.log("Hi");
    element = element.querySelectorAll("*");
    for (let j = 0; j < element.length; j++) {
      // console.log(element[j]);
      if (element[j].classList.value != "status")
        element[j].style.display = "block";
    }
  }

  for (let i = 0; i < reqPopupDesign.length; i++) {
    // console.log(reqPopupDesign[i]);
    reqPopupDesign[i].addEventListener('click', () => {

      PopupDesign.style.display = "block";
      unClean(PopupDesign);
    });
  }

  firstPopupClose.addEventListener('click', () => {
    PopupDesign.style.display = "none";
  });

  document.body.addEventListener('click', function (e) {
    //  console.log(e.target);
    if (e.target.closest(".popup-content") == null && e.target != reqPopupDesign[0] &&
      e.target != reqPopupDesign[1] && e.target != reqPopupDesign[2] && e.target != reqPopupDesign[3] &&
      e.target != reqPopupDesign[4] && e.target != reqPopupDesign[5] && e.target != reqPopupDesign[6])
      PopupDesign.style.display = "none";
  });
};
firstModal();


//second modal
function secondModal() {
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


  document.body.addEventListener('click', function (e) {
    if (e.target.closest(".popup-content") == null && e.target != reqPopupConsultation[0] &&
      e.target != reqPopupConsultation[1] && e.target != reqPopupConsultation[2])
      PopupConsultation.style.display = "none";
  });

  function timerModal() {
    if (document.getElementsByClassName("popup-design")[0].style.display != "block" &&
      document.getElementsByClassName("popup-consultation")[0].style.display != "block" &&
      document.getElementsByClassName("popup-gift")[0].style.display != "block")
      PopupConsultation.style.display = "block";
  }

  setTimeout(timerModal, 60000);

}

secondModal();


//thirt modal
function thirtModal() {
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


  document.body.addEventListener('click', function (e) {
    if (e.target.closest(".popup-content") == null && e.target != reqPopupGift)
      PopupGift.style.display = "none";
  });

}

thirtModal();


///add styles 
function addStyles() {
  let addStyles = document.getElementsByClassName("button-styles")[0],
    hiddenStyles = document.getElementsByClassName("styles-2");
  addStyles.addEventListener('click', () => {
    for (let i = 0; i < hiddenStyles.length; i++) {
      hiddenStyles[i].classList.remove("hidden-lg");
      hiddenStyles[i].classList.remove("hidden-md");
      hiddenStyles[i].classList.remove("hidden-sm");
      hiddenStyles[i].classList.remove("hidden-xs");
      addStyles.style.display = "none";
    }
  });
}
addStyles();


//calculator

function calculator() {
  let pictureSize = document.getElementById("size"),
    pictureMaterial = document.getElementById("material"),
    options = document.getElementById("options"),
    promocod = document.getElementsByClassName("promocode")[0],
    calcPrice = document.getElementsByClassName("calc-price")[0];

  mapping = {
    "40x50": 500,
    "50x70": 1000,
    "70x70": 1500,
    "70x100": 2000,
    "Холст из волокна": 1000,
    "Льняной холст": 1500,
    "Холст из натурального хлопка": 2000,
    "Покрытие арт-гелем": 1000,
    "Экспресс-изготовление": 1500,
    "Доставка готовых работ": 2000
  };

  function toCount(promo) {
    let a;
    if (options.value == "Дополнительные услуги") a = 0;
    else a = mapping[options.value];
    if (promo) {
      return 0.7 * (mapping[pictureSize.value] + mapping[pictureMaterial.value] + a) + " рублей";
    } else {
      return mapping[pictureSize.value] + mapping[pictureMaterial.value] + a + " рублей";
    }
  };

  pictureSize.addEventListener('change', () => {
    if (pictureSize.value != "Выберите размер картины" && pictureMaterial.value != "Выберите материал картины") {
      // console.log("Hi");
      if (promocod.value == "IWANTPOPART")
        calcPrice.textContent = toCount(true);
      else {
        calcPrice.textContent = toCount(false);
      }
    } else calcPrice.textContent = "Для расчета нужно выбрать размер картины и материал картины";
  });

  pictureMaterial.addEventListener('change', () => {
    if (pictureSize.value != "Выберите размер картины" && pictureMaterial.value != "Выберите материал картины") {
      if (promocod.value == "IWANTPOPART")
        calcPrice.textContent = toCount(true);
      else calcPrice.textContent = toCount(false);
    } else calcPrice.textContent = "Для расчета нужно выбрать размер картины и материал картины";
  });

  options.addEventListener('change', () => {
    if (pictureSize.value != "Выберите размер картины" && pictureMaterial.value != "Выберите материал картины") {
      if (promocod.value == "IWANTPOPART")
        calcPrice.textContent = toCount(true);
      else calcPrice.textContent = toCount(false);
    } else calcPrice.textContent = "Для расчета нужно выбрать размер картины и материал картины";
  });

  promocod.addEventListener('change', () => {
    if (pictureSize.value != "Выберите размер картины" && pictureMaterial.value != "Выберите материал картины") {
      if (promocod.value == "IWANTPOPART")
        calcPrice.textContent = toCount(true);
      else calcPrice.textContent = toCount(false);
    } else calcPrice.textContent = "Для расчета нужно выбрать размер картины и материал картины";
  });
};

calculator();



//Filtr
function filtr() {
  let portfolioMenu = document.querySelectorAll(".portfolio-menu li"),
    portfolioBlock = document.querySelectorAll(".portfolio-block");

  for (let i = 0; i < portfolioMenu.length; i++) {
    portfolioMenu[i].addEventListener('click', function (e) {
      //  console.log(this.classList.value);

      for (let j = 0; j < portfolioMenu.length; j++) {
        //       console.log(portfolioMenu[i].classList);
        if (portfolioMenu[j].classList.contains("active")) {
          //       console.log(portfolioMenu[i].classList);
          portfolioMenu[j].classList.remove("active");
        }

      }
      this.classList.add("active");

      for (let j = 0; j < portfolioBlock.length; j++) {
        let bol = false;
        if (portfolioBlock[j].classList.contains(this.classList.value.split(" ")[0])) {
          portfolioBlock[j].style.display = "block";
          bol = true;
        } else portfolioBlock[j].style.display = "none";

        if (!bol) {
          document.getElementsByClassName("portfolio-no")[0].style.display = "block";
        } else document.getElementsByClassName("portfolio-no")[0].style.display = "none";
      }
    });
  }
};

filtr();

// Hover effect
function HoverEffect() {
  let sizesBlock = document.querySelectorAll(".sizes-block");
  if (window.innerWidth > 900) {
    for (let i = 0; i < sizesBlock.length; i++) {
      sizesBlock[i].addEventListener("mouseover", function () {
        let picture = this.querySelector("img");
        if (picture.classList.contains("size-1"))
          picture.src = "./img/sizes-1-1.png";

        if (picture.classList.contains("size-2"))
          picture.src = "./img/sizes-2-1.png";

        if (picture.classList.contains("size-3"))
          picture.src = "./img/sizes-3-1.png";

        if (picture.classList.contains("size-4"))
          picture.src = "./img/sizes-4-1.png";


        this.querySelector(".size").style.display = "none";
        this.querySelector(".starting-price").style.display = "none";
        this.querySelector(".final-price").style.display = "none";
      });

      sizesBlock[i].addEventListener("mouseout", function () {
        let picture = this.querySelector("img");
        if (picture.classList.contains("size-1"))
          picture.src = "./img/sizes-1.png";

        if (picture.classList.contains("size-2"))
          picture.src = "./img/sizes-2.png";

        if (picture.classList.contains("size-3"))
          picture.src = "./img/sizes-3.png";

        if (picture.classList.contains("size-4"))
          picture.src = "./img/sizes-4.png";


        this.querySelector(".size").style.display = "block";
        this.querySelector(".starting-price").style.display = "block";
        this.querySelector(".final-price").style.display = "block";
      });
    }
  } else { ///для мобилы
    for (let i = 0; i < sizesBlock.length; i++) {
      sizesBlock[i].addEventListener("click", function () {
        let picture = this.querySelector("img");
        if (picture.classList.contains("size-1"))
          picture.src = "./img/sizes-1-1.png";

        if (picture.classList.contains("size-2"))
          picture.src = "./img/sizes-2-1.png";

        if (picture.classList.contains("size-3"))
          picture.src = "./img/sizes-3-1.png";

        if (picture.classList.contains("size-4"))
          picture.src = "./img/sizes-4-1.png";


        this.querySelector(".size").style.display = "none";
        this.querySelector(".starting-price").style.display = "none";
        this.querySelector(".final-price").style.display = "none";
      });
    }

    document.body.addEventListener("click", function (e) {
      for (let i = 0; i < sizesBlock.length; i++) {
        if (e.target.closest("." + sizesBlock[i].classList) != null) {
          // console.log(e.target.parentNode.querySelector("img").classList.value);
          if (e.target.parentNode != sizesBlock[i]) {
            // console.log(sizesBlock[i].querySelector("img").classList.value);
            setPicture(sizesBlock[i]);
          }
        } else setPicture(sizesBlock[i]);
      }

      function setPicture(item) {
        if (item.querySelector("img").classList.value == "size-1")
          item.querySelector("img").src = "./img/sizes-1.png";

        if (item.querySelector("img").classList.value == "size-2")
          item.querySelector("img").src = "./img/sizes-2.png";

        if (item.querySelector("img").classList.value == "size-3")
          item.querySelector("img").src = "./img/sizes-3.png";

        if (item.querySelector("img").classList.value == "size-4")
          item.querySelector("img").src = "./img/sizes-4.png";


        item.querySelector(".size").style.display = "block";
        item.querySelector(".starting-price").style.display = "block";
        item.querySelector(".final-price").style.display = "block";
      }
    });
  }
}

HoverEffect();


//second slider

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

}

secondSlider();

//accordion
function accordion() {
  let accordionHeading = document.getElementsByClassName("accordion-heading"),
    accordionBlock = document.getElementsByClassName("accordion-block");

  function hideAll() {
    for (let i = 0; i < accordionBlock.length; i++) {
      accordionBlock[i].style.display = "none";
      accordionHeading[i].classList.remove("accHeadline");
    }
  }
  hideAll();

  for (let i = 0; i < accordionHeading.length; i++) {
    accordionHeading[i].addEventListener('click', function () {
      //  hideAll();
      if (accordionHeading[i].id == "accHead-1") {
        if (document.getElementById("accBody-1").style.display == "none") {
          hideAll();
          accAnimate(document.getElementById("accBody-1"));
          //          document.getElementById("accBody-1").style.display = "block";
          document.getElementById("accHead-1").classList.add("accHeadline");
        } else hideAll();
      }

      if (accordionHeading[i].id == "accHead-2") {
        if (document.getElementById("accBody-2").style.display == "none") {
          hideAll();
          accAnimate(document.getElementById("accBody-2"));;
          document.getElementById("accHead-2").classList.add("accHeadline");
        } else hideAll();
      }


      if (accordionHeading[i].id == "accHead-3") {
        if (document.getElementById("accBody-3").style.display == "none") {
          hideAll();
          accAnimate(document.getElementById("accBody-3"));
          document.getElementById("accHead-3").classList.add("accHeadline");
        } else hideAll();
      }


      if (accordionHeading[i].id == "accHead-4") {
        if (document.getElementById("accBody-4").style.display == "none") {
          hideAll();
          accAnimate(document.getElementById("accBody-4"));
          document.getElementById("accHead-4").classList.add("accHeadline");
        } else hideAll();
      }
    });
  }

  function accAnimate(element) {
    element.style.opacity = "0.1";
    element.style.display = 'block';

    let Anim = () => {
      if (+element.style.opacity != 1)
        element.style.opacity = +element.style.opacity + 0.1 + "";
      else clearInterval(z);
    };
    let z = setInterval(Anim, 50);
  }
};

accordion();

//hamburger

function hamburger() {
  function burgerMenu() {
    if (bm.style.display != "block")
      bm.style.display = "block";
    else bm.style.display = "none";
  }

  let burger = document.querySelector(".burger")
  bm = document.getElementsByClassName("burger-menu")[0];
  console.log(window.innerWidth);

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

hamburger();

/// Ajax
function ajax() {
  let form = document.querySelectorAll("form");

  for (let i = 0; i < form.length; i++) {
    let message = {
      loading: 'Загрузка',
      success: 'Отправлено',
      failure: '...что-то погло не так :-('
    };
    form[i].addEventListener("submit", (event) => {
      statusMesaage = form[i].getElementsByClassName("statusMesaage")[0];
      if (statusMesaage == undefined) {
        statusMesaage = document.createElement("div");
        statusMesaage.classList.add("status");
        form[i].appendChild(statusMesaage);
      }

      function clean(element) {
        element = element.querySelectorAll("*");
        for (let j = 0; j < element.length; j++) {
          console.log(element[j]);
          if (element[j].classList.value != "status")
            element[j].style.display = "none";
        }
      }

      event.preventDefault();

      let formData = new FormData(form[i]);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          let requesst = new XMLHttpRequest();
          requesst.open('POST', 'smart.php');
          requesst.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


          requesst.addEventListener('readystatechange', () => {
            if (requesst.readyState < 4) {
              statusMesaage.innerHTML = message.loading;
            } else if (requesst.readyState == 4 && requesst.status == 200) {
              statusMesaage.innerHTML = message.success;
              statusMesaage.style.height = "80px";
              //    statusMesaage.style.background = `url(${message.success}) no-repeat center`;
              statusMesaage.style.marginTop = "10px";
              //  document.getElementById("modalPhone").value = "";
              clean(form[i]);

            } else {
              statusMesaage.innerHTML = message.failure;
              statusMesaage.style.height = "80px";
              //  statusMesaage.style.background = `url(${message.failure}) no-repeat center`;
              statusMesaage.style.marginTop = "10px";
              // document.getElementById("modalPhone").value = "";
              clean(form[i]);
            }
          });
          //    console.log(data);
          requesst.send(data);
        });
      }

      postData(formData)
        .then(() => {
          statusMesaage.innerHTML = message.loading;
        })
        .then(() => {
          statusMesaage.innerHTML = message.success;
          statusMesaage.style.height = "80px";
          // statusMesaage.style.background = `url(${message.success}) no-repeat center`;
          statusMesaage.style.marginTop = "10px";
          //  document.getElementById("modalPhone").value = "";
          clean(form[i]);
        })
        .catch(() => {
          statusMesaage.innerHTML = message.failure;
          statusMesaage.style.height = "80px";
          //  statusMesaage.style.background = `url(${message.failure}) no-repeat center`;
          statusMesaage.style.marginTop = "10px";
          clean(form[i]);
        })
        .then(() => {
          //   console.log("Hi");
          for (let i = 0; i < input.length; i++) {
            input[i].value = "";
          }
          clean(form[i]);
        })
    });
  }
};

ajax();