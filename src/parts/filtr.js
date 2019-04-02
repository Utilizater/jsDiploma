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
        if (portfolioBlock[j].classList.contains(this.classList[0])) {
     //   if (portfolioBlock[j].classList.contains(this.classList.value.split(" ")[0])) {
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

module.exports = filtr;