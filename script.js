const nav = document.querySelector('.nav');
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.12});
reveals.forEach(el=>observer.observe(el));

window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

const cursor = document.querySelector('.cursor');
const dot = document.querySelector('.cursor-dot');
window.addEventListener('mousemove',(e)=>{
  if(!cursor || !dot) return;
  cursor.style.left = e.clientX+'px';
  cursor.style.top = e.clientY+'px';
  dot.style.left = e.clientX+'px';
  dot.style.top = e.clientY+'px';
});

document.querySelectorAll('a').forEach(a=>{
  a.addEventListener('mouseenter',()=>cursor && (cursor.style.transform='translate(-50%,-50%) scale(1.5)'));
  a.addEventListener('mouseleave',()=>cursor && (cursor.style.transform='translate(-50%,-50%) scale(1)'));
});
