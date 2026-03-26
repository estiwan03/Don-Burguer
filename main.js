// DON BURGER - JavaScript
// Raul Chaparro - raulchape03@gmail.com

// CURSOR (solo escritorio)
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX;my=e.clientY;
  cursor.style.left=mx+'px';cursor.style.top=my+'px';
});
function animRing(){
  rx+=(mx-rx)*.12;ry+=(my-ry)*.12;
  ring.style.left=rx+'px';ring.style.top=ry+'px';
  requestAnimationFrame(animRing);
}
animRing();

// NAV SCROLL
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',window.scrollY>50);
});

// SCROLL REVEAL
new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
},{threshold:.1}).observe && document.querySelectorAll('.reveal').forEach(r=>{
  new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
  },{threshold:.1}).observe(r);
});

// TABS MENU
document.querySelectorAll('.tab').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.mgrid').forEach(g=>g.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// WHATSAPP - reemplaza con el numero real del cliente
const WA='57XXXXXXXXXX';
document.getElementById('btnWhatsapp').addEventListener('click',()=>{
  const msg='Hola! Vi su pagina web y quiero hacer un pedido. Por favor indicarme disponibilidad.';
  window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(msg),'_blank');
});