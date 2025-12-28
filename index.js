document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    // Functie om de juiste sectie te tonen
    function showSection(targetId) {

        // Verberg alle secties
        contentSections.forEach(section => {
            section.classList.remove('active-section');
            section.style.display = 'none';
        });

        // Toon de gewenste sectie
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active-section');
            targetSection.style.display = 'block';
            window.scrollTo(0, 0); // Scroll naar de bovenkant van de pagina bij het wisselen
        }
    }

    // Klik-event luisteraar voor navigatielinks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.dataset.target;
            showSection(targetId);

            // Update de actieve navigatielink in de header
            navLinks.forEach(l => l.classList.remove('active'));

            // Controleer of de geklikte link een link in de hoofdnavigatie is (niet de Home-knop onderaan)
            if (this.closest('.main-nav')) {
                this.classList.add('active');
            } else {
                // Als u op de "Home" knop onderaan klikt, activeer dan de "over mij" link in de header
                document.querySelector('.main-nav a[data-target="home-content"]').classList.add('active');
            }
        });
    });

    // Standaardinstelling bij het laden: Toon de Home/Over Mij sectie
    const initialTarget = 'home-content';
    showSection(initialTarget);

    // De eerste link ("over mij") krijgt de actieve stijl
    document.querySelector('.main-nav a[data-target="' + initialTarget + '"]').classList.add('active');
});