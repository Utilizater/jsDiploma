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
};

module.exports = thirtModal;