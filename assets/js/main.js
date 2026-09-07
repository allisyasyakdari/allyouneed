/**
 * ====================================================================
 * AESTHETIC CARRD JAVASCRIPT CONTROLLER (COMPACT ACCORDION)
 * Tanpa Spam Emoji, Desain Kompak Anti-Scroll, Link WhatsApp Resmi
 * ====================================================================
 */

let activeTab = 'pricelist';
let activeCategory = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  initStoreDetails();
  initTabs();
  renderCategoryPills();
  renderPricelist();
  renderContactTab();
  renderProofTab();
  setupSearchListener();

  // Cek hash URL awal (#pricelist, #contact, #proof)
  const hash = window.location.hash.replace('#', '');
  if (['pricelist', 'contact', 'proof'].includes(hash)) {
    switchTab(hash);
  }
});

/**
 * Inisialisasi Info Toko
 */
function initStoreDetails() {
  document.querySelectorAll('.store-name-text').forEach(el => el.textContent = STORE_CONFIG.storeName);
  document.querySelectorAll('.store-handle-text').forEach(el => el.textContent = STORE_CONFIG.storeHandle);
  document.querySelectorAll('.store-bio-text').forEach(el => el.textContent = STORE_CONFIG.storeBio);
}

/**
 * Navigasi 3 Tab Utama
 */
function initTabs() {
  const tabBtns = document.querySelectorAll('.carrd-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      switchTab(target);
    });
  });
}

