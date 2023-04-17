let slider = document.getElementById("line");

slider.oninput = function () {
  slider.style.left = this.value + "%";
};
