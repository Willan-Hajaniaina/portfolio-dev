<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // Animation apparition au scroll
    function reveal() {
      const cards = document.querySelectorAll('.project-card');
      const windowHeight = window.innerHeight;
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
          card.classList.add('visible');
        }
      });
    }
    window.addEventListener('scroll', reveal);
    window.addEventListener('load', reveal);

    // Bouton retour en haut
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  </script>