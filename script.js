const imageLinkInput = document.getElementById("image-link-input");
const memeForm = document.getElementById("meme-form");
const textForm = document.getElementById("text-form");
const topTextInput = document.getElementById("top-text-input");
const bottomTextInput = document.getElementById("bottom-text-input");
const generateMemeBtn = document.getElementById("generate-meme-btn");
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

generateMemeBtn.addEventListener("click", function() {
  const memeCanvas = document.createElement("canvas");
  memeCanvas.width = memeImage.width;
  memeCanvas.height = memeImage.height + topText.offsetHeight + bottomText.offsetHeight;
  const memeContext = memeCanvas.getContext("2d");
  memeContext.drawImage(memeImage, 0, 0);
  memeContext.fillText(topText.textContent, 10, topText.offsetTop + topText.offsetHeight);
  memeContext.fillText(bottomText.textContent, 10, memeImage.height - bottomText.offsetHeight);
  const memeDataUrl = memeCanvas.toDataURL("image/png");
  const memeDownloadLink = document.createElement("a");
  memeDownloadLink.href = memeDataUrl;
  memeDownloadLink.download = "meme.png";
  document.body.appendChild(memeDownloadLink);
  memeDownloadLink.click();
  document.body.removeChild(memeDownloadLink);
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
