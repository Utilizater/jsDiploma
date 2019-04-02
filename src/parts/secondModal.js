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
};


module.exports = secondModal;