const photo = (id, width = 1500) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`;

// One guide card for each current Karnataka district. Food and specialty picks are local highlights, not a complete culinary inventory.
const destinations = [
  {district:'Bagalkote',category:'Heritage',places:'Badami Cave Temples · Aihole · Pattadakal · Kudalasangama',food:'Jolada rotti with ennegayi',special:'Ilkal handloom sarees',best:'October – March',image:photo('photo-1655710917923-7e6882cdf1ca'),alt:'Stone temple architecture in Karnataka'},
  {district:'Ballari',category:'Heritage',places:'Ballari Fort · Daroji Sloth Bear Sanctuary · Sandur',food:'Jolada rotti and North Karnataka saaru',special:'Sandur’s Lambani embroidery and crafts',best:'October – February',image:photo('photo-1651073231492-169afcf84f36'),alt:'Historic stone architecture in Karnataka'},
  {district:'Belagavi',category:'Waterfall',places:'Belagavi Fort · Gokak Falls · Saundatti Yellamma Temple',food:'Belagavi kunda · Gokak karadantu',special:'Gokak Falls and its suspension bridge',best:'July – February',image:photo('photo-1691440732272-630077b59d2f'),alt:'Waterfall surrounded by green forest'},
  {district:'Bengaluru Rural',category:'Heritage',places:'Devanahalli Fort · Ghati Subramanya · Makalidurga',food:'Thatte idli · ragi mudde',special:'Devanahalli pomelo',best:'October – February',image:photo('photo-1644779504736-ed346f96a7bf'),alt:'Historic architecture in Karnataka'},
  {district:'Bengaluru South',category:'Nature',places:'Ramadevara Betta · Mekedatu · Channapatna',food:'Ragi mudde with bassaru',special:'Channapatna lacquered wooden toys',best:'October – February',image:photo('photo-1585640036119-ce2bf9c502d8'),alt:'Green hills in southern Karnataka'},
  {district:'Bengaluru Urban',category:'City',places:'Vidhana Soudha · Bengaluru Palace · Cubbon Park',food:'Bengaluru masala puri · filter coffee',special:'A lively mix of gardens, markets and old neighbourhoods',best:'October – February',image:photo('photo-1644779504736-ed346f96a7bf'),alt:'Vidhana Soudha in Bengaluru'},
  {district:'Bidar',category:'Heritage',places:'Bidar Fort · Bahmani Tombs · Narasimha Jharni',food:'Kalyani-style biryani · jowar rotti',special:'Bidriware metal inlay craft',best:'October – February',image:photo('photo-1655710917923-7e6882cdf1ca'),alt:'Stone fort architecture in Karnataka'},
  {district:'Chamarajanagar',category:'Nature',places:'Bandipur Tiger Reserve · Biligiri Rangana Hills · Male Mahadeshwara Hills',food:'Ragi mudde with bassaru',special:'Forest landscapes and wildlife of the Nilgiri biosphere',best:'October – May',image:photo('photo-1750353127516-87bd2c25c21d'),alt:'Lush forest landscape in Karnataka'},
  {district:'Chikkaballapura',category:'Hill station',places:'Nandi Hills · Bhoga Nandeeshwara Temple · Skandagiri',food:'Ragi mudde · local grape and groundnut dishes',special:'Sunrise viewpoints across the Nandi hill range',best:'September – February',image:photo('photo-1739038034755-da0dd12de467'),alt:'Clouds rolling over Karnataka hill country'},
  {district:'Chikkamagaluru',category:'Hill station',places:'Mullayanagiri · Baba Budangiri · Bhadra Wildlife Sanctuary',food:'Akki rotti · bamboo shoot curry',special:'Coffee grown in the Malnad hills',best:'September – March',image:photo('photo-1739038034755-da0dd12de467'),alt:'Green highlands in Chikkamagaluru'},
  {district:'Chitradurga',category:'Heritage',places:'Chitradurga Fort · Chandravalli · Vani Vilas Sagar',food:'Jolada rotti · ragi mudde',special:'The hilltop fort’s gates, ramparts and stories',best:'October – February',image:photo('photo-1651073231492-169afcf84f36'),alt:'Ancient stone structures in Karnataka'},
  {district:'Dakshina Kannada',category:'Coast',places:'Mangaluru · Kadri Manjunatha Temple · Pilikula',food:'Neer dosa · kori rotti · Mangalorean fish curry',special:'Yakshagana performance and coastal cuisine',best:'October – March',image:photo('photo-1743745832946-5f62a72cad16'),alt:'Karnataka coast beside the Arabian Sea'},
  {district:'Davanagere',category:'Food',places:'Kunduvada Kere · Bathi Gudda · Harihareshwara Temple',food:'Davanagere benne dosa',special:'The city’s buttery dosa and breakfast cafés',best:'October – February',image:photo('photo-1708146464361-5c5ce4f9abb6'),alt:'South Indian dosa served with chutneys'},
  {district:'Dharwad',category:'Food',places:'Chandramouleshwara Temple · Unkal Lake · Nuggikeri Hanuman Temple',food:'Dharwad peda · jolada rotti',special:'Dharwad’s Hindustani music heritage',best:'October – February',image:photo('photo-1655710917923-7e6882cdf1ca'),alt:'Heritage architecture in Karnataka'},
  {district:'Gadag',category:'Heritage',places:'Lakkundi · Trikuteshwara Temple · Dambal',food:'Jolada rotti · shenga chutney',special:'Chalukyan temples and stone-carving heritage',best:'October – February',image:photo('photo-1651073231492-169afcf84f36'),alt:'Carved stone temple in Karnataka'},
  {district:'Hassan',category:'Heritage',places:'Belur · Halebidu · Shravanabelagola',food:'Akki rotti · ragi mudde',special:'Hoysala temple sculpture and architecture',best:'October – March',image:photo('photo-1655710917923-7e6882cdf1ca'),alt:'Intricate stone architecture in Karnataka'},
  {district:'Haveri',category:'Nature',places:'Ranebennur Blackbuck Sanctuary · Bankapura Peacock Sanctuary · Hangal',food:'Jolada rotti · Byadgi chilli dishes',special:'Byadgi chilli, known for its deep red colour',best:'October – February',image:photo('photo-1750353127516-87bd2c25c21d'),alt:'Woodland and wildlife landscape in Karnataka'},
  {district:'Kalaburagi',category:'Heritage',places:'Sharana Basaveshwara Temple · Buddha Vihar · Khwaja Banda Nawaz Dargah',food:'Jolada rotti · tahari',special:'Kalaburagi toor dal',best:'October – February',image:photo('photo-1655710917923-7e6882cdf1ca'),alt:'Historic architecture in northern Karnataka'},
  {district:'Kodagu',category:'Hill station',places:'Abbey Falls · Raja’s Seat · Talacauvery',food:'Pandi curry · akki rotti',special:'Coorg coffee and Kodava food traditions',best:'October – March',image:photo('photo-1585640036119-ce2bf9c502d8'),alt:'Coffee country hills in Kodagu'},
  {district:'Kolar',category:'Heritage',places:'Kolaramma Temple · Antharagange · Avani',food:'Ragi mudde · seasonal avarekalu dishes',special:'Kolar Gold Fields heritage',best:'October – February',image:photo('photo-1655710917923-7e6882cdf1ca'),alt:'Rocky heritage landscape in Karnataka'},
  {district:'Koppal',category:'Heritage',places:'Anegundi · Itagi Mahadeva Temple · Kanakagiri',food:'Jolada rotti · ennegayi',special:'Kinnal woodcraft',best:'October – February',image:photo('photo-1651073231492-169afcf84f36'),alt:'Ancient stone architecture in Koppal region'},
  {district:'Mandya',category:'Nature',places:'Shivanasamudra Falls · Srirangapatna · Melukote · Kokkarebellur',food:'Maddur vade · ragi mudde',special:'Sugarcane country and traditional jaggery',best:'October – February',image:photo('photo-1691440732272-630077b59d2f'),alt:'Waterfall in southern Karnataka'},
  {district:'Mysuru',category:'Heritage',places:'Mysore Palace · Chamundi Hill · Somanathapura',food:'Mysore masala dosa · Mysore pak',special:'Mysore silk and Dasara traditions',best:'October – March',image:photo('photo-1759675408229-c613d95b1d0e'),alt:'Mysore Palace in Karnataka'},
  {district:'Raichur',category:'Heritage',places:'Raichur Fort · Mudgal Fort · Hatti Gold Mines',food:'Jolada rotti · brinjal ennegayi',special:'Deccan forts and the old gold-mining landscape',best:'October – February',image:photo('photo-1655710917923-7e6882cdf1ca'),alt:'Fort-like stone architecture in Karnataka'},
  {district:'Shivamogga',category:'Waterfall',places:'Jog Falls · Keladi · Ikkeri',food:'Akki rotti · Malnad bamboo shoot curry',special:'Sharavathi river landscapes and Western Ghats forests',best:'July – February',image:photo('photo-1691440732272-630077b59d2f'),alt:'Jog Falls in the Western Ghats'},
  {district:'Tumakuru',category:'Nature',places:'Devarayanadurga · Siddaganga Math · Madhugiri Fort',food:'Ragi mudde · thatte idli',special:'Madhugiri, one of the region’s striking hill forts',best:'October – February',image:photo('photo-1739038034755-da0dd12de467'),alt:'Green hill country in Karnataka'},
  {district:'Udupi',category:'Coast',places:'Sri Krishna Matha · Malpe Beach · St Mary’s Islands',food:'Udupi masala dosa · goli baje',special:'Udupi’s temple-town vegetarian cooking',best:'October – March',image:photo('photo-1743745832946-5f62a72cad16'),alt:'Beach on the Karnataka coastline'},
  {district:'Uttara Kannada',category:'Coast',places:'Gokarna · Murudeshwar · Yana · Karwar Beach',food:'Coastal fish curry · neer dosa',special:'A meeting of forest, river, beach and sea',best:'October – March',image:photo('photo-1743745832946-5f62a72cad16'),alt:'Arabian Sea coastline in Karnataka'},
  {district:'Vijayanagara',category:'Heritage',places:'Hampi · Tungabhadra Dam · Anjanadri Hill',food:'Jolada rotti · North Karnataka saaru',special:'The Vijayanagara ruins and stone chariot',best:'October – February',image:photo('photo-1651073231492-169afcf84f36'),alt:'Hampi heritage landscape'},
  {district:'Vijayapura',category:'Heritage',places:'Gol Gumbaz · Ibrahim Rauza · Bara Kaman',food:'Jowar rotti · shenga holige',special:'Deccan domes, minarets and Adil Shahi architecture',best:'October – February',image:photo('photo-1655710917923-7e6882cdf1ca'),alt:'Historic domed architecture in Karnataka'},
  {district:'Yadgir',category:'Heritage',places:'Yadgir Fort · Sannati · Narayanpur Dam',food:'Jolada rotti · ennegayi',special:'Sannati’s Buddhist archaeological heritage',best:'October – February',image:photo('photo-1655710917923-7e6882cdf1ca'),alt:'Historic stone heritage in Karnataka'}
];

const galleryPhotos = [
  {title:'The stone stories of Hampi',place:'HAMPI',image:photo('photo-1655710917923-7e6882cdf1ca',1800)},
  {title:'A green world in Coorg',place:'KODAGU',image:photo('photo-1585640036119-ce2bf9c502d8',1800)},
  {title:'The royal city at dusk',place:'MYSURU',image:photo('photo-1759675408229-c613d95b1d0e',1800)},
  {title:'Where the river runs wild',place:'DANDELI',image:photo('photo-1750353127516-87bd2c25c21d',1800)},
  {title:'A coast made for wandering',place:'GOKARNA',image:photo('photo-1743745832946-5f62a72cad16',1800)},
  {title:'Monsoon in the Ghats',place:'JOG FALLS',image:photo('photo-1691440732272-630077b59d2f',1800)},
  {title:'Coffee country mornings',place:'CHIKKAMAGALURU',image:photo('photo-1739038034755-da0dd12de467',1800)},
  {title:'A taste of Mysuru',place:'KARNATAKA CUISINE',image:photo('photo-1708146464361-5c5ce4f9abb6',1800)}
];

const grid = document.querySelector('#destination-grid');
const searchInput = document.querySelector('#place-search');
const categoryFilter = document.querySelector('#category-filter');
const districtFilter = document.querySelector('#district-filter');
const favoriteFilter = document.querySelector('#favorite-filter');
const favorites = new Set(JSON.parse(localStorage.getItem('karnataka-favorites') || '[]'));
let favoritesOnly = false;

for (const place of destinations) {
  const option = document.createElement('option');
  option.value = place.district;
  option.textContent = place.district;
  districtFilter.append(option);
}

function renderDestinations() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const district = districtFilter.value;
  const matches = destinations.filter(place => {
    const searchable = `${place.district} ${place.places} ${place.food} ${place.special} ${place.category}`.toLowerCase();
    return (!query || searchable.includes(query)) && (category === 'all' || place.category === category) && (district === 'all' || place.district === district) && (!favoritesOnly || favorites.has(place.district));
  });
  grid.innerHTML = matches.map((place, index) => `
    <article class="destination-card" style="animation-delay:${Math.min(index * 22, 260)}ms">
      <div class="card-image-wrap"><img class="card-image" src="${place.image}" alt="${place.alt}" loading="lazy"><span class="card-category">${place.category}</span><button class="favorite-button ${favorites.has(place.district) ? 'is-favorite' : ''}" data-favorite="${place.district}" aria-label="${favorites.has(place.district) ? 'Remove' : 'Add'} ${place.district} ${favorites.has(place.district) ? 'from' : 'to'} favourites" aria-pressed="${favorites.has(place.district)}">${favorites.has(place.district) ? '♥' : '♡'}</button></div>
      <div class="card-body"><div class="card-location"><span>KARNATAKA DISTRICT</span><span>✳ ${place.district}</span></div><h3 class="card-title">${place.district}</h3><p class="district-places"><b>EXPLORE</b>${place.places}</p><div class="local-picks"><div><small>LOCAL FOOD</small><p>${place.food}</p></div><div><small>KNOWN FOR</small><p>${place.special}</p></div></div><div class="card-footer"><span>BEST TIME · ${place.best}</span><a class="card-explore" href="https://www.google.com/search?q=${encodeURIComponent(place.district + ' Karnataka ' + place.places)}" target="_blank" rel="noopener">Discover <span>↗</span></a></div></div>
    </article>`).join('');
  document.querySelector('#results-count').textContent = favoritesOnly ? `${matches.length} favourite ${matches.length === 1 ? 'district' : 'districts'} · 31 districts in this guide` : `${matches.length} of 31 districts · tourist places, food & local highlights`;
  document.querySelector('#empty-state').hidden = matches.length > 0;
  grid.hidden = matches.length === 0;
  grid.querySelectorAll('[data-favorite]').forEach(button => button.addEventListener('click', () => toggleFavorite(button.dataset.favorite)));
}

function toggleFavorite(district) {
  favorites.has(district) ? favorites.delete(district) : favorites.add(district);
  localStorage.setItem('karnataka-favorites', JSON.stringify([...favorites]));
  renderDestinations();
}

[searchInput, categoryFilter, districtFilter].forEach(control => control.addEventListener(control === searchInput ? 'input' : 'change', renderDestinations));
favoriteFilter.addEventListener('click', () => {
  favoritesOnly = !favoritesOnly;
  favoriteFilter.setAttribute('aria-pressed', String(favoritesOnly));
  favoriteFilter.innerHTML = `${favoritesOnly ? '♥' : '♡'} <span>${favoritesOnly ? 'Show all districts' : 'Show favourites'}</span>`;
  renderDestinations();
});
document.querySelector('#clear-filters').addEventListener('click', () => {
  searchInput.value = ''; categoryFilter.value = 'all'; districtFilter.value = 'all'; favoritesOnly = false;
  favoriteFilter.setAttribute('aria-pressed', 'false'); favoriteFilter.innerHTML = '♡ <span>Show favourites</span>'; renderDestinations();
});
document.querySelectorAll('[data-quick-filter]').forEach(link => link.addEventListener('click', () => { categoryFilter.value = link.dataset.quickFilter; renderDestinations(); }));
document.querySelector('#random-place').addEventListener('click', () => {
  const pool = destinations.filter(place => categoryFilter.value === 'all' || place.category === categoryFilter.value);
  const chosen = pool[Math.floor(Math.random() * pool.length)];
  if (!chosen) return;
  searchInput.value = chosen.district; districtFilter.value = 'all'; favoritesOnly = false; favoriteFilter.setAttribute('aria-pressed', 'false'); favoriteFilter.innerHTML = '♡ <span>Show favourites</span>'; renderDestinations();
  document.querySelector('#destinations').scrollIntoView({behavior:'smooth'});
});

const daysRange = document.querySelector('#days-range');
const travellersRange = document.querySelector('#travellers-range');
const styleSelect = document.querySelector('#travel-style');
function updateBudget() {
  const dailyRates = {budget:1800, comfort:3000, premium:5600};
  const days = Number(daysRange.value), people = Number(travellersRange.value);
  document.querySelector('#days-value').textContent = days;
  document.querySelector('#travellers-value').textContent = people;
  document.querySelector('#budget-people').textContent = people;
  const estimate = Math.round(days * people * dailyRates[styleSelect.value] / 500) * 500;
  document.querySelector('#budget-total').textContent = `₹ ${estimate.toLocaleString('en-IN')}`;
}
[daysRange, travellersRange, styleSelect].forEach(input => input.addEventListener('input', updateBudget));

const gallery = document.querySelector('#gallery-track');
gallery.innerHTML = galleryPhotos.map(photoData => `<button class="gallery-item" data-image="${photoData.image}" data-caption="${photoData.title} · ${photoData.place}" aria-label="View ${photoData.title}"><img src="${photoData.image}" alt="${photoData.title}" loading="lazy"><span class="gallery-caption">${photoData.place} <span>↗</span></span></button>`).join('');
const lightbox = document.querySelector('#lightbox');
gallery.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', () => {
  document.querySelector('#lightbox-image').src = item.dataset.image;
  document.querySelector('#lightbox-image').alt = item.querySelector('img').alt;
  document.querySelector('#lightbox-caption').textContent = item.dataset.caption;
  lightbox.showModal();
}));
document.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
document.querySelector('#gallery-next').addEventListener('click', () => gallery.scrollBy({left:gallery.clientWidth * .72,behavior:'smooth'}));
document.querySelector('#gallery-prev').addEventListener('click', () => gallery.scrollBy({left:-gallery.clientWidth * .72,behavior:'smooth'}));

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded','false'); }));
document.addEventListener('keydown', event => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); searchInput.focus(); } });

renderDestinations();
updateBudget();
