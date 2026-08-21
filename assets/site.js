const ROOT = document.body.dataset.depth === '1' ? '../' : './';
const services = [
  ['Swedish Massage','swedishmassage','Gentle, flowing strokes for stress relief and full-body relaxation.','https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=900&q=80'],
  ['Deep Tissue','deeptissue-massage','Focused pressure for stubborn muscle tension and recovery.','https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80'],
  ['Aromatherapy','aromatherapy-massage','Massage paired with carefully selected essential oils.','https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=900&q=80'],
  ['Lymphatic Massage','detox-massage','Light, rhythmic techniques that support relaxation and circulation.','https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80'],
  ['Pain Relief Massage','pain-relief-massage','Personalized work for everyday neck, shoulder, and back tension.','https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80'],
  ['Couples Massage','couple-massage','Unwind side by side in a peaceful shared experience.','https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80']
];
const grid=document.querySelector('#service-grid');
if(grid) grid.innerHTML=services.map(([n,u,d,i])=>`<a class="service-card" href="${ROOT}${u}/"><div class="image" style="background-image:url('${i}')" role="img" aria-label="${n} in Redmond"></div><div class="body"><p class="eyebrow">Signature treatment</p><h3>${n}</h3><p>${d}</p><span class="text-link">Learn more →</span></div></a>`).join('');
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav');
toggle?.addEventListener('click',()=>{const o=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',o)});
document.querySelector('#year').textContent=new Date().getFullYear();
