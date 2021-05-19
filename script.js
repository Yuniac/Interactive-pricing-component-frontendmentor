const slider = document.querySelector("input[type='range']");
const discountButton = document.querySelector("#input");

const viewsCount = document.querySelector("#views-count");
const monthlyPrice = document.querySelector("#monthly-price");

function updatePrices() {
    function sliderValue() {
        return slider.value;
    }
    // numbers are strings here because sliderValues() returns a string;
    if (sliderValue() === "1") {
        viewsCount.textContent = "10k PAGEVIEWS";
        monthlyPrice.textContent = "8";
    } else if (sliderValue() === "2") {
        viewsCount.textContent = "50k PAGEVIEWS";
        monthlyPrice.textContent = "12"
    } else if (sliderValue() === "3") {
        viewsCount.textContent = "100k PAGEVIEWS";
        monthlyPrice.textContent = "16"
    } else if (sliderValue() === "4") {
        viewsCount.textContent = "500k PAGEVIEWS";
        monthlyPrice.textContent = "24"
    } else {
        viewsCount.textContent = "1M PAGEVIEWS";
        monthlyPrice.textContent = "36"
    }
}

function getDiscount() {
    if (!discountButton.checked) {
        updatePrices();
    } else if (discountButton.checked) {
        let price = Number(monthlyPrice.textContent);
        monthlyPrice.textContent = price - (price * 0.25)
    }
}
discountButton.addEventListener("input", () => {
    getDiscount()
});
slider.addEventListener("input", () => {
    updatePrices();
    getDiscount()
});