function switchTab(tabId) {
  activeTab = tabId;

  document.querySelectorAll('.carrd-tab-btn').forEach(b => {
    if (b.getAttribute('data-tab') === tabId) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  document.querySelectorAll('.carrd-tab-pane').forEach(p => {
    if (p.id === `tab-${tabId}`) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });

  history.replaceState(null, null, `#${tabId}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Render Pill Kategori di Pricelist
 */
function renderCategoryPills() {
  const container = document.getElementById('categoryPills');
  if (!container) return;

  container.innerHTML = PRICELIST_CATEGORIES.map(cat => `
    <button class="carrd-pill-btn ${cat.id === activeCategory ? 'active' : ''}" data-category="${cat.id}">
      <i class="${cat.icon} mr-1"></i>${cat.name}
    </button>
  `).join('');

  container.querySelectorAll('.carrd-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.carrd-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderPricelist();
    });
  });
}

/**
 * Setup Live Search
 */
function setupSearchListener() {
  const input = document.getElementById('carrdSearchInput');
  if (!input) return;

  input.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderPricelist();
  });
}

/**
 * Render Pricelist dalam Format Accordion Kompak (Anti-Scroll Panjang)
 */
function renderPricelist() {
  const container = document.getElementById('pricelistContent');
  if (!container) return;

  // Filter produk berdasarkan Kategori dan Search Query
  let filtered = PRICELIST.filter(app => {
    const matchCat = (activeCategory === 'all') || (app.category === activeCategory);
    const matchSearch = app.name.toLowerCase().includes(searchQuery) ||
                        app.notes.some(n => n.toLowerCase().includes(searchQuery)) ||
                        app.variants.some(v => v.type.toLowerCase().includes(searchQuery));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8">
        <p class="font-bold text-sm text-[#55394A]">Aplikasi tidak ditemukan</p>
        <p class="text-xs text-[#8C6A7D] mt-1">Coba cari dengan nama lain atau tanyakan ke admin.</p>
        <button onclick="resetPricelistFilter()" class="btn-direct-order mt-3">
          Reset Filter
        </button>
      </div>
    `;
    return;
  }

  // Kelompokkan berdasarkan kategori
  const categoriesPresent = PRICELIST_CATEGORIES.filter(c => c.id !== 'all');
  
  let html = '';

  categoriesPresent.forEach(cat => {
    const itemsInCat = filtered.filter(item => item.category === cat.id);
    if (itemsInCat.length === 0) return;

    html += `
      <div class="carrd-category-divider">
        <i class="${cat.icon} text-pink-400"></i>
        <span>${cat.name}</span>
      </div>
    `;

    itemsInCat.forEach((app, index) => {
      const isSingleResult = (searchQuery.length > 0 && filtered.length <= 3);

      html += `
        <div class="carrd-accordion-item ${isSingleResult ? 'open' : ''}" id="accordion-${app.id}">
          
          <!-- Header Baris Ringkas -->
          <div class="carrd-accordion-header" onclick="toggleAccordion('${app.id}')">
            <div class="carrd-app-info">
              <img 
                src="${app.logo}" 
                alt="${app.name}" 
                class="carrd-app-logo"
                onerror="this.onerror=null; this.src='https://img.icons8.com/color/96/application-window.png'"
              />
              <span class="carrd-app-name">${app.name}</span>
            </div>
            <span class="carrd-badge-price">Mulai ${app.startingPrice}</span>
            <i class="fa-solid fa-chevron-down carrd-chevron"></i>
          </div>

          <!-- Body Dropdown Rincian Harga -->
          <div class="carrd-accordion-body">
            ${app.variants.map(variant => `
              <div class="carrd-variant-block">
                <div class="carrd-variant-label">${variant.type}</div>
                <div class="space-y-1">
                  ${variant.items.map(item => `
                    <div class="carrd-price-row">
                      <span class="carrd-row-duration">${item.duration}</span>
                      <span class="carrd-row-price">${item.price}</span>
                      <a 
                        href="${STORE_CONFIG.whatsappLink}" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="btn-direct-order" 
                        title="Order ${app.name} ${variant.type} ${item.duration}">
                        <span>Order</span>
                        <i class="fa-brands fa-whatsapp"></i>
                      </a>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}

            ${app.notes && app.notes.length > 0 ? `
              <div class="carrd-app-notes">
                ${app.notes.map(n => `<div>𔒌 ${n}</div>`).join('')}
              </div>
            ` : ''}
          </div>

        </div>
      `;
    });
  });

  html += `
    <div class="text-center text-xs text-[#8C6A7D] py-3.5 bg-pink-50/70 rounded-xl border border-pink-100 mt-4">
      Tidak menemukan aplikasi yang dicari?<br />
      <a href="${STORE_CONFIG.whatsappLink}" target="_blank" rel="noopener noreferrer" class="font-bold text-[#FF477E] hover:underline inline-flex items-center gap-1 mt-1">
        <span>Request APK ke Admin WhatsApp</span>
        <i class="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  `;

  container.innerHTML = html;
}

/**
 * Toggle Accordion (Klik APK untuk buka/tutup rincian harga)
 */
function toggleAccordion(appId) {
  const item = document.getElementById(`accordion-${appId}`);
  if (!item) return;

  const isOpen = item.classList.contains('open');

  // Tutup semua item lain agar tetap kompak (Accordion Mode)
  document.querySelectorAll('.carrd-accordion-item').forEach(el => {
    if (el !== item) el.classList.remove('open');
  });

  if (isOpen) {
    item.classList.remove('open');
  } else {
    item.classList.add('open');
  }
}

function resetPricelistFilter() {
  activeCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('carrdSearchInput');
  if (searchInput) searchInput.value = '';
  renderCategoryPills();
  renderPricelist();
}

/**
 * Render Tab Contact (Kontak, SnK, Rekening)
 */
function renderContactTab() {
  const container = document.getElementById('contactContent');
  if (!container) return;

  container.innerHTML = `
    <!-- Tombol Kontak Resmi (WhatsApp & Twitter Saja) -->
    <div class="mb-4 space-y-2">
      <a href="${STORE_CONFIG.whatsappLink}" target="_blank" rel="noopener noreferrer" class="carrd-contact-btn bg-[#25D366] text-white">
        <span class="flex items-center gap-2">
          <i class="fa-brands fa-whatsapp text-lg"></i>
          <span>WhatsApp Admin</span>
        </span>
        <i class="fa-solid fa-arrow-right text-xs"></i>
      </a>

      <a href="${STORE_CONFIG.twitterLink}" target="_blank" rel="noopener noreferrer" class="carrd-contact-btn bg-black text-white hover:bg-neutral-800">
        <span class="flex items-center gap-2">
          <i class="fa-brands fa-x-twitter text-lg"></i>
          <span>Twitter / X @all_youneedyap</span>
        </span>
        <i class="fa-solid fa-arrow-right text-xs"></i>
      </a>
    </div>

    <!-- Syarat & Ketentuan (SnK) -->
    <div class="carrd-snk-card">
      <div class="carrd-snk-header">
        <i class="fa-solid fa-file-shield text-[#FF477E]"></i>
        <span>Syarat dan Ketentuan (SnK)</span>
      </div>
      <div class="space-y-1.5 text-xs text-[#55394A]">
        ${STORE_CONFIG.rules.map(rule => `
          <div class="flex items-start gap-2">
            <span class="text-[#FF8DA1] font-bold">•</span>
            <span>${rule}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Pembayaran QRIS Resmi -->
    <div class="bg-[#FFFFFF] border border-[#FFCCD9] rounded-2xl p-4 mb-2 text-center">
      <div class="font-bold text-xs text-[#3B2433] mb-1 flex items-center justify-center gap-1.5">
        <i class="fa-solid fa-qrcode text-[#FF5A83]"></i>
        <span>QRIS Pembayaran Resmi</span>
      </div>
      <p class="text-[11px] text-[#8C6A7D] mb-3">
        Bisa scan via semua E-Wallet & Mobile Banking
      </p>

      <!-- Poster QRIS Gambar Asli dari User -->
      <div class="cursor-pointer max-w-[280px] mx-auto rounded-2xl overflow-hidden shadow-sm border-2 border-pink-100 hover:border-[#FF8DA1] transition-all hover:scale-[1.02]" onclick="openLightboxModal('${STORE_CONFIG.qrisImage}', 'QRIS Pembayaran allyouneed')">
        <img 
          src="${STORE_CONFIG.qrisImage}" 
          alt="QRIS allyouneed" 
          class="w-full h-auto object-contain block"
        />
      </div>

      <div class="mt-3 flex items-center justify-center gap-2">
        <button onclick="openLightboxModal('${STORE_CONFIG.qrisImage}', 'QRIS Pembayaran allyouneed')" class="btn-copy-rek text-[11px] py-1 px-3">
          <i class="fa-solid fa-expand mr-1"></i> Perbesar QRIS
        </button>
        <a href="${STORE_CONFIG.whatsappLink}" target="_blank" rel="noopener noreferrer" class="btn-direct-order text-[11px] py-1 px-3">
          <i class="fa-brands fa-whatsapp mr-1"></i> Kirim Bukti Transfer
        </a>
      </div>

      <div class="text-[10px] text-[#8C6A7D] mt-3 italic">
        *Jangan lupa kirim bukti transfer ke WhatsApp admin ya!
      </div>
    </div>
  `;
}

/**
 * Render Tab Proof (Bukti Transaksi)
 */
function renderProofTab() {
  const container = document.getElementById('proofContent');
  if (!container) return;

  container.innerHTML = `
    <div class="text-center mb-3">
      <h3 class="font-bold text-xs text-[#3B2433]">Bukti Transaksi</h3>
      <p class="text-[10px] text-[#8C6A7D] mt-0.5">Klik foto untuk melihat ukuran penuh</p>
    </div>

    <!-- Grid Thumbnail Kompak & Rapi (Ukuran Kecil) -->
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4">
      ${PROOF_ITEMS.map((item) => `
        <div class="cursor-pointer bg-white rounded-xl overflow-hidden border border-pink-200 hover:border-[#FF8DA1] shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group" onclick="openLightboxModal('${item.image}', '${item.title} • ${item.time}')">
          <!-- Thumbnail Kecil (Bisa Klik Zoom) -->
          <div class="h-28 overflow-hidden bg-pink-50 relative flex items-center justify-center">
            <img 
              src="${item.image}" 
              alt="${item.title}" 
              class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-200" 
            />
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs">
              <i class="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </div>
          <!-- Nama & Waktu Input -->
          <div class="p-2 border-t border-pink-100">
            <div class="font-bold text-[11px] text-[#2E1F29] truncate" title="${item.title}">${item.title}</div>
            <div class="text-[9px] text-[#8C6A7D] mt-0.5 truncate">${item.time}</div>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="text-center p-3 bg-pink-50/70 rounded-xl border border-pink-100 text-xs text-[#8C6A7D]">
      Ingin melihat update & testimoni lainnya?<br />
      <a href="${STORE_CONFIG.twitterLink}" target="_blank" rel="noopener noreferrer" class="font-bold text-[#FF477E] hover:underline inline-flex items-center gap-1 mt-1">
        <i class="fa-brands fa-x-twitter"></i>
        <span>Kunjungi Twitter / X @all_youneedyap</span>
        <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
      </a>
    </div>
  `;
}

/**
 * Salin Rekening & Tampilkan Toast
 */
function copyAccount(account, name) {
  navigator.clipboard.writeText(account).then(() => {
    showToast(`Nomor ${name} (${account}) berhasil disalin!`);
  }).catch(() => {
    const el = document.createElement('textarea');
    el.value = account;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast(`Nomor ${name} berhasil disalin!`);
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toastText');
  if (!toast || !toastText) return;

  toastText.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

/**
 * Lightbox Modal Preview
 */
function openLightboxModal(src, caption) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (!modal || !img) return;

  img.src = src;
  if (cap) cap.textContent = caption;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightboxModal() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}
