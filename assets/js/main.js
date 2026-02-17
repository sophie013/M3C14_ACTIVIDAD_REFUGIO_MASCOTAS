document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       BOTÓN BACK TO TOP 
    ===================================== */
    const crearBackToTop = () => {
        const btn = document.createElement('button');
        btn.id = 'backToTop';
        btn.className = 'back-to-top';
        btn.innerHTML = '<i class="bi bi-chevron-up"></i>';
        btn.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 20px;
            background: linear-gradient(135deg, #7abebb 0%, #4DB6AC 100%);
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 24px;
            cursor: pointer;
            display: none;
            z-index: 999;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(btn);
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                btn.style.display = 'flex';
                btn.style.alignItems = 'center';
                btn.style.justifyContent = 'center';
            } else {
                btn.style.display = 'none';
            }
        });
        
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-5px)';
            btn.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
            btn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
        });
    };
    
    crearBackToTop();

    /* =====================================
       REDIRECCIONES GENERALES DEL SITIO
       Dinopatitas 🐾
    ===================================== */

    // HERO BOTONES
    const btnAdoptarHero = document.querySelector('.btn-hero[href="#perritosCarousel"]');
    const btnVoluntarioHero = document.querySelector('.btn-hero[href="#voluntariado"]');

    if (btnAdoptarHero) {
        btnAdoptarHero.addEventListener("click", function (e) {
            e.preventDefault();
            const carousel = document.querySelector('#perritosCarousel');
            if (carousel) {
                carousel.scrollIntoView({ behavior: 'smooth' });
            }
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
            btn.innerHTML = "🐾 Preparando adopción...";
            btn.classList.add("btn-success");

            setTimeout(() => {
                window.location.href = "contacto.html";
            }, 800);
        });
    });

    /* =====================================
       NAVBAR LINKS 
    ===================================== */
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const texto = link.textContent.toLowerCase();

            if (texto.includes("adopta")) {
                e.preventDefault();
                const carousel = document.querySelector('#perritosCarousel');
                if (carousel) {
                    carousel.scrollIntoView({ behavior: 'smooth' });
                }
            }

            if (texto.includes("contacto")) {
                e.preventDefault();
                window.location.href = "contacto.html";
            }

            if (texto.includes("historia")) {
                e.preventDefault();
                const historia = document.querySelector('#historia');
                if (historia) {
                    historia.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.location.href = "index.html#historia";
                }
            }
        });
    });

    /* =====================================
       BUSCADOR INTELIGENTE
    ===================================== */
    window.ejecutarBusqueda = function () {
        const input = document.getElementById("mainSearch");
        if (!input) return;

        const valor = input.value.toLowerCase().trim();
        const rutas = {
            'laboral': 'laboral.html',
            'tienda': 'tienda.html',
            'voluntariado': 'voluntariado.html',
            'contacto': 'contacto.html',
            'inicio': 'index.html'
        };

        let encontrado = false;
        for (const [clave, ruta] of Object.entries(rutas)) {
            if (valor.includes(clave)) {
                window.location.href = ruta;
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            input.classList.add("shake");
            setTimeout(() => input.classList.remove("shake"), 500);
        }
    };

    // Permitir buscar con Enter
    const searchInput = document.getElementById("mainSearch");
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                ejecutarBusqueda();
            }
        });
    }

    /* =====================================
       EFECTOS SUAVES EN CARDS
    ===================================== */

    // Efecto hover suave en cards
    const cards = document.querySelectorAll('.dino-card, .card-michi, .card-product');
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px) scale(1.02)";
            card.style.transition = "all 0.3s ease";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)";
        });
    });

    /* =====================================
       ANIMACIÓN DE APARICIÓN AL SCROLL
    ===================================== */
    const elementos = document.querySelectorAll('.dino-card, .card-michi, .historia-content, .paso-item, .card-product');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)";
        observer.observe(el);
    });

    /* =====================================
       TRANSICIONES DE PÁGINA SUAVES
    ===================================== */
    document.querySelectorAll('a[href^="http"], a[href^="#"]').forEach(link => {
        if (!link.target || link.target !== '_blank') {
            link.style.transition = 'all 0.3s ease';
        }
    });

    /* =====================================
       ANIMACIÓN AL CARGAR
    ===================================== */
    document.body.style.animation = 'fadeIn 0.6s ease-in-out';

});

// Prevenir clic múltiple en botones de envío
document.addEventListener('submit', function(e) {
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
        btn.disabled = true;
        btn.style.opacity = '0.6';
        btn.style.cursor = 'not-allowed';
        setTimeout(() => {
            btn.disabled = false;
            btn.style.opacity = '1';
            btn.style.cursor = 'pointer';
        }, 1500);
    }
});