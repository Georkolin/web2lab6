const colorInput = document.getElementById("colorInput");
const changeBackgroundButton = document.getElementById("changeBackground");

changeBackgroundButton.addEventListener("click", function () {
    const newColor = colorInput.value.trim();

    if (newColor) {
        document.body.style.backgroundColor = newColor;
    }
});