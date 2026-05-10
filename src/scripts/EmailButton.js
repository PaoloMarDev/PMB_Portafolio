document.addEventListener('DOMContentLoaded', () => {
        const emailBtn = document.getElementById('email-btn');

        if (emailBtn) {
            emailBtn.addEventListener('click', () => {
                // Los bots que leen el código HTML jamás verán un "mailto:" ni tu correo completo.
                const usuario = "PaoloMarDev_";
                const dominio = "outlook.com";
                
                // Solo cuando un humano hace clic, armamos el enlace y abrimos su app de correo.
                window.location.href = `mailto:${usuario}@${dominio}`;
            });
        }
    });