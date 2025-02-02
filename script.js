document.addEventListener("DOMContentLoaded", function() {
    console.log("Portafolio cargado con animaciones 🎉");

    // Animación de secciones al hacer scroll
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();

    // Scroll suave al hacer clic en el menú
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Modo oscuro
    const darkModeBtn = document.createElement("button");
    darkModeBtn.id = "dark-mode-toggle";
    darkModeBtn.textContent = "🌙 Modo Oscuro";
    document.body.appendChild(darkModeBtn);

    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
    });
});
