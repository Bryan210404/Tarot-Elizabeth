// Elizabeth Tarot - Service Modals

// Información de cada servicio
const servicesInfo = {
    'tarot-general': {
        icon: '🔮',
        title: 'Tarot General',
        description: 'Una lectura completa y profunda que abarca todos los aspectos importantes de tu vida.',
        details: [
            'Análisis completo de tu situación actual',
            'Orientación sobre amor, trabajo y salud',
            'Identificación de obstáculos y oportunidades',
            'Consejos para tomar las mejores decisiones',
            'Visión del futuro cercano y lejano'
        ],
        whatsappMessage: 'Hola Elizabeth, me interesa una lectura de Tarot General. ¿Cuándo podemos agendar?'
    },
    'tarot-amor': {
        icon: '💝',
        title: 'Tarot del Amor',
        description: 'Descubre los secretos de tu corazón y encuentra claridad en tus relaciones sentimentales.',
        details: [
            'Análisis profundo de tu situación amorosa',
            'Compatibilidad con tu pareja actual o futura',
            'Identificación de bloqueos emocionales',
            'Consejos para mejorar tus relaciones',
            'Predicciones sobre el amor en tu futuro'
        ],
        whatsappMessage: 'Hola Elizabeth, me interesa una lectura de Tarot del Amor. ¿Cuándo podemos agendar?'
    },
    'tarot-sino': {
        icon: '⚖️',
        title: 'Tarot Sí o No',
        description: 'Obtén respuestas directas y claras a tus preguntas más urgentes e importantes.',
        details: [
            'Respuestas rápidas y precisas',
            'Ideal para decisiones importantes',
            'Claridad en momentos de duda',
            'Orientación directa del universo',
            'Interpretación clara del mensaje'
        ],
        whatsappMessage: 'Hola Elizabeth, necesito una lectura de Tarot Sí o No. ¿Cuándo podemos agendar?'
    },
    'tarot-3cartas': {
        icon: '🌟',
        title: 'Lectura de 3 Cartas',
        description: 'Pasado, presente y futuro revelados en una lectura concisa pero profunda.',
        details: [
            'Comprensión de tu pasado y sus lecciones',
            'Análisis de tu situación presente',
            'Visión clara de tu futuro próximo',
            'Conexión entre los tres tiempos',
            'Guía para tu camino personal'
        ],
        whatsappMessage: 'Hola Elizabeth, me interesa una Lectura de 3 Cartas. ¿Cuándo podemos agendar?'
    },
    'carta-dia': {
        icon: '☀️',
        title: 'Carta del Día',
        description: 'Una carta especial que te guiará y te dará un mensaje importante para tu día.',
        details: [
            'Mensaje diario personalizado',
            'Orientación para el día presente',
            'Energía y vibración del momento',
            'Consejos prácticos inmediatos',
            'Conexión con tu intuición'
        ],
        whatsappMessage: 'Hola Elizabeth, me gustaría recibir mi Carta del Día. ¿Cuándo podemos agendar?'
    },
    'consulta-personalizada': {
        icon: '👁️',
        title: 'Consulta Personalizada',
        description: 'Una sesión privada adaptada completamente a tus necesidades y preguntas específicas.',
        details: [
            'Sesión uno a uno completamente personalizada',
            'Enfoque en tus preguntas específicas',
            'Tiempo dedicado exclusivamente para ti',
            'Combinación de diferentes métodos',
            'Seguimiento y orientación continua'
        ],
        whatsappMessage: 'Hola Elizabeth, me interesa una Consulta Personalizada. ¿Cuándo podemos agendar?'
    },
    'extras': {
        icon: '✨',
        title: 'Extras',
        description: 'Servicios espirituales adicionales para tu bienestar y crecimiento personal.',
        details: [
            'Sanaciones Espirituales profundas',
            'Talleres de desarrollo personal',
            'Limpias energéticas y espirituales',
            'Magia blanca y rituales',
            'Ocultismo y conocimiento esotérico'
        ],
        whatsappMessage: 'Hola Elizabeth, me interesan los servicios extras. ¿Cuándo podemos agendar?'
    }
};

// Función para abrir modal
function openServiceModal(serviceId) {
    const service = servicesInfo[serviceId];
    if (!service) return;

    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'service-modal';
    modal.id = 'serviceModal';

    // Crear contenido del modal
    const detailsList = service.details.map(detail => `<li>${detail}</li>`).join('');

    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeServiceModal()">✕</button>
            <div class="modal-icon">${service.icon}</div>
            <h2 class="modal-title">${service.title}</h2>
            <p class="modal-description">${service.description}</p>
            
            <div class="modal-details">
                <h4>¿Qué incluye este servicio?</h4>
                <ul>
                    ${detailsList}
                </ul>
            </div>
            
            <div class="modal-cta">
                <a href="https://wa.me/5215519017094?text=${encodeURIComponent(service.whatsappMessage)}" 
                   target="_blank" 
                   class="modal-whatsapp-btn">
                    <span>💬</span>
                    <span>Agendar por WhatsApp</span>
                </a>
            </div>
        </div>
    `;

    // Agregar al body
    document.body.appendChild(modal);

    // Activar modal con pequeño delay para animación
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    // Cerrar al hacer clic fuera del contenido
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeServiceModal();
        }
    });
}

// Función para cerrar modal
function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    // Agregar event listeners a las tarjetas de servicio
    const serviceCards = document.querySelectorAll('.card-item');
    const serviceIds = [
        'tarot-general',
        'tarot-amor',
        'tarot-sino',
        'tarot-3cartas',
        'carta-dia',
        'consulta-personalizada',
        'extras'
    ];

    serviceCards.forEach((card, index) => {
        card.addEventListener('click', function () {
            openServiceModal(serviceIds[index]);
        });
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('active');
            menuToggle.textContent = nav.classList.contains('active') ? '✕' : '☰';
        });

        // Cerrar menú al hacer clic en un link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                nav.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });
    }

    // Smooth scrolling
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header background on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        }
    });

    // Floating stars effect
    function createFloatingStar() {
        const star = document.createElement('div');
        star.textContent = '✦';
        star.style.position = 'fixed';
        star.style.color = '#d4af37';
        star.style.fontSize = Math.random() * 20 + 10 + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = '-50px';
        star.style.opacity = '0.3';
        star.style.pointerEvents = 'none';
        star.style.zIndex = '1';
        star.style.transition = 'all 10s linear';

        document.body.appendChild(star);

        setTimeout(() => {
            star.style.top = '100vh';
            star.style.opacity = '0';
        }, 100);

        setTimeout(() => {
            star.remove();
        }, 10000);
    }

    // Create stars periodically
    setInterval(createFloatingStar, 3000);

    // Console message
    console.log('%c✦ Bienvenido al Tarot de Elizabeth ✦',
        'color: #d4af37; font-size: 20px; font-weight: bold; font-family: Cinzel, serif;');
    console.log('%cLas cartas nunca mienten, solo revelan lo que tu corazón ya sabe',
        'color: #999; font-style: italic;');
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeServiceModal();
    }
});
