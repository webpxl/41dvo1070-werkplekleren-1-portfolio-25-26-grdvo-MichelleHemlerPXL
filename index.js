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





// Modal logica
const modal = document.getElementById("reflectieModal");
const btn = document.getElementById("openReflectie");
const span = document.getElementsByClassName("close-button")[0];

// Open de modal als je op de knop klikt
btn.onclick = function() {
    modal.style.display = "block";
}

// Sluit de modal als je op het kruisje klikt
span.onclick = function() {
    modal.style.display = "none";
}

// Sluit de modal als je buiten het venster klikt
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Modal functionaliteit
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("reflectieModal");
    const btn = document.getElementById("openReflectie");
    const closeBtn = document.querySelector(".close-button");

    // Openen
    if(btn) {
        btn.onclick = function() {
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Voorkomt scrollen op de achtergrond
        }
    }

    // Sluiten via kruisje
    if(closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    // Sluiten door buiten het venster te klikken
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
});
