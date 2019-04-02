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

module.exports = calculator;