// script.js
document.addEventListener("DOMContentLoaded", function () {
  var yesBtn = document.querySelector('.yes-btn');
  var noBtn = document.querySelector('.no-btn');
  var gifImage = document.querySelector('.gif');
  var heading = document.querySelector('h2');

  yesBtn.addEventListener('click', function () {
    gifImage.src = 'kiss-love.gif'; // Replace 'new-image.gif' with the path to your new image
    heading.textContent = 'Yayyy! Pup loves MaMa too 🥰';
  });

  noBtn.addEventListener('mouseenter', function () {
    changeButtonPlace(noBtn);
  });

  function changeButtonPlace(button) {
    button.style.left = getRandomPosition() + 'px';
    button.style.top = getRandomPosition() + 'px';
  }

  function getRandomPosition() {
    return Math.floor(Math.random() * window.innerWidth);
  }
});
