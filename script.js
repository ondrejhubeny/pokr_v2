const DISHES = [
  { cat: 'pivo', catLabel: 'Na čepu', name: 'Pilsner Urquell 12°', tag: 'Hvězda sládků', desc: 'Dokonale ošetřená hladinka s hustou krémovou pěnou z našeho výčepu.', price: '62 Kč', size: '0,5 l' },
  { cat: 'pivo', catLabel: 'Na čepu', name: 'Velkopopovický Kozel 11°', tag: 'Stálice', desc: 'Poctivý český ležák plné chuti, ideální k večernímu posezení i kvízu.', price: '52 Kč', size: '0,5 l' },
  { cat: 'pivo', catLabel: 'Na čepu', name: 'Volba sládků — Speciál měsíce', tag: 'Rotující pípa', desc: 'Pravidelně obměňovaný pivní speciál pro všechny, kdo rádi objevují.', price: '59 Kč', size: '0,4 l / 0,5 l' },

  { cat: 'pizza', catLabel: 'Pizza z pece', name: 'Pizza POKR Speciál', tag: 'Hit podniku', desc: 'Rajčatový základ, mozzarella, šunka, anglická slanina, salám, žampiony, jalapeños, česnek.', price: '205 Kč', size: 'Ø 32 cm' },
  { cat: 'pizza', catLabel: 'Pizza z pece', name: 'Bela Italia', tag: 'Oblíbená', desc: 'Rajčatový základ, mozzarella, prosciutto, čerstvá rukola, hobliny parmazánu.', price: '215 Kč', size: 'Ø 32 cm' },
  { cat: 'pizza', catLabel: 'Pizza z pece', name: 'Quattro Formaggi', desc: 'Smetanový základ, mozzarella, niva, uzený sýr a hermelín s čerstvým pepřem.', price: '195 Kč', size: 'Ø 32 cm' },

  { cat: 'burgery', catLabel: 'Burgery', name: 'POKR Bacon Cheese Burger', tag: 'Bestseller', desc: '180 g hovězího masa v máslové briošce, dvojitý cheddar, křupavá slanina, karamelizovaná cibulka, hranolky.', price: '249 Kč', size: 's hranolky' },
  { cat: 'burgery', catLabel: 'Burgery', name: 'Jalapeño Smash Burger', tag: 'Pikantní', desc: 'Dvojité smash hovězí, cheddar, jalapeños, chipotle majonéza, kyselá okurka, hranolky.', price: '259 Kč', size: 's hranolky' },
  { cat: 'burgery', catLabel: 'Burgery', name: 'Crispy Chicken Burger', desc: 'Křupavé kuřecí prso, čerstvý coleslaw, cheddar, česnekový dresink, hranolky.', price: '229 Kč', size: 's hranolky' },

  { cat: 'rizky', catLabel: 'Řízky & Maso', name: 'Vepřový řízek z krkovice', tag: 'Poctivá klasika', desc: '200 g šťavnatého masa ve zlatavém trojobalu, citron, okurka, příloha dle výběru.', price: '215 Kč', size: '200 g' },
  { cat: 'rizky', catLabel: 'Řízky & Maso', name: 'Pečená žebra na prkně', tag: 'K pivu', desc: '500 g masitých žeber v pivní marinádě s křenem, hořčicí, kozími rohy a teplým fokáčem.', price: '299 Kč', size: '500 g' },
  { cat: 'rizky', catLabel: 'Řízky & Maso', name: 'Smažený kuřecí řízek', desc: '200 g kuřecích prsou smažených dozlatova, čerstvý citron a domácí tatarka.', price: '205 Kč', size: '200 g' },

  { cat: 'fokace', catLabel: 'Domácí fokáče', name: 'Rozmarýnový fokáč s mořskou solí', tag: 'Přímo z pece', desc: 'Voňavé nadýchané těsto potřené extra panenským olivovým olejem a rozmarýnem.', price: '89 Kč', size: '1 ks' },
  { cat: 'fokace', catLabel: 'Domácí fokáče', name: 'Česnekový fokáč s parmazánem', tag: 'Oblíbený', desc: 'Křupavý fokáč s čerstvým česnekem, parmazánem a bylinkovým dipem.', price: '109 Kč', size: '1 ks' },
  { cat: 'fokace', catLabel: 'Domácí fokáče', name: 'Fokáč s olivami a rajčaty', desc: 'Zapečený s černými olivami, sušenými rajčaty a čerstvým oreganem.', price: '115 Kč', size: '1 ks' }
];

const cardsMenu = document.getElementById('cardsMenu');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderDishes(filter) {
  const list = filter === 'all'
    ? DISHES.filter((_, idx) => idx % 3 !== 2) // 2 top items per category in 'all' view (10 items)
    : DISHES.filter((d) => d.cat === filter);

  cardsMenu.innerHTML = list.map((d) => `
    <article class="dish-card">
      <div>
        <div class="dish-meta">
          <span class="dish-cat">${d.catLabel}</span>
          ${d.tag ? `<span class="dish-tag">${d.tag}</span>` : ''}
        </div>
        <h3>${d.name}</h3>
        <p>${d.desc}</p>
      </div>
      <div class="dish-bottom">
        <span class="dish-price">${d.price}</span>
        <span class="dish-size">${d.size}</span>
      </div>
    </article>
  `).join('');
}

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderDishes(btn.dataset.filter);
  });
});

renderDishes('all');

// Mobile menu
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
burgerBtn.addEventListener('click', () => {
  const isHidden = mobileMenu.hasAttribute('hidden');
  if (isHidden) {
    mobileMenu.removeAttribute('hidden');
    burgerBtn.setAttribute('aria-expanded', 'true');
  } else {
    mobileMenu.setAttribute('hidden', '');
    burgerBtn.setAttribute('aria-expanded', 'false');
  }
});
mobileMenu.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    mobileMenu.setAttribute('hidden', '');
    burgerBtn.setAttribute('aria-expanded', 'false');
  });
});

// Quick catering inquiry
const quickInquiry = document.getElementById('quickInquiry');
const inquiryFeedback = document.getElementById('inquiryFeedback');
quickInquiry.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(quickInquiry);
  const name = fd.get('name');
  const contact = fd.get('contact');
  const guests = fd.get('guests');
  const subject = encodeURIComponent(`Poptávka akce / cateringu (${guests} osob) – ${name}`);
  const body = encodeURIComponent(`Dobrý den,\n\nrád(a) bych poptal(a) akci nebo catering v Pivnici Pizza POKR pro cca ${guests} osob.\nKontakt: ${contact}\n\nDěkuji,\n${name}`);

  inquiryFeedback.hidden = false;
  inquiryFeedback.innerHTML = `
    Skvělé, <strong>${name}</strong>! Poptávka pro <strong>${guests} osob</strong> je nachystaná —
    <a href="mailto:info@pivnicepizzapokr.cz?subject=${subject}&body=${body}">klikněte pro odeslání e-mailem</a>
    nebo rovnou zavolejte na <a href="tel:+420608822342">+420 608 822 342</a>.
  `;
});

document.getElementById('year').textContent = new Date().getFullYear();
