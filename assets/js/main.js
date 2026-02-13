document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       REDIRECCIONES GENERALES DEL SITIO
       Dinopatitas 🐾
    ===================================== */

    // HERO BOTONES
    const btnAdoptarHero = document.querySelector('.btn-hero[href="#adopta"]');
    const btnVoluntarioHero = document.querySelector('.btn-hero[href="#voluntariado"]');

    if (btnAdoptarHero) {
        btnAdoptarHero.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "index.html#adopcion";
        });
    }

    if (btnVoluntarioHero) {
        btnVoluntarioHero.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "voluntariado.html";
        });
    }

    /* =====================================
       BOTONES FORMAS DE AYUDAR
    ===================================== */
    const botonesAccion = document.querySelectorAll('.btn-dino-action');

    botonesAccion.forEach((boton) => {
        boton.addEventListener("click", function () {
            const texto = boton.textContent.toLowerCase();

            if (texto.includes("hogar")) {
                window.location.href = "contacto.html";
            } 
            else if (texto.includes("voluntario")) {
                window.location.href = "voluntariado.html";
            } 
            else if (texto.includes("donar")) {
                window.location.href = "contacto.html";
            }
        });
    });

    /* =====================================
       BOTONES "ADÓPTAME" DEL CARRUSEL
    ===================================== */
    const botonesAdoptame = document.querySelectorAll('.card-michi .btn');

    botonesAdoptame.forEach((btn) => {
        btn.addEventListener("click", function () {
            // efecto tierno antes de redirigir
            btn.innerHTML = "🐾 Preparando adopción...";
            btn.classList.add("btn-success");

            setTimeout(() => {
                window.location.href = "contacto.html";
            }, 800);
        });
    });

    /* =====================================
       NAVBAR LINKS (los que tienen #)
    ===================================== */
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const texto = link.textContent.toLowerCase();

            if (texto.includes("adopta")) {
                e.preventDefault();
                document.querySelector('#perritosCarousel')?.scrollIntoView({
                    behavior: "smooth"
                });
            }

            if (texto.includes("contacto")) {
                e.preventDefault();
                window.location.href = "contacto.html";
            }
        });
    });

    /* =====================================
       BUSCADOR INTELIGENTE (tu input navbar)
    ===================================== */
    window.ejecutarBusqueda = function () {
        const input = document.getElementById("mainSearch");
        if (!input) return;

        const valor = input.value.toLowerCase().trim();

        if (valor.includes("laboral")) {
            window.location.href = "laboral.html";
        } 
        else if (valor.includes("tienda")) {
            window.location.href = "tienda.html";
        } 
        else if (valor.includes("voluntariado")) {
            window.location.href = "voluntariado.html";
        } 
        else if (valor.includes("contacto")) {
            window.location.href = "contacto.html";
        } 
        else if (valor.includes("inicio")) {
            window.location.href = "index.html";
        } 
        else {
            // efecto kawaii si no encuentra nada
            input.classList.add("shake");
            setTimeout(() => input.classList.remove("shake"), 500);
        }
    };

    /* =====================================
       EFECTOS LINDOS ✨ (sin romper nada)
    ===================================== */

    // Efecto hover suave en cards
    const cards = document.querySelectorAll('.dino-card, .card-michi');
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px) scale(1.02)";
            card.style.transition = "all 0.3s ease";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)";
        });
    });

    // Animación de aparición suave al hacer scroll
    const elementos = document.querySelectorAll('.dino-card, .historia-content, .paso-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    elementos.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 0.8s ease";
        observer.observe(el);
    });

});
