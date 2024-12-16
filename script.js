// Script 1: Viser en generisk fejlmeddelelse, når formularen indsendes
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Forhindrer, at formularen faktisk indsendes

        // Viser en generisk fejlmeddelelse
        const errorMessage = document.createElement("div");
        errorMessage.textContent = "Der opstod en fejl. Prøv igen.";
        errorMessage.style.color = "red";
        errorMessage.style.marginTop = "10px";
        errorMessage.style.fontSize = "0.9em";

        // Sikrer, at fejlmeddelelsen kun tilføjes én gang
        if (!loginForm.querySelector(".generic-error")) {
            errorMessage.classList.add("generic-error");
            loginForm.appendChild(errorMessage);
        }
    });
}

// Script 2: Håndterer burger-menu funktionalitet
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav-list');

    if (burgerMenu && navList) {
        // Skifter menuen til/fra, når der klikkes
        burgerMenu.addEventListener('click', () => {
            navList.classList.toggle('open');
            burgerMenu.setAttribute('aria-expanded', 
                burgerMenu.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
            );
        });

        // Lukker menuen, når der klikkes udenfor
        document.addEventListener('click', (event) => {
            const isClickInside = navList.contains(event.target) || burgerMenu.contains(event.target);
            if (!isClickInside && navList.classList.contains('open')) {
                navList.classList.remove('open');
                burgerMenu.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.scene-container .scene-image');
    let currentIndex = 0;

    function showNextImage() {
        // Fjerner den aktive klasse fra alle billeder
        images.forEach((img) => img.classList.remove('active'));

        // Tilføjer den aktive klasse til det aktuelle billede
        images[currentIndex].classList.add('active');

        // Går til det næste billede eller starter forfra ved det første
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Starter slideshowet ved at vise det første billede
    showNextImage();

    // Skifter billede hvert 3. sekund
    setInterval(showNextImage, 3000);
});