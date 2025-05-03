

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
document.getElementById("profileBtn").addEventListener("click", function(event) {
    event.stopPropagation();
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  window.onclick = function() {
    const dropdown = document.getElementById("dropdownMenu");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  };