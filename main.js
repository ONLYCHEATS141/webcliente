document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------- productos ---------------- */
const products = [
  { name:'Pollo asado entero', price:14.00, desc:'Asado lento, piel dorada y crujiente' },
  { name:'Medio pollo asado', price:7.00, desc:'Ideal para uno o dos comensales' }
];

function euros(n){ return Number(n).toFixed(2).replace('.', ',') + ' €'; }
function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}

function renderProducts(){
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = products.map(p => `
    <div class="card-product">
      <div class="pname">${escapeHtml(p.name)}</div>
      <div class="pdesc">${escapeHtml(p.desc || '')}</div>
      <div class="prow"><span class="price-tag">${euros(p.price)}</span><a href="tel:+34616619789" class="btn btn-ghost btn-sm">Llamar</a></div>
    </div>
  `).join('');
}
renderProducts();
