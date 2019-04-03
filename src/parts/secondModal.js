function secondModal() {
  let reqPopupConsultation = document.getElementsByClassName("reqPopupConsultation"),
    PopupConsultation = document.getElementsByClassName("popup-consultation")[0];
  secondPopupClose = document.querySelector(".popup-consultation .popup-close");

  function unClean(element) {
    // console.log("Hi");
    element = element.querySelectorAll("*");
    for (let j = 0; j < element.length; j++) {
      // console.log(element[j]);
      if (element[j].classList.value != "status")
        element[j].style.display = "block";
    }

    statusMesaage = document.getElementsByClassName("status")[0];
    if (statusMesaage != undefined)
      statusMesaage.parentElement.removeChild(statusMesaage);
  }

  for (let i = 0; i < reqPopupConsultation.length; i++) {
    reqPopupConsultation[i].addEventListener('click', () => {
      PopupConsultation.style.display = "block";
      unClean(PopupConsultation);
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
      unClean(PopupConsultation);
  }
  setTimeout(timerModal, 60000);
};


module.exports = secondModal;