document.addEventListener("DOMContentLoaded", () => {
    // Get the selected shape from the URL parameter (e.g. ?shape=oval)
    const urlParams = new URLSearchParams(window.location.search);
    const selectedShape = urlParams.get('shape');

    if (selectedShape) {
        // Find the section corresponding to the chosen face shape
        const targetSection = document.querySelector(`.shape-result-section[data-shape="${selectedShape}"]`);

        if (targetSection) {
            targetSection.style.display = 'block';
        } else {
            document.getElementById('noSelectionMsg').style.display = 'block';
        }
    } else {
        document.getElementById('noSelectionMsg').style.display = 'block';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const lightbox      = document.getElementById('lightbox');
    const lightboxImg   = document.getElementById('lightboxImg');
    const closeBtn      = document.getElementById('lightboxClose');

    // All hairstyle images
    const allImages = document.querySelectorAll('.style-card img');

    // Open lightbox on image click
    allImages.forEach((img) => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Lock background scroll
        });
    });

    // Close lightbox functions
    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Unlock background scroll
        // Small timeout to clear the image after fade-out
        setTimeout(() => { lightboxImg.src = ''; }, 250); 
    }

    // Close button click
    closeBtn.addEventListener('click', closeLightbox);

    // Click outside the image to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});