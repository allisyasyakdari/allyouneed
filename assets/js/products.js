/**
 * ====================================================================
 * DATA TOKO ALLYOUNEED & PRICELIST LENGKAP RESELLER APK
 * Owner: Al | Store: allyouneed | Link WA Resmi
 * Lengkap dengan Catatan (Notes) Detail Sesuai PL Asli
 * ====================================================================
 */

const STORE_CONFIG = {
  storeName: "all",
  ownerName: "Al",
  storeHandle: "@allyouneed",
  storeBio: "welcome to allyouneed! happy shopping!",
  
  // Link WhatsApp & Twitter Resmi
  whatsappLink: "https://wa.me/message/XRQLUTK4S6FWE1",
  twitterLink: "https://x.com/all_youneedyap",

  // Gambar QRIS Pembayaran
  qrisImage: "./assets/images/qris.png",

  // Jam Operasional
  workingHours: "08:00 - 23:00 WIB (Fast Response)",

  // Daftar Rekening Pembayaran
  paymentMethods: [
    { name: "QRIS All Payment", account: "Scan Semua E-Wallet", owner: "allyouneed", icon: "fa-solid fa-qrcode" },
  ],

  // Syarat dan Ketentuan (SnK) Toko
  rules: [
    "no rush orders and reports (semua diproses urut & teliti)",
    "strictly payment first policy (pembayaran di awal)",
    "no cancellations of orders jika pesanan sudah diproses",
    "kirim bukti transfer setelah melakukan pembayaran",
    "jangan hapus riwayat chat transaksi",
    "tanyakan ketersediaan stok terlebih dahulu ke admin",
    "100% legal dan full garansi sesuai ketentuan produk",
    "proses rata-rata 1 - 30 menit (maksimal 1x24 jam)",
    "klaim garansi maksimal 1x24 jam pasti dibantu hingga selesai"
  ]
};

// Kategori Pricelist
const PRICELIST_CATEGORIES = [
  { id: "all", name: "Semua Kategori", icon: "fa-solid fa-grid-2" },
  { id: "entertainment", name: "Entertainment", icon: "fa-solid fa-film" },
  { id: "music", name: "Music", icon: "fa-solid fa-headphones" },
  { id: "education", name: "Education & AI", icon: "fa-solid fa-brain" },
  { id: "editing", name: "Editing & Photo", icon: "fa-solid fa-wand-magic-sparkles" },
  { id: "others", name: "Another Application", icon: "fa-solid fa-cubes" }
];

