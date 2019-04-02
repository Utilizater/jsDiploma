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

module.exports = accordion;