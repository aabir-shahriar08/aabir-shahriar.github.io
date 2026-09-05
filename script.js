const header=document.querySelector('header'), progress=document.querySelector('.progress');
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>obs.observe(x));
window.addEventListener('scroll',()=>{
 header.classList.toggle('sticky',scrollY>30);
 const h=document.documentElement.scrollHeight-innerHeight;
 progress.style.width=(h>0?(scrollY/h)*100:0)+'%';
});