// DAFTAR LENGKAP PRICELIST DENGAN HARGA USER & CATATAN ASLI
const PRICELIST = [
  // ==================== ENTERTAINMENT & STREAMING ====================
  {
    id: "netflix",
    name: "Netflix",
    category: "entertainment",
    startingPrice: "16k",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_N_logo.svg",
    notes: [
      "fixing time 0-3 hari",
      "billing indonesia"
    ],
    variants: [
      { type: "1p1u", items: [
        { duration: "1 bulan", price: "31k" },
        { duration: "2 bulan", price: "60k" },
        { duration: "3 bulan", price: "90k" }
      ]},
      { type: "1p2u", items: [
        { duration: "1 bulan", price: "16k" },
        { duration: "2 bulan", price: "32k" },
        { duration: "3 bulan", price: "48k" }
      ]},
      { type: "Semi Priv", items: [
        { duration: "1 bulan", price: "33k" },
        { duration: "2 bulan", price: "65k" },
        { duration: "3 bulan", price: "95k" }
      ]},
      { type: "Private", items: [
        { duration: "1 bulan", price: "158k" }
      ]}
    ]
  },
  {
    id: "disney-hotstar",
    name: "Disney+ Hotstar",
    category: "entertainment",
    startingPrice: "19k",
    logo: "https://img.icons8.com/color/96/disney-plus.png",
    notes: [
      "akun seller",
      "private bisa akun dari buyer",
      "share login 1 perangkat, wajib kirim bukti"
    ],
    variants: [
      { type: "Share Prem (6u)", items: [
        { duration: "1 bulan", price: "27k" }
      ]},
      { type: "Share Prem (10u)", items: [
        { duration: "1 bulan", price: "19k" }
      ]},
      { type: "Priv Std", items: [
        { duration: "1 bulan", price: "77k" }
      ]},
      { type: "Priv Prem", items: [
        { duration: "1 bulan", price: "92k" }
      ]}
    ]
  },
  {
    id: "amazon-prime",
    name: "Amazon Prime Video",
    category: "entertainment",
    startingPrice: "6k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/prime-video.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Share (4u)", items: [
        { duration: "1 bulan", price: "6k" },
        { duration: "2 bulan", price: "11k" },
        { duration: "3 bulan", price: "15k" }
      ]},
      { type: "Private", items: [
        { duration: "1 bulan", price: "9k" },
        { duration: "2 bulan", price: "17k" },
        { duration: "3 bulan", price: "22k" }
      ]}
    ]
  },
  {
    id: "hbo-max",
    name: "HBO Max",
    category: "entertainment",
    startingPrice: "17k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/hbo-max.png",
    notes: [
      "akun seller",
      "login tv beli 2 slot"
    ],
    variants: [
      { type: "Share (8u)", items: [
        { duration: "1 bulan", price: "17k" },
        { duration: "2 bulan", price: "23k" },
        { duration: "3 bulan", price: "32k" }
      ]},
      { type: "Private", items: [
        { duration: "1 bulan", price: "58k" }
      ]}
    ]
  },
  {
    id: "vidio-platinum",
    name: "Vidio Platinum",
    category: "entertainment",
    startingPrice: "7k",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Vidio_logo.svg",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "All Device (2u)", items: [
        { duration: "1 bulan", price: "25k" }
      ]},
      { type: "All Device Priv", items: [
        { duration: "1 bulan", price: "48k" }
      ]},
      { type: "Mobile (2u)", items: [
        { duration: "1 bulan", price: "17k" }
      ]},
      { type: "Mobile Priv", items: [
        { duration: "1 bulan", price: "30k" }
      ]},
      { type: "Bundle TV (2u)", items: [
        { duration: "1 bulan", price: "7k" }
      ]},
      { type: "Bundle TV Priv", items: [
        { duration: "1 bulan", price: "10k" }
      ]}
    ]
  },
  {
    id: "vision-paytv",
    name: "Vision PayTV",
    category: "entertainment",
    startingPrice: "10k",
    logo: "https://img.icons8.com/color/96/tv-show.png",
    notes: [
      "akun seller",
      "login email",
      "soccer channel",
      "sportstar 1&2",
      "spotv 1&2",
      "bein sport (2,4,5)",
      "ada iklan & tidak bisa nonton replay/siaran ulang"
    ],
    variants: [
      { type: "Share (2u)", items: [
        { duration: "1 bulan", price: "12k" }
      ]},
      { type: "Private", items: [
        { duration: "1 minggu", price: "10k" },
        { duration: "1 bulan", price: "18k" }
      ]}
    ]
  },
  {
    id: "catchplay",
    name: "Catchplay+",
    category: "entertainment",
    startingPrice: "5k",
    logo: "https://img.icons8.com/color/96/popcorn.png",
    notes: [
      "login di web bukan di app",
      "tidak termasuk single rent/buy"
    ],
    variants: [
      { type: "Share", items: [
        { duration: "1 bulan", price: "5k" },
        { duration: "1 tahun", price: "11k" }
      ]}
    ]
  },
  {
    id: "wetv",
    name: "WeTV",
    category: "entertainment",
    startingPrice: "7k",
    logo: "https://img.icons8.com/color/96/wechat.png",
    notes: [
      "akun seller",
      "login biasa",
      "tidak bisa login di tv kecuali priv"
    ],
    variants: [
      { type: "Share (6u)", items: [
        { duration: "1 bulan", price: "7k" }
      ]},
      { type: "Share Anlim (3u)", items: [
        { duration: "1 bulan", price: "13k" }
      ]},
      { type: "Private", items: [
        { duration: "1 bulan", price: "35k" }
      ]}
    ]
  },
  {
    id: "drakor-id",
    name: "Drakor.id",
    category: "entertainment",
    startingPrice: "5k",
    logo: "https://img.icons8.com/fluency/96/video-playlist.png",
    notes: [
      "akun seller",
      "login biasa",
      "tidak bisa login di tv kecuali priv"
    ],
    variants: [
      { type: "Share", items: [
        { duration: "1 bulan", price: "5k" },
        { duration: "2 bulan", price: "6k" },
        { duration: "3 bulan", price: "7k" },
        { duration: "6 bulan", price: "8k" },
        { duration: "1 tahun", price: "10k" }
      ]}
    ]
  },
  {
    id: "gagaoolala",
    name: "gagaoolala",
    category: "entertainment",
    startingPrice: "7k",
    logo: "https://img.icons8.com/fluency/96/rainbow.png",
    notes: [
      "akun seller",
      "login biasa",
      "tidak bisa login di tv"
    ],
    variants: [
      { type: "Share", items: [
        { duration: "1 bulan", price: "7k" }
      ]}
    ]
  },
  {
    id: "viu",
    name: "Viu",
    category: "entertainment",
    startingPrice: "400p",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Viu_logo.svg",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Private Biasa", items: [
        { duration: "1 hari", price: "400p" },
        { duration: "2 hari", price: "450p" },
        { duration: "3 hari", price: "500p" },
        { duration: "4 hari", price: "550p" },
        { duration: "5 hari", price: "600p" },
        { duration: "6 hari", price: "650p" },
        { duration: "7 hari", price: "800p" },
        { duration: "1 bulan", price: "2,5k" },
        { duration: "2 bulan", price: "4,5k" },
        { duration: "3 bulan", price: "6k" },
        { duration: "1 tahun", price: "8k" }
      ]},
      { type: "Antilimit", items: [
        { duration: "1 bulan", price: "3,5k" },
        { duration: "2 bulan", price: "5k" },
        { duration: "3 bulan", price: "7k" },
        { duration: "1 tahun", price: "10k" }
      ]}
    ]
  },
  {
    id: "iqiyi",
    name: "iQIYI",
    category: "entertainment",
    startingPrice: "500p",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/dd/IQiyi_logo_2022.svg",
    notes: [
      "akun seller",
      "share akun vip premium",
      "priv akun vip standar",
      "tidak bisa login di tv kecuali priv"
    ],
    variants: [
      { type: "Share", items: [
        { duration: "1 hari", price: "500p" },
        { duration: "2 hari", price: "600p" },
        { duration: "3 hari", price: "700p" },
        { duration: "4 hari", price: "800p" },
        { duration: "5 hari", price: "900p" },
        { duration: "6 hari", price: "1k" },
        { duration: "7 hari", price: "1,5k" },
        { duration: "1 bulan", price: "4k" },
        { duration: "2 bulan", price: "6k" },
        { duration: "3 bulan", price: "8k" },
        { duration: "6 bulan", price: "10k" },
        { duration: "1 tahun", price: "12k" }
      ]},
      { type: "Private", items: [
        { duration: "1 bulan", price: "35k" }
      ]}
    ]
  },
  {
    id: "bstation",
    name: "Bstation",
    category: "entertainment",
    startingPrice: "500p",
    logo: "https://img.icons8.com/color/96/bilibili.png",
    notes: [
      "akun seller",
      "login google/biasa",
      "tidak bisa login di tv kecuali priv"
    ],
    variants: [
      { type: "Share", items: [
        { duration: "1 hari", price: "500p" },
        { duration: "2 hari", price: "600p" },
        { duration: "3 hari", price: "700p" },
        { duration: "4 hari", price: "800p" },
        { duration: "5 hari", price: "900p" },
        { duration: "6 hari", price: "1k" },
        { duration: "7 hari", price: "1,5k" },
        { duration: "1 bulan", price: "5k" },
        { duration: "2 bulan", price: "7k" },
        { duration: "3 bulan", price: "9k" },
        { duration: "6 bulan", price: "12k" },
        { duration: "1 tahun", price: "18k" }
      ]},
      { type: "Private", items: [
        { duration: "1 bulan", price: "40k" }
      ]}
    ]
  },
  {
    id: "youku",
    name: "Youku",
    category: "entertainment",
    startingPrice: "500p",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Youku_logo.svg",
    notes: [
      "akun seller",
      "login google/biasa",
      "tidak bisa login di tv kecuali priv"
    ],
    variants: [
      { type: "Share", items: [
        { duration: "1 hari", price: "500p" },
        { duration: "2 hari", price: "600p" },
        { duration: "3 hari", price: "700p" },
        { duration: "4 hari", price: "800p" },
        { duration: "5 hari", price: "900p" },
        { duration: "6 hari", price: "1k" },
        { duration: "7 hari", price: "1,5k" },
        { duration: "1 bulan", price: "5k" },
        { duration: "2 bulan", price: "7k" },
        { duration: "3 bulan", price: "8k" },
        { duration: "6 bulan", price: "10k" },
        { duration: "1 tahun", price: "13k" }
      ]},
      { type: "Private", items: [
        { duration: "1 bulan", price: "32k" }
      ]}
    ]
  },
  {
    id: "crunchyroll",
    name: "Crunchyroll Megafan",
    category: "entertainment",
    startingPrice: "1,5k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/crunchyroll.png",
    notes: [
      "akun seller",
      "bisa download film",
      "bisa pakai vpn, jika anime tidak ada"
    ],
    variants: [
      { type: "Share", items: [
        { duration: "7 hari", price: "1,5k" },
        { duration: "1 bulan", price: "6k" },
        { duration: "2 bulan", price: "7k" },
        { duration: "3 bulan", price: "8k" },
        { duration: "6 bulan", price: "9k" },
        { duration: "1 tahun", price: "10k" }
      ]}
    ]
  },

  // ==================== MUSIC ====================
  {
    id: "youtube",
    name: "YouTube",
    category: "music",
    startingPrice: "7k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/youtube.png",
    notes: [
      "akun seller +7k",
      "+2k/bulan untuk full garansi inc garansi hh yt",
      "indplan harus gmail fresh",
      "limit bergabung 2x/th"
    ],
    variants: [
      { type: "Famplan", items: [
        { duration: "1 bulan", price: "7k" },
        { duration: "2 bulan", price: "13k" }
      ]},
      { type: "Indplan", items: [
        { duration: "1 bulan", price: "12k" }
      ]},
      { type: "Mixplan", items: [
        { duration: "2 bulan", price: "15k" },
        { duration: "3 bulan", price: "20k" }
      ]}
    ]
  },
  {
    id: "apple-music",
    name: "Apple Music",
    category: "music",
    startingPrice: "9k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/apple-music.png",
    notes: [
      "akun buyer",
      "via inv/link imess",
      "bisa ppj/aktivasi"
    ],
    variants: [
      { type: "Reguler", items: [
        { duration: "1 bulan", price: "9k" },
        { duration: "2 bulan", price: "15k" },
        { duration: "3 bulan (Renew)", price: "22k" },
        { duration: "3 bulan (No Renew)", price: "24k" }
      ]}
    ]
  },

  // ==================== EDUCATION, AI & PRODUCTIVITY ====================
  {
    id: "zoom",
    name: "Zoom",
    category: "education",
    startingPrice: "6,5k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/zoom.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Private (100p)", items: [
        { duration: "1 minggu", price: "6,5k" },
        { duration: "2 minggu", price: "11k" },
        { duration: "1 bulan", price: "18k" }
      ]}
    ]
  },
  {
    id: "chatgpt-go",
    name: "ChatGPT Go",
    category: "education",
    startingPrice: "20k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/chatgpt.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing (8u)", items: [
        { duration: "1 bulan", price: "20k" }
      ]},
      { type: "Sharing (5u)", items: [
        { duration: "1 bulan", price: "24k" }
      ]},
      { type: "Private", items: [
        { duration: "1 bulan", price: "53k" }
      ]}
    ]
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "education",
    startingPrice: "15k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/gemini.png",
    notes: [
      "invite email",
      "akun seller +3k /buyer",
      "full garansi"
    ],
    variants: [
      { type: "Pro", items: [
        { duration: "1 bulan", price: "15k" },
        { duration: "2 bulan", price: "21k" },
        { duration: "3 bulan", price: "29k" }
      ]}
    ]
  },
  {
    id: "grammarly",
    name: "Grammarly",
    category: "education",
    startingPrice: "6k",
    logo: "https://img.icons8.com/color/96/grammarly.png",
    notes: [
      "akun seller/buyer",
      "full garansi"
    ],
    variants: [
      { type: "Share", items: [
        { duration: "1 bulan", price: "6k" }
      ]}
    ]
  },
  {
    id: "wattpad",
    name: "Wattpad",
    category: "education",
    startingPrice: "4k",
    logo: "https://img.icons8.com/color/96/wattpad.png",
    notes: [
      "akun seller",
      "need email buyer"
    ],
    variants: [
      { type: "Share", items: [
        { duration: "1 bulan", price: "4k" },
        { duration: "6 bulan", price: "8k" },
        { duration: "1 tahun", price: "11k" }
      ]},
      { type: "Private", items: [
        { duration: "1 bulan", price: "18k" }
      ]}
    ]
  },
  {
    id: "quillbot",
    name: "Quillbot",
    category: "education",
    startingPrice: "6k",
    logo: "https://img.icons8.com/fluency/96/quill.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Share", items: [
        { duration: "1 bulan", price: "6k" }
      ]}
    ]
  },
  {
    id: "scribd",
    name: "Scribd",
    category: "education",
    startingPrice: "5k",
    logo: "https://img.icons8.com/color/96/scribd.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Share", items: [
        { duration: "1 bulan", price: "5k" }
      ]},
      { type: "Private", items: [
        { duration: "1 bulan", price: "12k" }
      ]}
    ]
  },
  {
    id: "duolingo-super",
    name: "Duolingo Super",
    category: "education",
    startingPrice: "7k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/duolingo.png",
    notes: [
      "famplan pribadi",
      "butuh email dan pass"
    ],
    variants: [
      { type: "Aktivasi", items: [
        { duration: "2 minggu", price: "7k" },
        { duration: "1 bulan", price: "10k" }
      ]},
      { type: "Private PPJ", items: [
        { duration: "1 bulan", price: "15k" }
      ]}
    ]
  },
  {
    id: "microsoft-365",
    name: "Microsoft 365",
    category: "education",
    startingPrice: "8k",
    logo: "https://img.icons8.com/color/96/microsoft-365.png",
    notes: [
      "via invite"
    ],
    variants: [
      { type: "Famplan", items: [
        { duration: "1 bulan", price: "8k" }
      ]}
    ]
  },
  {
    id: "kilonotes",
    name: "Kilonotes",
    category: "education",
    startingPrice: "14k",
    logo: "https://img.icons8.com/fluency/96/note.png",
    notes: [
      "akun seller",
      "need email buyer"
    ],
    variants: [
      { type: "Share Andro", items: [
        { duration: "Lifetime", price: "14k" }
      ]}
    ]
  },

  // ==================== EDITING & PHOTO ====================
  {
    id: "canva",
    name: "Canva",
    category: "editing",
    startingPrice: "4k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/canva.png",
    notes: [
      "akun buyer",
      "no fee untuk design template"
    ],
    variants: [
      { type: "Pro Plan", items: [
        { duration: "1 bulan", price: "4k" },
        { duration: "2 bulan", price: "6k" },
        { duration: "3 bulan", price: "7k" },
        { duration: "6 bulan", price: "9k" },
        { duration: "12 bulan (Gar 6b)", price: "12k" },
        { duration: "12 bulan (Gar 12b)", price: "15k" }
      ]},
      { type: "Edu Plan Lifetime", items: [
        { duration: "Lifetime (Gar 6b)", price: "13k" },
        { duration: "Lifetime (Gar 12b)", price: "16k" }
      ]}
    ]
  },
  {
    id: "capcut",
    name: "CapCut",
    category: "editing",
    startingPrice: "7k",
    logo: "https://img.icons8.com/color/96/capcut.png",
    notes: [
      "akun seller",
      "need email buyer"
    ],
    variants: [
      { type: "iOS/Andro Share (2u)", items: [
        { duration: "1 minggu", price: "7k" },
        { duration: "1 bulan", price: "20k" }
      ]},
      { type: "iOS/Andro Private", items: [
        { duration: "1 minggu", price: "11k" },
        { duration: "1 bulan", price: "38k" }
      ]}
    ]
  },
  {
    id: "dazzcam",
    name: "Dazzcam",
    category: "editing",
    startingPrice: "15k",
    logo: "https://img.icons8.com/color/96/camera.png",
    notes: [
      "akun seller",
      "need email buyer"
    ],
    variants: [
      { type: "iOS", items: [
        { duration: "Lifetime", price: "15k" }
      ]}
    ]
  },
  {
    id: "meitu",
    name: "Meitu",
    category: "editing",
    startingPrice: "8k",
    logo: "https://img.icons8.com/color/96/face-id.png",
    notes: [
      "akun seller",
      "need email buyer"
    ],
    variants: [
      { type: "VIP", items: [
        { duration: "7 hari andro", price: "8k" },
        { duration: "7 hari ios", price: "9k" },
        { duration: "1 bulan andro", price: "17k" }
      ]},
      { type: "VIP+", items: [
        { duration: "1 bulan andro/ios", price: "38k" }
      ]}
    ]
  },
  {
    id: "wink",
    name: "Wink",
    category: "editing",
    startingPrice: "10k",
    logo: "https://img.icons8.com/color/96/sparkling.png",
    notes: [
      "akun seller",
      "need email buyer"
    ],
    variants: [
      { type: "Android", items: [
        { duration: "7 hari", price: "10k" },
        { duration: "1 bulan", price: "18k" }
      ]},
      { type: "iOS", items: [
        { duration: "7 hari", price: "11k" }
      ]}
    ]
  },
  {
    id: "picsart",
    name: "PicsArt",
    category: "editing",
    startingPrice: "6k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/picsart.png",
    notes: [
      "akun dari seller",
      "support ios dan andro"
    ],
    variants: [
      { type: "Share", items: [
        { duration: "1 bulan", price: "6k" }
      ]},
      { type: "Private", items: [
        { duration: "1 bulan", price: "9k" }
      ]}
    ]
  },
  {
    id: "alight-motion",
    name: "Alight Motion",
    category: "editing",
    startingPrice: "2k",
    logo: "https://img.icons8.com/color/96/film-reel.png",
    notes: [
      "akun seller",
      "login via google/link",
      "need email buyer"
    ],
    variants: [
      { type: "Share", items: [
        { duration: "1 bulan", price: "2k" },
        { duration: "1 tahun", price: "4k" }
      ]},
      { type: "Private", items: [
        { duration: "1 bulan", price: "3k" },
        { duration: "1 tahun", price: "5k" }
      ]}
    ]
  },
  {
    id: "vsco",
    name: "VSCO",
    category: "editing",
    startingPrice: "4k",
    logo: "https://img.icons8.com/ios-filled/100/vsco.png",
    notes: [
      "akun seller",
      "need email buyer"
    ],
    variants: [
      { type: "Android", items: [
        { duration: "1 bulan", price: "4k" },
        { duration: "3 bulan", price: "6k" },
        { duration: "6 bulan", price: "8k" },
        { duration: "1 tahun", price: "11k" }
      ]},
      { type: "iOS", items: [
        { duration: "1 tahun", price: "12k" }
      ]}
    ]
  },
  {
    id: "oldroll",
    name: "OldRoll",
    category: "editing",
    startingPrice: "13k",
    logo: "https://img.icons8.com/color/96/slr-camera.png",
    notes: [
      "akun seller",
      "need email buyer"
    ],
    variants: [
      { type: "Android", items: [
        { duration: "Lifetime", price: "13k" }
      ]}
    ]
  },
  {
    id: "polar",
    name: "Polarr",
    category: "editing",
    startingPrice: "11k",
    logo: "https://img.icons8.com/color/96/photo-editor.png",
    notes: [
      "akun seller",
      "need email buyer"
    ],
    variants: [
      { type: "iOS / Android", items: [
        { duration: "1 tahun", price: "11k" }
      ]}
    ]
  },

  // ==================== ANOTHER APPLICATION ====================
  {
    id: "getcontact",
    name: "Getcontact",
    category: "others",
    startingPrice: "12k",
    logo: "https://img.icons8.com/color/96/contact-details.png",
    notes: [
      "aktivasi/ppj",
      "no wa = no gtc",
      "garansi 25-30 day"
    ],
    variants: [
      { type: "Premium", items: [
        { duration: "1 bulan", price: "12k" }
      ]}
    ]
  },
  {
    id: "vpn-custom",
    name: "VPN Premium",
    category: "others",
    startingPrice: "Chat Admin",
    logo: "https://img.icons8.com/color/96/vpn.png",
    notes: [
      "tanya pl ke admin"
    ],
    variants: [
      { type: "Request Admin", items: [
        { duration: "Custom Durasi", price: "Tanya Admin" }
      ]}
    ]
  },
  {
    id: "game-custom",
    name: "Game Top Up & Pass",
    category: "others",
    startingPrice: "Chat Admin",
    logo: "https://img.icons8.com/color/96/game-controller.png",
    notes: [
      "tanya pl ke admin"
    ],
    variants: [
      { type: "Request Admin", items: [
        { duration: "Custom Item", price: "Tanya Admin" }
      ]}
    ]
  }
];

// Bukti Transaksi Asli (Proof) - Thumbnail Kompak dengan Nama & Waktu
const PROOF_ITEMS = [
  {
    id: 1,
    title: "Netflix Premium",
    time: "07 Sep 2026 • 21:21 WIB",
    image: "./assets/images/proof/testi1.png"
  },
  {
    id: 2,
    title: "Canva Lifetime",
    time: "07 Sep 2026 • 08:48 WIB",
    image: "./assets/images/proof/testi2.png"
  },
  {
    id: 3,
    title: "Meitu VIP+",
    time: "07 Sep 2026 • 21:13 WIB",
    image: "./assets/images/proof/testi3.png"
  }
];
