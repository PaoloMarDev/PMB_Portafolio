

document.addEventListener('DOMContentLoaded', () => {
    // 1. Configuramos el observador
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.33 // El 33% del elemento debe ser visible para que se active
    };

    // 2. Creamos la función que se ejecuta cuando el elemento entra en pantalla
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento ya entró en la pantalla...
            if (entry.isIntersecting) {
                // Le agregamos la clase que dispara la animación de CSS
                entry.target.classList.add('is-visible');
                
                // CRUCIAL: Dejamos de observarlo. Esto asegura que la animación 
                // suceda SOLO UNA VEZ y se quede visible aunque el usuario suba y baje.
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // 3. Buscamos todos los elementos con la clase y los ponemos bajo vigilancia
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));
});