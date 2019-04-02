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
};

module.exports = HoverEffect;