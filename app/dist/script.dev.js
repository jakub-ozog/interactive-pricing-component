"use strict";

var sliderEl4 = document.querySelector("#range4");
var sliderValue4 = document.querySelector(".card__price");
var sliderValue5 = document.querySelector(".card__price2");
var initProgress = sliderEl4.value;
sliderValue4.textContent = "$".concat(initProgress);
sliderValue5.textContent = "$".concat(initProgress);
var progress2 = initProgress / sliderEl4.max * 100;
sliderEl4.style.background = "linear-gradient(to right, #a5f3eb ".concat(progress2, "%, #ccc ").concat(progress2, "%)");
sliderEl4.addEventListener("input", function (event) {
  var tempSliderValue = event.target.value;
  sliderValue4.textContent = "$".concat(tempSliderValue);
  sliderValue5.textContent = "$".concat(tempSliderValue);
  var progress = tempSliderValue / sliderEl4.max * 100;
  sliderEl4.style.background = "linear-gradient(to right, #a5f3eb ".concat(progress, "%, #ccc ").concat(progress, "%)");
});