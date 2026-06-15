// Basic frontend JS for interactivity
document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('nav .btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert(`You clicked: ${btn.textContent}`);
    });
  });
});
