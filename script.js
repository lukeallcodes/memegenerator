const imageLinkInput = document.getElementById("image-link-input");
const memeForm = document.getElementById("meme-form");
const textForm = document.getElementById("text-form");
const topTextInput = document.getElementById("top-text-input");
const bottomTextInput = document.getElementById("bottom-text-input");
const memeImage = document.getElementById("meme-image");
const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");

memeForm.addEventListener("submit", function(event) {
  event.preventDefault();
  memeImage.src = imageLinkInput.value;
  textForm.style.display = "block";
});

textForm.addEventListener("submit", function(event) {
  event.preventDefault();
  topText.textContent = topTextInput.value;
  bottomText.textContent = bottomTextInput.value;
});

memeImage.addEventListener("load", function() {
  topText.style.top = `${memeImage.offsetTop + 20}px`;
  bottomText.style.bottom = `${memeImage.offsetTop + 20}px`;
});

topTextInput.addEventListener("input", function() {
  topText.textContent = topTextInput.value;
});

bottomTextInput.addEventListener("input", function() {
  bottomText.textContent = bottomTextInput.value;
});
