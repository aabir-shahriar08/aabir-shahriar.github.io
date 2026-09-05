const header=document.querySelector('.header'), cursor=document.querySelector('.cursor');
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>35));
window.addEventListener('mousemove',e=>{if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'}});
document.querySelectorAll('a').forEach(a=>{
 a.addEventListener('mouseenter',()=>{if(cursor)cursor.style.transform='translate(-50%,-50%) scale(1.6)'});
 a.addEventListener('mouseleave',()=>{if(cursor)cursor.style.transform='translate(-50%,-50%) scale(1)'});
});
