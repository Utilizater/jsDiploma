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
};

module.exports = addStyles;