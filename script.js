const btn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.global-nav');
btn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');
btn.setAttribute('aria-expanded',String(open));
btn.textContent=open?'×':'☰';});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');
btn?.setAttribute('aria-expanded','false');
if(btn)btn.textContent='☰';}));
