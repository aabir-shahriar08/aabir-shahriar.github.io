const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggle.textContent = document.body.classList.contains('light') ? '☀' : '☾';
});
const menuButton = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
menuButton.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Portfolio contact from ' + data.get('name'));
  const body = encodeURIComponent('Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\n\n' + data.get('message'));
  document.getElementById('formNote').textContent = 'Opening your email app to send the message…';
  window.location.href = 'mailto:sahriarabir@gmail.com?subject=' + subject + '&body=' + body;
});
document.getElementById('cvButton').addEventListener('click', event => {
  event.preventDefault();
  alert('Add your CV PDF to this folder and link it here to enable CV downloads.');
});