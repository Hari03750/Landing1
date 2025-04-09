document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for registering!');
    form.reset();
  });
});
