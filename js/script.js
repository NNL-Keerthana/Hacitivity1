document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("theme_button").addEventListener("click", Light_Mode);
  });
  function Light_Mode() {
     var element = document.body;
     element.classList.toggle("LightMode");
  }