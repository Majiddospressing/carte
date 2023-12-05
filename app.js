// app.js

// Vérifie si l'utilisateur est sur un appareil mobile
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Si c'est un appareil mobile et que la fonction d'installation est prise en charge
if (isMobile && window.matchMedia('(display-mode: standalone)').matches) {
    // Crée un élément pour afficher le message
    const messageElement = document.createElement('div');
    messageElement.style.position = 'fixed';
    messageElement.style.bottom = '20px';
    messageElement.style.left = '20px';
    messageElement.style.backgroundColor = '#f0f0f0';
    messageElement.style.padding = '10px';
    messageElement.style.borderRadius = '5px';
    messageElement.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    messageElement.style.zIndex = '9999';
    messageElement.style.fontSize = '14px';

    // Ajoute le texte du message à l'élément
    messageElement.textContent = 'Ajoutez notre carte à votre écran d\'accueil pour une meilleure expérience !';

    // Ajoute l'élément à la page
    document.body.appendChild(messageElement);
}