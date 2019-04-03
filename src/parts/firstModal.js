function firstModal() {
  let reqPopupDesign = document.getElementsByClassName("reqPopupDesign"),
    PopupDesign = document.getElementsByClassName("popup-design")[0],
    firstPopupClose = document.querySelector(".popup-design .popup-close"),
    allCloseButton = document.querySelectorAll(".popup-close");


    
  function unClean(element) {
   // console.log("Hi");
    element = element.querySelectorAll("*");
    for(let j = 0; j < element.length; j++) {
     // console.log(element[j]);
      if (element[j].classList.value != "status")
      element[j].style.display = "block";
    }

    statusMesaage = document.getElementsByClassName("status")[0];
    console.log(statusMesaage);
    if (statusMesaage != undefined)
     statusMesaage.parentElement.removeChild(statusMesaage);
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
      e.target != reqPopupDesign[4] && e.target != reqPopupDesign[5] && e.target != reqPopupDesign[6] )
      PopupDesign.style.display = "none";
  });
};

module.exports = firstModal;