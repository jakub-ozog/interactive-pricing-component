
const sliderEl4 = document.querySelector("#range4")
const sliderValue4 = document.querySelector(".card__price")
const sliderValue5 = document.querySelector(".card__price2")
const initProgress = sliderEl4.value

sliderValue4.textContent = `$${initProgress}`;
sliderValue5.textContent = `$${initProgress}`;
const progress2 = (initProgress / sliderEl4.max) * 100;

sliderEl4.style.background = `linear-gradient(to right, #a5f3eb ${progress2}%, #ccc ${progress2}%)`;


sliderEl4.addEventListener("input", (event) => {

    const tempSliderValue = event.target.value;
    sliderValue4.textContent = `$${tempSliderValue}`;
    sliderValue5.textContent = `$${tempSliderValue}`;

    const progress = (tempSliderValue / sliderEl4.max) * 100;

    sliderEl4.style.background = `linear-gradient(to right, #a5f3eb ${progress}%, #ccc ${progress}%)`;
})


