const backgroundVideo = document.getElementById("backgroundVideo");
const playIcon = document.getElementById("playIcon");
const iconLink = document.getElementById("iconLink");
const whatsappLink = document.getElementById("whatsappLink");
const titles = document.querySelectorAll(".title");
let currentTitleIndex = 0;
let isSoundEnabled = false;
let typingTitle = false;

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

whatsappLink.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    window.location.href = "https://wa.me/message/CQMJ7TPPC6XAL1";
});

titles[0].addEventListener("input", function () {
    checkUserInput();
});

function typeTitle() {
    const fullTitle = titles[currentTitleIndex].textContent.trim();
    let currentLength = 0;
    const titleElement = titles[currentTitleIndex];

    function type() {
        titleElement.textContent = fullTitle.slice(0, currentLength);
        currentLength++;

        if (currentLength <= fullTitle.length) {
            setTimeout(type, 50); // Ajuste a velocidade da digitação alterando o valor (em milissegundos)
        } else {
            typingTitle = false;
            titleElement.classList.remove("cursor-animation");
            currentTitleIndex++;
            if (currentTitleIndex < titles.length) {
                typeTitle();
            } else {
                checkUserInput();
            }
        }
    }

    typingTitle = true;
    titleElement.classList.add("cursor-animation");
    type();
}

function checkUserInput() {
    const userText = titles[0].textContent.trim().toLowerCase();
    if (userText === "sim") {
        window.location.href = "https://wa.me/message/CQMJ7TPPC6XAL1";
    }
}

typeTitle(); // Iniciar a animação de escrita do primeiro título
