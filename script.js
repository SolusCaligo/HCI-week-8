const slider = document.getElementById('bgSlider');
const randomBtn = document.getElementById('randomBtn');


slider.addEventListener('input', () => {

  const randomHue = Math.floor(Math.random() * 360);
  

  document.body.style.backgroundColor = `hsl(${randomHue}, 80%, 60%)`;
});

randomBtn.addEventListener('click', () => {
  const randomHue = Math.floor(Math.random() * 360);
  slider.value = randomHue; // Button still moves the slider to match
  document.body.style.backgroundColor = `hsl(${randomHue}, 80%, 60%)`;
});
