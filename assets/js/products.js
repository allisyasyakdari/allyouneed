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
    startingPrice: "4k",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_N_logo.svg",
    notes: [
      "fixing time 0-3 hari",
      "billing indonesia"
    ],
    variants: [
      { type: "1P1U", items: [
        { duration: "1 Hari", price: "5k" },
        { duration: "2 Hari", price: "7k" },
        { duration: "3 Hari", price: "9k" },
        { duration: "7 Hari", price: "13k" },
        { duration: "1 Bulan", price: "31k" },
        { duration: "2 Bulan", price: "60k" },
        { duration: "3 Bulan", price: "90k" }
      ]},
      { type: "1P2U", items: [
        { duration: "1 Hari", price: "4k" },
        { duration: "2 Hari", price: "7k" },
        { duration: "3 Hari", price: "9k" },
        { duration: "7 Hari", price: "11k" },
        { duration: "1 Bulan", price: "16k" },
        { duration: "2 Bulan", price: "32k" },
        { duration: "3 Bulan", price: "48k" }
      ]},
      { type: "Semi Private", items: [
        { duration: "1 Bulan", price: "33k" },
        { duration: "2 Bulan", price: "65k" },
        { duration: "3 Bulan", price: "95k" }
      ]},
      { type: "Private", items: [
        { duration: "1 Bulan", price: "158k" }
      ]}
    ]
  },
  {
    id: "wetv",
    name: "WeTV",
    category: "entertainment",
    startingPrice: "2k",
    logo: "https://img.icons8.com/color/96/wechat.png",
    notes: [
      "acc seller",
      "login di TV only private"
    ],
    variants: [
      { type: "Sharing 6U", items: [
        { duration: "1 Hari", price: "2k" },
        { duration: "1 Bulan", price: "10k" }
      ]},
      { type: "Sharing 3U (Antilimit)", items: [
        { duration: "1 Bulan", price: "15k" }
      ]},
      { type: "Private", items: [
        { duration: "1 Bulan", price: "32k" }
      ]}
    ]
  },
  {
    id: "vidio-platinum",
    name: "Vidio Platinum",
    category: "entertainment",
    startingPrice: "4k",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Vidio_logo.svg",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "All Device", items: [
        { duration: "Priv 1 Hari", price: "8k" },
        { duration: "Priv 3 Hari", price: "15k" },
        { duration: "Priv 7 Hari", price: "24k" },
        { duration: "Priv 1 Bulan", price: "45k" },
        { duration: "Sharing 1 Bulan", price: "26k" }
      ]},
      { type: "Mobile", items: [
        { duration: "Priv 1 Hari", price: "5k" },
        { duration: "Priv 3 Hari", price: "13k" },
        { duration: "Priv 7 Hari", price: "20k" },
        { duration: "Priv 1 Bulan", price: "28k" },
        { duration: "Sharing 1 Bulan", price: "22k" }
      ]},
      { type: "TV", items: [
        { duration: "Priv 1 Hari", price: "4k" },
        { duration: "Priv 3 Hari", price: "10k" },
        { duration: "Priv 7 Hari", price: "15k" },
        { duration: "Priv 1 Bulan", price: "17k" },
        { duration: "Sharing 1 Bulan", price: "10k" }
      ]}
    ]
  },
  {
    id: "viu",
    name: "Viu",
    category: "entertainment",
    startingPrice: "500p",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Viu_logo.svg",
    notes: [
      "acc seller",
      "durasi harian–6 bulan full garansi",
      "durasi 1 tahun garansi 6 bulan"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "5k" },
        { duration: "1 Tahun", price: "10k" }
      ]},
      { type: "Private Biasa", items: [
        { duration: "1 Hari", price: "500p" },
        { duration: "1 Bulan", price: "5k" },
        { duration: "2 Bulan", price: "8k" },
        { duration: "1 Tahun", price: "15k" }
      ]},
      { type: "Private Antilimit", items: [
        { duration: "1 Hari", price: "800p" },
        { duration: "1 Bulan", price: "7k" },
        { duration: "2 Bulan", price: "10k" },
        { duration: "1 Tahun", price: "15k" },
        { duration: "Lifetime", price: "25k" }
      ]},
      { type: "VIU+ Sharing", items: [
        { duration: "1 Bulan", price: "40k" }
      ]}
    ]
  },
  {
    id: "disney-hotstar",
    name: "Disney+ Hotstar",
    category: "entertainment",
    startingPrice: "5k",
    logo: "https://img.icons8.com/color/96/disney-plus.png",
    notes: [
      "private nomor customer",
      "acc seller full garansi"
    ],
    variants: [
      { type: "Sharing Premium", items: [
        { duration: "n Hari (Per Hari)", price: "5k/hari" },
        { duration: "1 Bulan (6U)", price: "28k" },
        { duration: "1 Bulan (10U)", price: "20k" }
      ]},
      { type: "Private", items: [
        { duration: "1 Bulan (Std)", price: "82k" },
        { duration: "1 Bulan (Premium)", price: "98k" }
      ]}
    ]
  },
  {
    id: "youku",
    name: "Youku",
    category: "entertainment",
    startingPrice: "700p",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Youku_logo.svg",
    notes: [
      "akun seller",
      "login google/biasa",
      "tidak bisa login di tv kecuali priv"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "n Hari (Per Hari)", price: "700p/hari" },
        { duration: "1 Bulan", price: "8k" },
        { duration: "3 Bulan", price: "12k" },
        { duration: "1 Tahun", price: "20k" }
      ]},
      { type: "Private", items: [
        { duration: "1 Bulan", price: "35k" }
      ]}
    ]
  },
  {
    id: "iqiyi",
    name: "iQIYI",
    category: "entertainment",
    startingPrice: "2,5k",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/dd/IQiyi_logo_2022.svg",
    notes: [
      "akun seller",
      "tidak bisa login di tv kecuali priv"
    ],
    variants: [
      { type: "Share Premium", items: [
        { duration: "1 Hari", price: "2,5k" },
        { duration: "3 Hari", price: "6k" },
        { duration: "7 Hari", price: "9k" },
        { duration: "1 Bulan", price: "10k" },
        { duration: "3 Bulan", price: "15k" },
        { duration: "1 Tahun", price: "25k" }
      ]},
      { type: "Share Standard", items: [
        { duration: "1 Bulan", price: "8k" }
      ]},
      { type: "Private Standard", items: [
        { duration: "1 Bulan", price: "27k" }
      ]},
      { type: "Private Premium", items: [
        { duration: "1 Bulan", price: "32k" }
      ]}
    ]
  },
  {
    id: "hbo-max",
    name: "HBO Max",
    category: "entertainment",
    startingPrice: "20k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/hbo-max.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Standard Sharing", items: [
        { duration: "1 Bulan", price: "20k" }
      ]},
      { type: "Standard Private", items: [
        { duration: "1 Bulan", price: "28k" }
      ]},
      { type: "Ultimate Sharing", items: [
        { duration: "1 Bulan", price: "20k" }
      ]},
      { type: "Ultimate Private", items: [
        { duration: "1 Bulan", price: "55k" }
      ]}
    ]
  },
  {
    id: "amazon-prime",
    name: "Prime Video",
    category: "entertainment",
    startingPrice: "2k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/prime-video.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing (3U)", items: [
        { duration: "1 Hari", price: "2k" },
        { duration: "3 Hari", price: "5k" },
        { duration: "7 Hari", price: "9k" },
        { duration: "1 Bulan", price: "11k" }
      ]},
      { type: "Private", items: [
        { duration: "1 Bulan", price: "13k" }
      ]}
    ]
  },
  {
    id: "melolo",
    name: "Melolo",
    category: "entertainment",
    startingPrice: "10k",
    logo: "https://img.icons8.com/fluency/96/video-playlist.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "10k" }
      ]}
    ]
  },
  {
    id: "bstation",
    name: "Bstation",
    category: "entertainment",
    startingPrice: "9k",
    logo: "https://img.icons8.com/color/96/bilibili.png",
    notes: [
      "akun seller",
      "tidak bisa login di tv kecuali priv"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "9k" },
        { duration: "3 Bulan", price: "13k" },
        { duration: "6 Bulan", price: "15k" },
        { duration: "1 Tahun", price: "17k" }
      ]},
      { type: "Private", items: [
        { duration: "1 Bulan", price: "35k" }
      ]}
    ]
  },
  {
    id: "crunchyroll",
    name: "Crunchyroll",
    category: "entertainment",
    startingPrice: "9k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/crunchyroll.png",
    notes: [
      "akun seller",
      "bisa download film",
      "bisa pakai vpn jika anime tidak ada"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "9k" },
        { duration: "1 Tahun", price: "20k" }
      ]},
      { type: "Private", items: [
        { duration: "1 Bulan", price: "29k" }
      ]}
    ]
  },
  {
    id: "loklok",
    name: "Loklok",
    category: "entertainment",
    startingPrice: "20k",
    logo: "https://img.icons8.com/color/96/cinema-.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Share Basic (3U)", items: [
        { duration: "1 Bulan", price: "20k" }
      ]},
      { type: "Share Standard (3U)", items: [
        { duration: "1 Bulan", price: "24k" }
      ]},
      { type: "Private", items: [
        { duration: "40 Hari", price: "40k" }
      ]}
    ]
  },
  {
    id: "catchplay",
    name: "Catchplay+",
    category: "entertainment",
    startingPrice: "10k",
    logo: "https://img.icons8.com/color/96/popcorn.png",
    notes: [
      "login di web/app",
      "tidak termasuk single rent/buy"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "10k" },
        { duration: "6 Bulan", price: "23k" },
        { duration: "1 Tahun", price: "27k" }
      ]}
    ]
  },
  {
    id: "drakor-id",
    name: "Drakor.id",
    category: "entertainment",
    startingPrice: "7k",
    logo: "https://img.icons8.com/fluency/96/video-playlist.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "7k" },
        { duration: "3 Bulan", price: "14k" },
        { duration: "6 Bulan", price: "20k" },
        { duration: "1 Tahun", price: "21k" }
      ]}
    ]
  },
  {
    id: "dramaboss",
    name: "DramaBoss",
    category: "entertainment",
    startingPrice: "21k",
    logo: "https://img.icons8.com/color/96/tv-show.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Tahun", price: "21k" }
      ]}
    ]
  },
  {
    id: "dramabox",
    name: "DramaBox",
    category: "entertainment",
    startingPrice: "8k",
    logo: "https://img.icons8.com/fluency/96/video.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "7 Hari", price: "8k" },
        { duration: "1 Bulan", price: "14k" }
      ]}
    ]
  },
  {
    id: "flextv",
    name: "FlexTV",
    category: "entertainment",
    startingPrice: "11k",
    logo: "https://img.icons8.com/color/96/play-button-circled.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "11k" }
      ]}
    ]
  },
  {
    id: "gagaoolala",
    name: "GagaOOLala",
    category: "entertainment",
    startingPrice: "12k",
    logo: "https://img.icons8.com/fluency/96/rainbow.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "12k" }
      ]}
    ]
  },
  {
    id: "moviebox",
    name: "Moviebox",
    category: "entertainment",
    startingPrice: "9k",
    logo: "https://img.icons8.com/color/96/popcorn.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "9k" },
        { duration: "3 Bulan", price: "14k" },
        { duration: "1 Tahun", price: "20k" }
      ]}
    ]
  },
  {
    id: "reelshort",
    name: "ReelShort",
    category: "entertainment",
    startingPrice: "12k",
    logo: "https://img.icons8.com/color/96/video-call.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "12k" },
        { duration: "3 Bulan", price: "22k" },
        { duration: "6 Bulan", price: "31k" }
      ]}
    ]
  },
  {
    id: "sunsiroll",
    name: "Sunsiroll",
    category: "entertainment",
    startingPrice: "17k",
    logo: "https://img.icons8.com/color/96/anime.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Tahun", price: "17k" }
      ]}
    ]
  },
  {
    id: "viki",
    name: "Viki",
    category: "entertainment",
    startingPrice: "16k",
    logo: "https://img.icons8.com/color/96/tv.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "16k" }
      ]},
      { type: "Private", items: [
        { duration: "1 Bulan", price: "31k" }
      ]}
    ]
  },
  {
    id: "wibuku",
    name: "Wibuku",
    category: "entertainment",
    startingPrice: "10k",
    logo: "https://img.icons8.com/color/96/anime.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "10k" },
        { duration: "6 Bulan", price: "18k" },
        { duration: "1 Tahun", price: "25k" }
      ]}
    ]
  },
  {
    id: "vision-paytv",
    name: "Vision+",
    category: "entertainment",
    startingPrice: "11k",
    logo: "https://img.icons8.com/color/96/tv-show.png",
    notes: [
      "akun seller",
      "login email",
      "soccer channel, bein sport (2,4,5), sportstar 1&2, spotv 1&2"
    ],
    variants: [
      { type: "Premium Sharing", items: [
        { duration: "7 Hari", price: "11k" },
        { duration: "1 Bulan", price: "15k" }
      ]},
      { type: "Premium + Beinsport Sharing", items: [
        { duration: "1 Bulan", price: "16k" }
      ]},
      { type: "Premium + Beinsport Private", items: [
        { duration: "1 Bulan", price: "27k" }
      ]}
    ]
  },
  {
    id: "mangotv",
    name: "Mango TV",
    category: "entertainment",
    startingPrice: "15k",
    logo: "https://img.icons8.com/color/96/mango.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing (VIP)", items: [
        { duration: "1 Bulan", price: "15k" }
      ]},
      { type: "Sharing (SVIP)", items: [
        { duration: "1 Bulan", price: "17k" }
      ]}
    ]
  },

  // ==================== MUSIC ====================
  {
    id: "spotify",
    name: "Spotify Premium",
    category: "music",
    startingPrice: "16k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/spotify.png",
    notes: [
      "fullgar = full garansi",
      "nogar = no garansi"
    ],
    variants: [
      { type: "Famplan", items: [
        { duration: "1 Bulan (Nogar)", price: "16k" },
        { duration: "1 Bulan (Fullgar)", price: "18k" },
        { duration: "2 Bulan (Fullgar)", price: "30k" }
      ]},
      { type: "Indplan (Fullgar)", items: [
        { duration: "1 Bulan", price: "24k" }
      ]}
    ]
  },
  {
    id: "youtube",
    name: "YouTube Premium",
    category: "music",
    startingPrice: "7k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/youtube.png",
    notes: [
      "acc seller tambahan biaya ask before order",
      "indplan butuh gmail fresh",
      "limit gabung famili 2x/tahun"
    ],
    variants: [
      { type: "Famplan", items: [
        { duration: "1 Bulan", price: "7k" },
        { duration: "n Bulan", price: "7k/bulan" }
      ]},
      { type: "Indplan", items: [
        { duration: "1 Bulan", price: "10k" },
        { duration: "n Bulan", price: "10k/bulan" }
      ]},
      { type: "Mixplan", items: [
        { duration: "3 Bulan", price: "30k" },
        { duration: "5 Bulan", price: "50k" }
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
      "acc buyer",
      "via invite link"
    ],
    variants: [
      { type: "Indplan (Android Only)", items: [
        { duration: "1 Bulan", price: "13k" }
      ]},
      { type: "Famplan (iOS/Android)", items: [
        { duration: "1 Bulan", price: "9k" }
      ]}
    ]
  },
  {
    id: "deezer",
    name: "Deezer",
    category: "music",
    startingPrice: "10k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/deezer.png",
    notes: [
      "acc buyer wajib fresh"
    ],
    variants: [
      { type: "Famplan", items: [
        { duration: "1 Bulan", price: "10k" }
      ]}
    ]
  },

  // ==================== EDUCATION, AI & PRODUCTIVITY ====================
  {
    id: "chatgpt-go",
    name: "ChatGPT",
    category: "education",
    startingPrice: "9k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/chatgpt.png",
    notes: [
      "akun seller",
      "plus 8u / go 8u & 5u"
    ],
    variants: [
      { type: "Plus Sharing (8U)", items: [
        { duration: "1 Hari", price: "9k" },
        { duration: "3 Hari", price: "13k" },
        { duration: "7 Hari", price: "21k" },
        { duration: "1 Bulan", price: "45k" }
      ]},
      { type: "Go Sharing (8U)", items: [
        { duration: "1 Hari", price: "10k" },
        { duration: "3 Hari", price: "14k" },
        { duration: "7 Hari", price: "19k" },
        { duration: "1 Bulan", price: "21k" }
      ]},
      { type: "Go Sharing (5U)", items: [
        { duration: "1 Hari", price: "12k" },
        { duration: "3 Hari", price: "17k" },
        { duration: "7 Hari", price: "23k" },
        { duration: "1 Bulan", price: "27k" }
      ]}
    ]
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    category: "education",
    startingPrice: "20k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/perplexity.png",
    notes: [
      "akun seller",
      "full garansi"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "20k" }
      ]},
      { type: "Private", items: [
        { duration: "1 Bulan", price: "24k" }
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
    id: "zoom",
    name: "Zoom Pro",
    category: "education",
    startingPrice: "11k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/zoom.png",
    notes: [
      "akun private 100 peserta"
    ],
    variants: [
      { type: "Private (100 Peserta)", items: [
        { duration: "1 Minggu", price: "11k" },
        { duration: "2 Minggu", price: "17k" },
        { duration: "1 Bulan", price: "20k" }
      ]}
    ]
  },
  {
    id: "duolingo-super",
    name: "Duolingo Super",
    category: "education",
    startingPrice: "8k",
    logo: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/duolingo.png",
    notes: [
      "famplan",
      "full garansi"
    ],
    variants: [
      { type: "Famplan", items: [
        { duration: "2 Minggu", price: "8k" },
        { duration: "1 Bulan", price: "10k" },
        { duration: "2 Bulan", price: "15k" }
      ]}
    ]
  },
  {
    id: "microsoft-365",
    name: "Microsoft 365",
    category: "education",
    startingPrice: "10k",
    logo: "https://img.icons8.com/color/96/microsoft-365.png",
    notes: [
      "via invite famplan"
    ],
    variants: [
      { type: "Famplan", items: [
        { duration: "1 Bulan", price: "10k" },
        { duration: "2 Bulan", price: "14k" }
      ]}
    ]
  },
  {
    id: "wps",
    name: "WPS Office",
    category: "education",
    startingPrice: "17k",
    logo: "https://img.icons8.com/color/96/file.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan (+AI)", price: "17k" },
        { duration: "1 Tahun", price: "28k" }
      ]},
      { type: "Private", items: [
        { duration: "1 Bulan", price: "30k" }
      ]}
    ]
  },
  {
    id: "grammarly",
    name: "Grammarly",
    category: "education",
    startingPrice: "16k",
    logo: "https://img.icons8.com/color/96/grammarly.png",
    notes: [
      "akun seller/buyer",
      "full garansi"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "16k" }
      ]},
      { type: "Private", items: [
        { duration: "1 Bulan", price: "31k" }
      ]}
    ]
  },
  {
    id: "quillbot",
    name: "QuillBot",
    category: "education",
    startingPrice: "17k",
    logo: "https://img.icons8.com/fluency/96/quill.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "17k" }
      ]}
    ]
  },
  {
    id: "scribd",
    name: "Scribd",
    category: "education",
    startingPrice: "6k",
    logo: "https://img.icons8.com/color/96/scribd.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "6k" }
      ]},
      { type: "Private", items: [
        { duration: "1 Bulan", price: "12k" }
      ]}
    ]
  },
  {
    id: "wattpad",
    name: "Wattpad Premium",
    category: "education",
    startingPrice: "12k",
    logo: "https://img.icons8.com/color/96/wattpad.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "12k" },
        { duration: "1 Tahun", price: "22k" }
      ]}
    ]
  },
  {
    id: "fizzo",
    name: "Fizzo Novel",
    category: "education",
    startingPrice: "10,5k",
    logo: "https://img.icons8.com/color/96/book-reading.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "1 Bulan", price: "10,5k" },
        { duration: "1 Tahun", price: "19k" }
      ]}
    ]
  },
  {
    id: "kilonotes",
    name: "Kilonotes",
    category: "education",
    startingPrice: "21k",
    logo: "https://img.icons8.com/fluency/96/note.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Premium", items: [
        { duration: "1 Bulan", price: "21k" }
      ]}
    ]
  },
  {
    id: "goodnotes",
    name: "GoodNotes",
    category: "education",
    startingPrice: "25k",
    logo: "https://img.icons8.com/fluency/96/note.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Premium", items: [
        { duration: "6 Bulan", price: "25k" }
      ]}
    ]
  },
  {
    id: "brainly",
    name: "Brainly Plus",
    category: "education",
    startingPrice: "24k",
    logo: "https://img.icons8.com/color/96/brain.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Premium", items: [
        { duration: "6 Bulan", price: "24k" }
      ]}
    ]
  },
  {
    id: "mathway",
    name: "Mathway",
    category: "education",
    startingPrice: "16k",
    logo: "https://img.icons8.com/color/96/calculator.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Premium", items: [
        { duration: "6 Bulan", price: "16k" }
      ]}
    ]
  },

  // ==================== EDITING & PHOTO ====================
  {
    id: "canva",
    name: "Canva Pro",
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
    name: "CapCut Pro",
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
    id: "ibis-paint",
    name: "Ibis Paint X",
    category: "editing",
    startingPrice: "19k",
    logo: "https://img.icons8.com/color/96/paint-palette.png",
    notes: [
      "akun seller",
      "support iOS / Android"
    ],
    variants: [
      { type: "Premium (iOS/Android)", items: [
        { duration: "1 Tahun", price: "19k" }
      ]}
    ]
  },
  {
    id: "mojo",
    name: "Mojo Stories",
    category: "editing",
    startingPrice: "25k",
    logo: "https://img.icons8.com/color/96/sparkling.png",
    notes: [
      "akun seller"
    ],
    variants: [
      { type: "Sharing", items: [
        { duration: "6 Bulan", price: "25k" }
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
    name: "Meitu VIP",
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
    name: "Getcontact Premium",
    category: "others",
    startingPrice: "18k",
    logo: "https://img.icons8.com/color/96/contact-details.png",
    notes: [
      "aktivasi/ppj",
      "no wa = no gtc",
      "garansi 25-30 day"
    ],
    variants: [
      { type: "Premium", items: [
        { duration: "1 Bulan", price: "18k" }
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
  },
  {
    id: 4,
    title: "YouTube Premium",
    time: "09 Sep 2026 • 09:38 WIB",
    image: "./assets/images/proof/testi4.png"
  },
  {
    id: 5,
    title: "Netflix",
    time: "02 Okt 2026 • 20:01 WIB",
    image: "./assets/images/proof/Testi5.jpg"
  },
  {
    id: 6,
    title: "Netflix",
    time: "02 Okt 2026 • 20:15 WIB",
    image: "./assets/images/proof/Testi 6.jpg"
  },
  {
    id: 7,
    title: "Netflix",
    time: "03 Okt 2026 • 08:33 WIB",
    image: "./assets/images/proof/Testi7.jpg"
  }
];
