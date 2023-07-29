const backgroundVideo = document.getElementById("backgroundVideo");
const playIcon = document.getElementById("playIcon");
const iconLink = document.getElementById("iconLink");

let isSoundEnabled = false;

iconLink.addEventListener("click", function (event) {
  event.preventDefault(); // Impede o comportamento padrão do link
    if (!isSoundEnabled) {
        backgroundVideo.muted = false;
        isSoundEnabled = true;
}
});
