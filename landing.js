document.getElementById('downtoservices').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('services').scrollIntoView({
      behavior: 'smooth'
    });
  });

  const cards = document.querySelectorAll('.feature-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('active');
  });
});