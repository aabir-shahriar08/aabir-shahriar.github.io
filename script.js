const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelector('.theme-btn').addEventListener('click',()=>{
  document.body.classList.toggle('light');
  document.querySelector('.theme-btn').textContent=document.body.classList.contains('light')?'☀':'☾';
});
document.getElementById('year').textContent=new Date().getFullYear();
function sendMessage(e){e.preventDefault();alert('Thanks! Your message form is ready. To receive real messages, connect it to a form service such as Formspree or a backend.');e.target.reset();}
