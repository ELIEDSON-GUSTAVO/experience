const backgroundVideo = document.getElementById("backgroundVideo");
const playIcon = document.getElementById("playIcon");
const iconLink = document.getElementById("iconLink");

let isSoundEnabled = false;

iconLink.addEventListener("click", function (event) {
  event.preventDefault(); // Impede o comportamento padrão do link
    if (!isSoundEnabled) {
        backgroundVideo.muted = false;
        backgroundVideo.volume = 0.5; // Defina o volume desejado entre 0.0 e 1.0
        backgroundVideo.play();
        isSoundEnabled = true;
    } else {
        backgroundVideo.volume = 0; // Define o volume do áudio como 0 (mudo)
        isSoundEnabled = false;
    }
});
